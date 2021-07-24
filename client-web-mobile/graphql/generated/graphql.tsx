import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Doctor = {
  __typename?: 'Doctor';
  uuid?: Maybe<Scalars['ID']>;
  display_name?: Maybe<Scalars['String']>;
  mrn?: Maybe<Scalars['String']>;
  doctor_introduction?: Maybe<Scalars['String']>;
  specialities?: Maybe<Array<Maybe<DoctorSpecialities>>>;
  qualifications?: Maybe<Array<Maybe<DoctorQualifications>>>;
  languages_spoken?: Maybe<Array<Maybe<DoctorLanguagesSpoken>>>;
  last_online?: Maybe<Scalars['String']>;
  is_online?: Maybe<Scalars['Boolean']>;
  ready_to_accept_patients?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  photo?: Maybe<Scalars['String']>;
};

export type DoctorLanguagesSpoken = {
  __typename?: 'DoctorLanguagesSpoken';
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
};

export type DoctorQualifications = {
  __typename?: 'DoctorQualifications';
  id?: Maybe<Scalars['ID']>;
  degree?: Maybe<Scalars['String']>;
};

export type DoctorSpecialities = {
  __typename?: 'DoctorSpecialities';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum Gender {
  Male = 'male',
  Female = 'female'
}

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<User>;
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
};

export type Query = {
  __typename?: 'Query';
  doctors?: Maybe<Array<Maybe<Doctor>>>;
};


export type QueryDoctorsArgs = {
  is_online?: Scalars['Boolean'];
  specialities?: Maybe<Array<Scalars['String']>>;
};

export type User = {
  __typename?: 'User';
  uuid?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  doctor?: Maybe<Doctor>;
};

export type GetOnlineDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOnlineDoctorsQuery = (
  { __typename?: 'Query' }
  & { doctors?: Maybe<Array<Maybe<(
    { __typename?: 'Doctor' }
    & Pick<Doctor, 'display_name' | 'doctor_introduction' | 'ready_to_accept_patients' | 'is_online'>
    & { specialities?: Maybe<Array<Maybe<(
      { __typename?: 'DoctorSpecialities' }
      & Pick<DoctorSpecialities, 'name'>
    )>>> }
  )>>> }
);


export const GetOnlineDoctorsDocument = gql`
    query GetOnlineDoctors {
  doctors(is_online: true) {
    display_name
    doctor_introduction
    specialities {
      name
    }
    ready_to_accept_patients
    is_online
  }
}
    `;

/**
 * __useGetOnlineDoctorsQuery__
 *
 * To run a query within a React component, call `useGetOnlineDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnlineDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnlineDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOnlineDoctorsQuery(baseOptions?: Apollo.QueryHookOptions<GetOnlineDoctorsQuery, GetOnlineDoctorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnlineDoctorsQuery, GetOnlineDoctorsQueryVariables>(GetOnlineDoctorsDocument, options);
      }
export function useGetOnlineDoctorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnlineDoctorsQuery, GetOnlineDoctorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnlineDoctorsQuery, GetOnlineDoctorsQueryVariables>(GetOnlineDoctorsDocument, options);
        }
export type GetOnlineDoctorsQueryHookResult = ReturnType<typeof useGetOnlineDoctorsQuery>;
export type GetOnlineDoctorsLazyQueryHookResult = ReturnType<typeof useGetOnlineDoctorsLazyQuery>;
export type GetOnlineDoctorsQueryResult = Apollo.QueryResult<GetOnlineDoctorsQuery, GetOnlineDoctorsQueryVariables>;