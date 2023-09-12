import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const paddingValue = 16;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight*2,
    paddingBottom: paddingValue,
    paddingLeft: paddingValue,
    backgroundColor: theme.colors.primary,
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Text fontWeight="bold" fontSize="subheading" color="textLight">
      Repositories
    </Text>
  </View>;
};

export default AppBar;