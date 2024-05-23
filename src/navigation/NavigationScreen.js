import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Register from '../auth/register/Register';
import Login from '../auth/signin/SignIn';
import {style} from './NavigationStyle';
import {
  AUTH_STACK_SCREEN,
  BOTTOM_TAB_SCREEN,
  STACK_SCREEN,
} from '../constants/Navigation';
import Home from '../screen/home/Home';
import JoinUs from '../screen/joinus/JoinUs';
import Explore from '../screen/explore/Explore';
import Profile from '../screen/profile/Profile';
import {MyTabs} from './Navigation';
export const AUTH_NAVIGATION_SCREEN = [
  {name: AUTH_STACK_SCREEN.SINGiN, component: Login},
  {name: AUTH_STACK_SCREEN.REGISTER, component: Register},
];
export const STACK_NAVIGATION_SCREEN = [
  {name: STACK_SCREEN.BOTTOM_TAB, component: MyTabs},
];
export const BOTTOM_NAVIGATION_SCREEN = [
  {
    displayName: Home,
    name: BOTTOM_TAB_SCREEN.HOME,
    component: Home,
    source: require('../../assets/bottom-tabs/home.png'),
    iconStyle: style.eventsIcon,
  },
  {
    displayName: JoinUs,
    name: BOTTOM_TAB_SCREEN.JOINUS,
    component: JoinUs,
    source: require('../../assets/bottom-tabs/home.png'),
    iconStyle: style.eventsIcon,
  },
  {
    displayName: Explore,
    name: BOTTOM_TAB_SCREEN.EXPLORE,
    component: Explore,
    source: require('../../assets/bottom-tabs/home.png'),
    iconStyle: style.eventsIcon,
  },
  {
    displayName: Profile,
    name: BOTTOM_TAB_SCREEN.PROFILE,
    component: Profile,
    source: require('../../assets/bottom-tabs/home.png'),
    iconStyle: style.eventsIcon,
  },
];
