import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  author?: Maybe<Author>;
  books?: Maybe<Array<Maybe<Book>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
  editAuthor: Author;
  addBook: Book;
  editBook: Book;
  removeAuthor: Author;
  removeBook: Book;
};


export type MutationAddAuthorArgs = {
  name: Scalars['String'];
  age: Scalars['Int'];
};


export type MutationEditAuthorArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  age: Scalars['Int'];
};


export type MutationAddBookArgs = {
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
};


export type MutationEditBookArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
};


export type MutationRemoveAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveBookArgs = {
  id: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'name' | 'id'>
  )>>> }
);

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = (
  { __typename?: 'Query' }
  & { authors?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'name' | 'id'>
  )>>> }
);

export type GetAdminAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminAuthorsQuery = (
  { __typename?: 'Query' }
  & { authors?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'name' | 'id'>
    & { books?: Maybe<Array<Maybe<(
      { __typename?: 'Book' }
      & Pick<Book, 'name' | 'id'>
    )>>> }
  )>>> }
);

export type GetBookDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBookDetailsQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name' | 'genre'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'name' | 'age'>
      & { books?: Maybe<Array<Maybe<(
        { __typename?: 'Book' }
        & Pick<Book, 'name' | 'id'>
      )>>> }
    )> }
  )> }
);

export type AddBookMutationVariables = Exact<{
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
}>;


export type AddBookMutation = (
  { __typename?: 'Mutation' }
  & { addBook: (
    { __typename?: 'Book' }
    & Pick<Book, 'name' | 'id'>
  ) }
);

export type RemoveBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveBookMutation = (
  { __typename?: 'Mutation' }
  & { removeBook: (
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name'>
  ) }
);

export type RemoveAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveAuthorMutation = (
  { __typename?: 'Mutation' }
  & { removeAuthor: (
    { __typename?: 'Author' }
    & Pick<Author, 'name' | 'id'>
  ) }
);


export const GetBooksDocument = gql`
    query getBooks {
  books {
    name
    id
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetAuthorsDocument = gql`
    query getAuthors {
  authors {
    name
    id
  }
}
    `;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, baseOptions);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, baseOptions);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export const GetAdminAuthorsDocument = gql`
    query getAdminAuthors {
  authors {
    name
    id
    books {
      name
      id
    }
  }
}
    `;

/**
 * __useGetAdminAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAdminAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminAuthorsQuery, GetAdminAuthorsQueryVariables>) {
        return Apollo.useQuery<GetAdminAuthorsQuery, GetAdminAuthorsQueryVariables>(GetAdminAuthorsDocument, baseOptions);
      }
export function useGetAdminAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminAuthorsQuery, GetAdminAuthorsQueryVariables>) {
          return Apollo.useLazyQuery<GetAdminAuthorsQuery, GetAdminAuthorsQueryVariables>(GetAdminAuthorsDocument, baseOptions);
        }
export type GetAdminAuthorsQueryHookResult = ReturnType<typeof useGetAdminAuthorsQuery>;
export type GetAdminAuthorsLazyQueryHookResult = ReturnType<typeof useGetAdminAuthorsLazyQuery>;
export type GetAdminAuthorsQueryResult = Apollo.QueryResult<GetAdminAuthorsQuery, GetAdminAuthorsQueryVariables>;
export const GetBookDetailsDocument = gql`
    query getBookDetails($id: ID!) {
  book(id: $id) {
    id
    name
    genre
    author {
      id
      name
      age
      books {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetBookDetailsQuery__
 *
 * To run a query within a React component, call `useGetBookDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetBookDetailsQuery, GetBookDetailsQueryVariables>) {
        return Apollo.useQuery<GetBookDetailsQuery, GetBookDetailsQueryVariables>(GetBookDetailsDocument, baseOptions);
      }
export function useGetBookDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookDetailsQuery, GetBookDetailsQueryVariables>) {
          return Apollo.useLazyQuery<GetBookDetailsQuery, GetBookDetailsQueryVariables>(GetBookDetailsDocument, baseOptions);
        }
export type GetBookDetailsQueryHookResult = ReturnType<typeof useGetBookDetailsQuery>;
export type GetBookDetailsLazyQueryHookResult = ReturnType<typeof useGetBookDetailsLazyQuery>;
export type GetBookDetailsQueryResult = Apollo.QueryResult<GetBookDetailsQuery, GetBookDetailsQueryVariables>;
export const AddBookDocument = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    id
  }
}
    `;
export type AddBookMutationFn = Apollo.MutationFunction<AddBookMutation, AddBookMutationVariables>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      name: // value for 'name'
 *      genre: // value for 'genre'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useAddBookMutation(baseOptions?: Apollo.MutationHookOptions<AddBookMutation, AddBookMutationVariables>) {
        return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument, baseOptions);
      }
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const RemoveBookDocument = gql`
    mutation removeBook($id: ID!) {
  removeBook(id: $id) {
    id
    name
  }
}
    `;
export type RemoveBookMutationFn = Apollo.MutationFunction<RemoveBookMutation, RemoveBookMutationVariables>;

/**
 * __useRemoveBookMutation__
 *
 * To run a mutation, you first call `useRemoveBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBookMutation, { data, loading, error }] = useRemoveBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveBookMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBookMutation, RemoveBookMutationVariables>) {
        return Apollo.useMutation<RemoveBookMutation, RemoveBookMutationVariables>(RemoveBookDocument, baseOptions);
      }
export type RemoveBookMutationHookResult = ReturnType<typeof useRemoveBookMutation>;
export type RemoveBookMutationResult = Apollo.MutationResult<RemoveBookMutation>;
export type RemoveBookMutationOptions = Apollo.BaseMutationOptions<RemoveBookMutation, RemoveBookMutationVariables>;
export const RemoveAuthorDocument = gql`
    mutation removeAuthor($id: ID!) {
  removeAuthor(id: $id) {
    name
    id
  }
}
    `;
export type RemoveAuthorMutationFn = Apollo.MutationFunction<RemoveAuthorMutation, RemoveAuthorMutationVariables>;

/**
 * __useRemoveAuthorMutation__
 *
 * To run a mutation, you first call `useRemoveAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAuthorMutation, { data, loading, error }] = useRemoveAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveAuthorMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAuthorMutation, RemoveAuthorMutationVariables>) {
        return Apollo.useMutation<RemoveAuthorMutation, RemoveAuthorMutationVariables>(RemoveAuthorDocument, baseOptions);
      }
export type RemoveAuthorMutationHookResult = ReturnType<typeof useRemoveAuthorMutation>;
export type RemoveAuthorMutationResult = Apollo.MutationResult<RemoveAuthorMutation>;
export type RemoveAuthorMutationOptions = Apollo.BaseMutationOptions<RemoveAuthorMutation, RemoveAuthorMutationVariables>;