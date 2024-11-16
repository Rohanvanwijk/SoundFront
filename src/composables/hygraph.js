import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export const useHygraph = () => {

    const runtimeConfig = useRuntimeConfig()

    return  new ApolloClient({
        uri: runtimeConfig.apiUrl,
        cache: new InMemoryCache(),
    });
}
