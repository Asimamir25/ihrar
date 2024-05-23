import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Register from './src/auth/register/Register';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
