import {
  DialysisCollaborationConfigQuery,
  DialysisCollaborationEditConfigQuery,
} from "@api.graphQL";

import { useLazyQuery } from "@apollo/client/react";

import {
  QUERY_DIALYSIS_COLLABORATION_CONFIG,
  QUERY_DIALYSIS_COLLABORATION_EDIT_CONFIG,
  // QUERY_GET_LOCATIONS,
} from "../gqls/graphQLGqls";

const useLQueryDialysisCollaborationConfig = () => {
  const [
    queryDialysisCollaborationConfig,
    queryDialysisCollaborationConfigResult,
  ] = useLazyQuery<DialysisCollaborationConfigQuery>(
    QUERY_DIALYSIS_COLLABORATION_CONFIG,
  );

  return [
    queryDialysisCollaborationConfig,
    queryDialysisCollaborationConfigResult,
  ] as const;
};

const useLQueryDialysisCollaborationEditConfig = () => {
  const [
    queryDialysisCollaborationEditConfig,
    queryDialysisCollaborationEditConfigResult,
  ] = useLazyQuery<DialysisCollaborationEditConfigQuery>(
    QUERY_DIALYSIS_COLLABORATION_EDIT_CONFIG,
  );
  return [
    queryDialysisCollaborationEditConfig,
    queryDialysisCollaborationEditConfigResult,
  ] as const;
};

export {
  useLQueryDialysisCollaborationConfig,
  useLQueryDialysisCollaborationEditConfig,
};
