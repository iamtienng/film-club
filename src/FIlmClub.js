/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  MainFeed,
  Login,
  Notification,
  Profile,
  Register,
  Comment,
  Loading,
} from './components/screens';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'feed') {
    iconName = `home${focused ? '' : '-outline'}`;
  } else if (routeName === 'notification') {
    iconName = `heart${focused ? '' : '-outline'}`;
  } else if (routeName === 'profile') {
    iconName = `account${focused ? '' : '-outline'}`;
  }
  return <Icon name={iconName} size={28} color={tintColor} />;
};
const tabNavigation = createBottomTabNavigator(
  {
    feed: MainFeed,
    notification: Notification,
    profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false,
    },
  },
);
const screenNavigation = createSwitchNavigator(
  {
    register: Register,
    mainfeed: tabNavigation,
    login: Login,
    commentpage: Comment,
    loading: Loading,
  },
  {
    initialRouteName: 'loading',
  },
);
const MainStackContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: screenNavigation,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

class FilmClub extends Component {
  render() {
    return <MainStackContainer />;
  }
}

export default FilmClub;
