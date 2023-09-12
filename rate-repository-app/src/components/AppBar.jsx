import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const paddingValue = 16;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.25,
    paddingBottom: paddingValue,
    paddingHorizontal: paddingValue,
    marginBottom: 12,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabText:{
    paddingHorizontal: paddingValue,
  }
});

const AppBarTab = ({ to, children }) => {
  return (
    <View style={styles.tabText}>
      <Pressable>
        <Link to={to}>
          <Text fontWeight="bold" fontSize="subheading" color="textLight">
            {children}
          </Text>
        </Link>
      </Pressable>
    </View>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab to={'/'}>Repositories</AppBarTab>
        <AppBarTab to={'/signin'}>Sign In</AppBarTab>
        <AppBarTab to={'/'}>Placeholder</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;