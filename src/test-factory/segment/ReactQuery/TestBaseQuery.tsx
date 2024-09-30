import { FC } from "react";

import { findAllUser } from "@/api";
import { UserTable } from "@/test-factory/components";
import { useQuery } from "@tanstack/react-query";

const TestBaseQuery: FC = () => {
  // #region hooks start
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: findAllUser,
    // enabled: false,
  });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <UserTable loading={isLoading} userInfos={data?.data} />;
  // #endregion render functions end
};

export { TestBaseQuery };
