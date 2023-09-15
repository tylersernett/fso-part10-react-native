import { useApolloClient, useMutation } from '@apollo/client';

import { RETRIEVE_TOKEN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(RETRIEVE_TOKEN, {
    // onError: (error) => {
    //   console.error(error)
    // }
  });
  // const apolloClient = useApolloClient();

  // const signIn = async ({ username, password }) => {
  //   try {
  //     const response = await mutate({
  //       variables: { username, password },
  //     });

  //     if (response?.errors) {
  //       // Handle GraphQL errors here if needed
  //       // You can access the errors in response.errors
  //       console.error('GQL ERRORS!', response.errors)
  //       throw new Error('GraphQL error occurred');
  //     }

  //     const accessToken = response?.data?.authenticate?.accessToken;
  //     // authStorage.setAccessToken(accessToken);
  //     // apolloClient.resetStore();
  //     return { data: accessToken };
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //     throw error; // Re-throw the error to propagate it to the caller (SignIn component)
  //   }
  // };
  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } })
    if (response?.data?.authenticate) {
      // await authStorage.setAccessToken(data.authenticate.accessToken)
      // apolloClient.resetStore()
      console.log('signed in')
      const accessToken = response?.data?.authenticate?.accessToken;
  //     // authStorage.setAccessToken(accessToken);
  //     // apolloClient.resetStore();
      return { data: accessToken };
    }
  }

  return [signIn, result];
};

export default useSignIn;