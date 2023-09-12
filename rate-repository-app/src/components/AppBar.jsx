import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const paddingValue = 16;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: paddingValue,
    paddingLeft: paddingValue,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row'
  },
  // ...
});

const AppBarTab = ({children}) => {
  return <Pressable>
    <Text fontWeight="bold" fontSize="subheading" color="textLight">
      {children} &nbsp;
    </Text>
  </Pressable>
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
      <AppBarTab>Other</AppBarTab>
    </View>
  );
};

export default AppBar;