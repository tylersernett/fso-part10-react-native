import { useApolloClient, useMutation } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import { RETRIEVE_TOKEN } from '../graphql/mutations';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(RETRIEVE_TOKEN, {
    // onError: (error) => {
    //   console.error(error)
    // }
  });

  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } })
    if (response?.data?.authenticate) {
      const accessToken = response.data.authenticate.accessToken;
      await authStorage.setAccessToken(accessToken)
      apolloClient.resetStore()
      return { data: accessToken };
    }
  }

  return [signIn, result];
};

export default useSignIn;