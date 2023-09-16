import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useMe from '../hooks/useMe';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const paddingValue = 16;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.25,
    paddingBottom: paddingValue,
    paddingHorizontal: paddingValue,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabText: {
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

const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const onPress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.tabText}>
      <Pressable onPress={onPress}>
        <Text fontWeight="bold" fontSize="subheading" color="textLight">Sign Out</Text>
      </Pressable>
    </View>
  );
};

const AppBar = () => {
  const { me } = useMe();

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab to={'/'}>Repositories</AppBarTab>
        {me ?
          <SignOutTab />
          :
          <AppBarTab to={'/signin'}>Sign In</AppBarTab>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;