import { gql } from "@apollo/client";

const QUERY_DIALYSIS_COLLABORATION_CONFIG = gql`
  query dialysisCollaborationConfig {
    dialysisCollaborationConfig {
      result
      code
      message
      data {
        id
        isOptionEnabled
        dialysisDocTypeCode
      }
    }
  }
`;

const QUERY_DIALYSIS_COLLABORATION_EDIT_CONFIG = gql`
  query dialysisCollaborationEditConfig {
    dialysisCollaborationEditConfig {
      result
      code
      message
      data {
        id
        isFreeEditable
        isChiefEditable
        isSubjectiveEditable
        isObjectiveEditable
        isAssessmentEditable
        isPlanEditable
      }
    }
  }
`;

export {
  QUERY_DIALYSIS_COLLABORATION_CONFIG,
  QUERY_DIALYSIS_COLLABORATION_EDIT_CONFIG,
};
