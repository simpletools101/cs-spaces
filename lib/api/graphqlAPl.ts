import * as zh from 'graphql-request'

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    headers: {
        authorizatin: `Bearer ${process.env.NEXT_AUTH_HYGRAPH_TOKEN}`,
    },
})
