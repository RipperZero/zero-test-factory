import { FC } from "react";

import { Button, Space, Typography } from "antd";

import { tryit } from "radash";

import {
  useLQueryDialysisCollaborationConfig,
  useLQueryDialysisCollaborationEditConfig,
} from "./operations/queries/graphQLQueries";

type GraphQLProps = unknown;

const GraphQL: FC<GraphQLProps> = () => {
  // #region hooks start
  const [queryDialysisCollaborationConfig] =
    useLQueryDialysisCollaborationConfig();

  const [queryDialysisCollaborationEditConfig] =
    useLQueryDialysisCollaborationEditConfig();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleQueryDialysisCollaborationConfig = async () => {
    const [_e, res] = await tryit(queryDialysisCollaborationConfig)();

    console.log("handleQueryDialysisCollaborationConfig res", res);
  };

  const handleQueryDialysisCollaborationEditConfig = async () => {
    const [_e, res] = await tryit(queryDialysisCollaborationEditConfig)();

    console.log("handleQueryDialysisCollaborationEditConfig res", res);
  };
  // #endregion logic functions end

  // #region render functions start
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  // // @ts-expect-error:next-line
  // return data.locations.map(({ id, name, description, photo }) => (
  //   <div key={id}>
  //     <h3>{name}</h3>
  //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
  //     <br />
  //     <b>About this location:</b>
  //     <p>{description}</p>
  //     <br />
  //   </div>
  // ));

  return (
    <Space orientation="vertical">
      <Typography.Text>{"Test GraphQL"}</Typography.Text>

      <Button type="primary" onClick={handleQueryDialysisCollaborationConfig}>
        {"queryDialysisCollaborationConfig"}
      </Button>

      <Button
        type="primary"
        onClick={handleQueryDialysisCollaborationEditConfig}
      >
        {"queryDialysisCollaborationEditConfig"}
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export type { GraphQLProps };
export { GraphQL };
