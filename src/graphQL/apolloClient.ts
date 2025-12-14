// import { isDevelopment } from "@/shared/utils/envUtils";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// import { connectApolloClientToVSCodeDevTools } from "@apollo/client-devtools-vscode";

const httpLink = new HttpLink({
  uri: "http://localhost:8080/graphql",
});

const client = new ApolloClient({
  // link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
  link: httpLink,
  cache: new InMemoryCache(),
  devtools: {
    name: "Zero Apollo Client",
    enabled: true,
  },
});

// if (isDevelopment()) {
//   const _devtoolsRegistration = connectApolloClientToVSCodeDevTools(
//     client,
//     // the default port of the VSCode DevTools is 7095
//     "ws://localhost:7095",
//   );
// }

export { client };
