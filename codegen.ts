import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // for better experience with the watcher
  ignoreNoDocuments: true,
  schema: "./graphql/dialysisCollaboration.graphql",
  documents: "./src/test-factory/graphQL/operations/**/graphQL*.ts",
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  generates: {
    "./src/@types/@api/graphQL.d.ts": {
      plugins: [
        {
          add: {
            content: 'declare module "@api.graphQL" {',
          },
        },
        {
          add: {
            placement: "append",
            content: "}",
          },
        },
        "typescript",
        "typescript-operations",
      ],
      config: {
        // #region typescript config ---start
        // @see https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#avoidoptionals

        // without export modifier
        noExport: true,

        // Use `unknown` instead of `any`
        defaultScalarType: "unknown",

        enumsAsTypes: true,
        futureProofUnions: true,
        useImplementingTypes: true,

        // __typename without "?"
        // nonOptionalTypename: true

        // avoid using TypeScript optionals (?)
        // avoidOptionals: {
        //   field: true,
        //   inputValue: true,
        //   object: true,
        //   defaultValue: true,
        // },

        // override the type value of Maybe
        // maybeValue: "T",
        // #endregion typescript config ---end

        // #region typescript-operations config ---start
        // @see https://www.graphql-code-generator.com/docs/plugins/typescript-operations

        // important!!!!
        onlyOperationTypes: true,

        preResolveTypes: true,

        // important!!!!
        // Apollo Client doesn't add the `__typename` field to root types so
        // don't generate a type for the `__typename` for root operation types.
        skipTypeNameForRoot: true,

        // Apollo Client always includes `__typename` fields
        // nonOptionalTypename: true,

        // Flatten fragment spread and inline fragments into a simple selection set before generating.
        flattenGeneratedTypes: true,
        // #endregion typescript-operations config ---end
      },
    },
  },
};

export default config;
