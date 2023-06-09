/* 5c61a45b69ec6543d0288a7970b03f0f76af8a0e
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export type StreamQueryVariables = Types.Exact<{
  streamId: Types.Scalars['ObjectId'];
}>;
export type StreamQuery = {
  __typename?: 'Query';
  stream?: {
    __typename?: 'Stream';
    _id: any;
    title: string;
    description: string;
    url: string;
    author: {
      __typename?: 'User';
      _id: any;
      email: string;
    };
  } | null;
};
export declare const StreamDocument: Apollo.DocumentNode;
/**
 * __useStreamQuery__
 *
 * To run a query within a React component, call `useStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamQuery({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export declare function useStreamQuery(baseOptions: Apollo.QueryHookOptions<StreamQuery, StreamQueryVariables>): Apollo.QueryResult<StreamQuery, Types.Exact<{
  streamId: any;
}>>;
export declare function useStreamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StreamQuery, StreamQueryVariables>): Apollo.LazyQueryResultTuple<StreamQuery, Types.Exact<{
  streamId: any;
}>>;
export type StreamQueryHookResult = ReturnType<typeof useStreamQuery>;
export type StreamLazyQueryHookResult = ReturnType<typeof useStreamLazyQuery>;
export type StreamQueryResult = Apollo.QueryResult<StreamQuery, StreamQueryVariables>;