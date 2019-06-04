import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from "firebase";

//import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignupScreen from "./screens/SignupScreen";
import SignInScreen from "./screens/SignInScreen";

var firebaseConfig = {
  apiKey: "AIzaSyBKZ9drJjZlm0bHkLaDz-IUCkNM--wnnqY",
  authDomain: "reactbootcamp-b3005.firebaseapp.com",
  databaseURL: "https://reactbootcamp-b3005.firebaseio.com",
  projectId: "reactbootcamp-b3005",
  storageBucket: "reactbootcamp-b3005.appspot.com",
  messagingSenderId: "542600800622",
  appId: "1:542600800622:web:8377d8f0f09a6126"
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignupScreen },
    Home: { screen: HomeScreen }
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  }
);

//create app container
const App = createAppContainer(MainNavigator);
export default App;
