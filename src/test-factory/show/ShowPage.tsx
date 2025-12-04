import { FC, Suspense, use, useEffect, useState } from "react";

import { Button, Card, Empty, Skeleton, Typography } from "antd";

import { sleep, tryit } from "radash";

import { GetPatientList } from "@api.mockAPI";

import { getPatientList } from "@/api";
import { isNullable } from "@/shared/utils/tools";

import { Show } from "./Show";

// const getPatientListPromise = getPatientList();

type GetPatientListPromise = ReturnType<typeof getPatientList>;

const PatientList: FC<{
  getPatientListPromise: GetPatientListPromise;
}> = ({ getPatientListPromise }) => {
  // const res = use(getPatientListPromise) as GetPatientList;
  const res = use(getPatientListPromise) as unknown as GetPatientList;

  return res.map((item) => {
    return (
      <Card key={item.wardId} className="w-[50vw] text-center">
        {item.wardNumber}
      </Card>
    );
  });
};

// const queryApi = async (params: boolean) => {
//   console.log("params =>>>", params);
//   await sleep(1000);

//   return Array.from({ length: 10 }, (_, index) => {
//     return {
//       id: index + 1,
//       name: `Item ${index + 1}`,
//     };
//   });
// };

// type ResItem = {
//   id: number;
//   name: string;
// };

type ShowPageProps = unknown;

const ShowPage: FC<ShowPageProps> = () => {
  // #region hooks start
  const [getPatientListPromise, setGetPatientListPromise] =
    useState<GetPatientListPromise>(getPatientList);
  // const [loading, setLoading] = useState(true);
  // const [res, setRes] = useState<Array<ResItem> | undefined>(undefined);
  // const [getPatientListRes, setGetPatientListRes] = useState<
  //   GetPatientList | undefined
  // >(undefined);
  // #endregion hooks end

  // #region useEffect functions start
  // useEffect(() => {
  //   let ignore = false;

  //   const query = async (params: boolean) => {
  //     console.log("params =>>>", params);

  //     setLoading(true);
  //     // const [_e, res] = await tryit(queryApi)(true);
  //     const [_e, res] = await tryit(getPatientList)();
  //     if (!ignore) {
  //       setLoading(false);
  //       // setRes(res);
  //       setGetPatientListRes(res as unknown as GetPatientList);
  //     }
  //   };

  //   query(true);

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-col gap-[8px]">
      <Typography.Title className="text-center">ShowPage</Typography.Title>

      {/* <div className="flex min-h-[50vh] flex-col gap-[8px] p-4">
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
            trigger={getPatientListRes}
            hideWhenNullish={loading && isNullable(getPatientListRes)}
            banEmptyTrigger
            fallback={<Empty />}
          >
            {(res) => {
              return res.map((item) => {
                return (
                  <Card key={item.wardId} className="w-[50vw] text-center">
                    {item.wardNumber}
                  </Card>
                );
              });
            }}
          </Show>
        </Show>
      </div> */}
      <Button
        className="w-[200px]"
        type="primary"
        onClick={() => {
          setGetPatientListPromise(getPatientList());
        }}
      >
        ReQuery
      </Button>

      <div className="flex min-h-[50vh] flex-col gap-[8px] p-4">
        <Suspense
          fallback={Array.from({ length: 6 }, (_, index) => {
            return <Skeleton.Node key={index} className="!w-[50vw]" active />;
          })}
        >
          <PatientList getPatientListPromise={getPatientListPromise} />
        </Suspense>
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { ShowPageProps };
export { ShowPage };
