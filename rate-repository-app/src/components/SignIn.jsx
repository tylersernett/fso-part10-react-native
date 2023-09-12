import { Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
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
  }
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

  const onSubmit = (values,) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Text fontWeight='bold' fontSize={'subheading'}>User login</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Pressable
              onPress={() => onSubmit()}
              style={isValid ? styles.button : [styles.button, styles.buttonDisabled]}
              disabled={!isValid}
            >
              <Text color='textLight' fontWeight='bold' fontSize={'subheading'}>Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  )
};

export default SignIn;