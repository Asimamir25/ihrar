import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  useEffect(() => {
    firestore()
      .collection('Users')
      .add({
        name: 'asim',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      }, []);
  });
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
