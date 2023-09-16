import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native'
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    ...theme.containerBody
  },
  button: {
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: theme.colors.textSecondary
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10, // Adjust the margin as needed
  },
});

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const [signInError, setSignInError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(`Signing In w/ username: ${username} and password: ${password}`);
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
      setSignInError('Invalid username or password')
    }
  };

  const resetError = () => {
    setSignInError('')
  }


  return (
    <View style={styles.container}>
      <Text fontWeight='bold' fontSize={'subheading'}>User login</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid }) => ( //these are both Formik props
          <>
            <FormikTextInput name="username" placeholder="Username" onChange={()=> resetError()}/>
            <FormikTextInput name="password" placeholder="Password" onChange={()=> resetError()} secureTextEntry />
            <Pressable
              onPress={() => handleSubmit()}
              style={isValid ? styles.button : [styles.button, styles.buttonDisabled]}
              disabled={!isValid}
            >
              <Text color='textLight' fontWeight='bold' fontSize={'subheading'}>Sign In</Text>
            </Pressable>
            {signInError && (
              <Text style={styles.errorText}>{signInError}</Text>
            )}
          </>
        )}
      </Formik>
    </View>
  )
};

export default SignIn;