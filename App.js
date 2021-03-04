/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native';
import Login from './Screens/Auth/Login/Login'
import { Provider } from 'react-redux'
import store from './redux/Stores/UserStore';
import MainStackNavigation from './Navigation/MainStackNavigation';
import SplashScreen from "react-native-lottie-splash-screen";

class App extends Component {
  // useEffect(() => {
  //   SplashScreen.hide(); // here
  // }, []);

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {

      SplashScreen.hide();
    }, 1000);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <StatusBar hidden />
          <MainStackNavigation>
            <Login />
          </MainStackNavigation>
        </Provider>
      </>
    );
  }
};

const styles = StyleSheet.create({

});

export default App;
