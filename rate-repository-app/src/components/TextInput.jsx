import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textField: {
    borderRadius: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    marginVertical: 5,
  },
  textFieldError: {
    borderColor: 'red',
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? [style, styles.textFieldError] : [style] ;

  return <NativeTextInput style={[styles.textField, textInputStyle]} {...props} />;
};

export default TextInput;