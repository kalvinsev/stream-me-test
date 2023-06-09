/* 8d8493fc0c0b9287c4b76e9c663575ee3f97df43
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export type CreateStreamMutationVariables = Types.Exact<{
  input: Types.StreamInput;
}>;
export type CreateStreamMutation = {
  __typename?: 'Mutation';
  addStream: {
    __typename?: 'Stream';
    _id: any;
    title: string;
    description: string;
    url: string;
  };
};
export declare const CreateStreamDocument: Apollo.DocumentNode;
export type CreateStreamMutationFn = Apollo.MutationFunction<CreateStreamMutation, CreateStreamMutationVariables>;
/**
 * __useCreateStreamMutation__
 *
 * To run a mutation, you first call `useCreateStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStreamMutation, { data, loading, error }] = useCreateStreamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useCreateStreamMutation(baseOptions?: Apollo.MutationHookOptions<CreateStreamMutation, CreateStreamMutationVariables>): Apollo.MutationTuple<CreateStreamMutation, Types.Exact<{
  input: Types.StreamInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateStreamMutationHookResult = ReturnType<typeof useCreateStreamMutation>;
export type CreateStreamMutationResult = Apollo.MutationResult<CreateStreamMutation>;
export type CreateStreamMutationOptions = Apollo.BaseMutationOptions<CreateStreamMutation, CreateStreamMutationVariables>;