import { FC, Key } from "react";

import { FindAllUserResObj } from "@api.testFactory";
import Table, { ColumnsType } from "antd/es/table";

type UserTableProps = {
  loading?: boolean;
  userInfos?: FindAllUserResObj;
};

type TableData = { key: Key } & Pick<
  NonNullable<UserTableProps["userInfos"]>[0],
  "id" | "username" | "idcard" | "email" | "mobile"
>;

const columns: ColumnsType<TableData> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Idcard",
    dataIndex: "idcard",
    key: "idcard",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
  },
];

const createDataSource = (userInfos: UserTableProps["userInfos"]) => {
  return userInfos?.map<TableData>((userInfo) => {
    return {
      key: userInfo.id,
      id: userInfo.id,
      username: userInfo.username,
      idcard: userInfo.idcard,
      email: userInfo.email,
      mobile: userInfo.mobile,
    };
  });
};

const UserTable: FC<UserTableProps> = ({ loading = false, userInfos }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Table
      bordered
      loading={loading}
      columns={columns}
      dataSource={createDataSource(userInfos)}
    />
  );
  // #endregion render functions end
};

export { UserTable };
