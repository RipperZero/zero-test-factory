import { FC, useEffect, useState } from "react";

import { Card, Empty, Skeleton, Typography } from "antd";

import { guard, sleep, tryit } from "radash";

import { isNullable } from "@/shared/utils/tools";

import { Show } from "./Show";

const queryApi = async (params: boolean) => {
  console.log("params =>>>", params);
  await sleep(1000);

  return Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      name: `Item ${index + 1}`,
    };
  });
};

type ResItem = {
  id: number;
  name: string;
};

type ShowPageProps = {};

const ShowPage: FC<ShowPageProps> = () => {
  // #region hooks start
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState<Array<ResItem> | undefined>(undefined);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    let ignore = false;

    const query = async (params: boolean) => {
      console.log("params =>>>", params);

      setLoading(true);
      const [_e, res] = await tryit(queryApi)(true);
      if (!ignore) {
        setLoading(false);
        setRes(res);
      }
    };

    query(true);

    return () => {
      ignore = true;
    };
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-col gap-[8px]">
      <Typography.Title className="text-center">ShowPage</Typography.Title>

      <div className="flex min-h-[50vh] flex-col gap-[8px] p-4">
        <Show
          trigger={!loading}
          fallback={Array.from({ length: 6 }, (_, index) => {
            return (
              <Skeleton.Node
                key={index}
                className="!w-[50vw]"
                active
                fullSize
              />
            );
          })}
        >
          <Show
            trigger={res}
            hideWhenNullish={loading && isNullable(res)}
            banEmptyTrigger
            fallback={<Empty />}
          >
            {(res) => {
              return res.map((item) => {
                return (
                  <Card key={item.id} className="w-[50vw] text-center">
                    {item.name}
                  </Card>
                );
              });
            }}
          </Show>
        </Show>
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { ShowPageProps };
export { ShowPage };
