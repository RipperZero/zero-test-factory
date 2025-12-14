declare module "@api.graphQL" {
  type Maybe<T> = T | null;
  type InputMaybe<T> = Maybe<T>;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
  };
  type Incremental<T> =
    | T
    | {
        [P in keyof T]?: P extends " $fragmentName" | "__typename"
          ? T[P]
          : never;
      };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
  };

  type DialysisCollaborationConfigQueryVariables = Exact<{
    [key: string]: never;
  }>;

  type DialysisCollaborationConfigQuery = {
    dialysisCollaborationConfig: {
      __typename?: "DialysisCollaborationConfigRes";
      result: boolean;
      code: string;
      message: string;
      data: {
        __typename?: "DialysisCollaborationConfig";
        id: string;
        isOptionEnabled: boolean;
        dialysisDocTypeCode: number;
      };
    };
  };

  type DialysisCollaborationEditConfigQueryVariables = Exact<{
    [key: string]: never;
  }>;

  type DialysisCollaborationEditConfigQuery = {
    dialysisCollaborationEditConfig: {
      __typename?: "DialysisCollaborationEditConfigRes";
      result: boolean;
      code: string;
      message: string;
      data: {
        __typename?: "DialysisCollaborationEditConfig";
        id: string;
        isFreeEditable: boolean;
        isChiefEditable: boolean;
        isSubjectiveEditable: boolean;
        isObjectiveEditable: boolean;
        isAssessmentEditable: boolean;
        isPlanEditable: boolean;
      };
    };
  };
}
