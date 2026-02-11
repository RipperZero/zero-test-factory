import { FC, useEffect } from "react";

type HeavyProps = { count: number };

const Heavy: FC<HeavyProps> = ({ count }) => {
  // #region hooks start
  // no local hooks required currently
  // #endregion hooks end

  // #region logic functions start
  const summary = `rendering summary for ${count} items`;
  // #endregion logic functions end

  // #region useEffect functions start
  useEffect(() => {
    // simulate telemetry for heavy component
    // eslint-disable-next-line no-console
    console.log("Heavy rendered for count", count);
  }, [count]);
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <div style={{ padding: 8, background: "#fafafa", borderRadius: 6 }}>
      <strong>Heavy View</strong>
      <div style={{ marginTop: 6, color: "#333" }}>{summary}</div>
    </div>
  );
  // #endregion render functions end
};

export type { HeavyProps };
export { Heavy };
