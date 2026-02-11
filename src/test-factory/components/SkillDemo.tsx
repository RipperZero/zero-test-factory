import {
  ChangeEvent,
  createContext,
  FC,
  lazy,
  startTransition,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Demonstrates rules from installed skills:
// - composition over boolean props (compound components)
// - state container/provider pattern
// - deferred updates via startTransition
// - dynamic import for heavy parts

type Item = { id: number; value: number };

const ListContext = createContext<{
  count: number;
  setCount: (v: number | ((n: number) => number)) => void;
  filter: string;
  setFilter: (s: string) => void;
  items: Item[];
} | null>(null);

function useList() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useList must be used inside provider");
  return ctx;
}

const Heavy = lazy(() => import("./Heavy").then((m) => ({ default: m.Heavy })));

type SkillDemoProps = unknown;

const SkillDemo: FC<SkillDemoProps> = () => {
  // #region hooks start
  const [count, setCount] = useState(1200);
  const [filter, setFilter] = useState("");
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    // telemetry for demo purposes
    console.log("SkillDemo mounted/updated, count=", count);
  }, [count]);
  // #endregion useEffect functions end

  // #region logic functions start
  const items = useMemo(() => {
    const arr: Item[] = [];
    for (let i = 0; i < count; i++) arr.push({ id: i, value: i });
    return arr;
  }, [count]);
  // #endregion logic functions end

  // #region render functions start
  return (
    <ListContext.Provider value={{ count, setCount, filter, setFilter, items }}>
      <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
        <h3>Skills-aware Demo (Compound Components + React19)</h3>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Filter />
          <Actions />
          <div style={{ marginLeft: "auto" }}>
            Total: <strong>{count}</strong>
          </div>
        </div>

        <div style={{ marginTop: 10 }}>
          <ListView />
        </div>

        <div style={{ marginTop: 12 }}>
          <Suspense fallback={<div>Loading heavy view...</div>}>
            <Heavy count={count} />
          </Suspense>
        </div>
      </div>
    </ListContext.Provider>
  );
  // #endregion render functions end
};

type FilterProps = unknown;

const Filter: FC<FilterProps> = () => {
  // #region hooks start
  const { filter, setFilter } = useList();
  // #endregion hooks end

  // #region render functions start
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <label style={{ fontSize: 13 }}>Filter</label>
      <input
        value={filter}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
        placeholder="type digits"
        style={{ padding: "6px 8px" }}
      />
    </div>
  );
  // #endregion render functions end
};

type ActionsProps = unknown;

const Actions: FC<ActionsProps> = () => {
  // #region render functions start
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Increase />
      <Reset />
    </div>
  );
  // #endregion render functions end
};

type IncreaseProps = unknown;

const Increase: FC<IncreaseProps> = () => {
  // #region hooks start
  const { setCount } = useList();
  // #endregion hooks end

  // #region render functions start
  return (
    <button
      onClick={() => startTransition(() => setCount((c) => c + 1000))}
      style={{ padding: "6px 10px" }}
    >
      +1000 (deferred)
    </button>
  );
  // #endregion render functions end
};

type ResetProps = unknown;

const Reset: FC<ResetProps> = () => {
  // #region hooks start
  const { setCount } = useList();
  // #endregion hooks end

  // #region render functions start
  return (
    <button onClick={() => setCount(1200)} style={{ padding: "6px 10px" }}>
      Reset
    </button>
  );
  // #endregion render functions end
};

type ListViewProps = unknown;

const ListView: FC<ListViewProps> = () => {
  // #region hooks start
  const { items, filter } = useList();
  // #endregion hooks end

  // #region logic functions start
  const q = filter.trim();
  const visible = useMemo(() => {
    if (!q) return items.slice(0, 40);
    return items.filter((it) => String(it.value).includes(q)).slice(0, 60);
  }, [items, q]);
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      style={{
        maxHeight: 220,
        overflow: "auto",
        border: "1px solid #fafafa",
        padding: 8,
      }}
    >
      {visible.length === 0 ? (
        <div style={{ color: "#666" }}>No matches</div>
      ) : (
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {visible.map((it) => (
            <li
              key={it.id}
              style={{ padding: "6px 4px", borderBottom: "1px solid #f7f7f7" }}
            >
              #{it.id}: {it.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  // #endregion render functions end
};

export type { SkillDemoProps };
export { SkillDemo };
