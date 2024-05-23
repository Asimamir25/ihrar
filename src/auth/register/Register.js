import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';

import * as yup from 'yup';
import {AUTH_STACK_SCREEN} from '../../constants/Navigation';
import {ScrollView} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    name: yup
      .string()
      .min(8, ({min}) => `Name must be at least ${min} characters`)
      .required('Name is required'),
  });
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#f3f6ff'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Image
              source={require('../../../assets/Logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={{paddingHorizontal: 20, gap: 20}}>
            <Text
              style={{
                // textAlign: 'center',
                paddingTop: 20,
                fontSize: 24,
                color: 'black',
                fontWeight: '600',
                // letterSpacing: 3,
              }}>
              Register
            </Text>

            <Formik
              initialValues={{email: '', password: '', name: ''}}
              validationSchema={loginValidationSchema}
              onSubmit={values => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Name"
                      outlineColor="#BB2525"
                      placeholder="Enter Name"
                      activeOutlineColor="#BB2525"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {errors.name && (
                      <Text style={{fontSize: 10, color: 'black'}}>
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      placeholder="Enter Email"
                      // outlineColor="#BB2525"
                      style={{borderTopRadius: 13}}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      activeOutlineColor="#BB2525"
                      value={values.email}
                      keyboardType="email-address"
                    />
                    {errors.email && (
                      <Text style={{fontSize: 10, color: 'black'}}>
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Password"
                      outlineColor="#BB2525"
                      placeholder="Enter Password"
                      // activeOutlineColor="#BB2525"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                    />
                    {errors.password && (
                      <Text style={{fontSize: 10, color: 'black'}}>
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#BB2525',
                      height: 44,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                    }}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '700',
                        letterSpacing: 1.5,
                      }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(AUTH_STACK_SCREEN.SINGiN);
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 19,
                color: 'black',
                paddingTop: 10,
              }}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 300,
  },
});
