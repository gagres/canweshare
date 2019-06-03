import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Components
import LoginScreen from './src/pages/Login';
import RegisterScreen from './src/pages/Register';
import HomeScreen from './src/pages/Home';

const MainNavigation = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: RegisterScreen },
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  navigationOptions: {
    headerLeft: null,
  }
})

const App = createAppContainer(MainNavigation);

export default App;