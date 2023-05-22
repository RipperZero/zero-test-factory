import { FC } from "react";

import { Spin } from "antd";

import { useQuery } from "@tanstack/react-query";
import { findAllUser } from "api";

const TestReactQuery: FC = () => {
  // #region hooks start
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: findAllUser,
  });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {data?.data.map((user) => {
            return <div key={user.id}>{user.username}</div>;
          })}
        </>
      )}
    </>
  );
  // #endregion render functions end
};

export { TestReactQuery };
