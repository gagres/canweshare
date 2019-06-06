import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Components
import LoginScreen from './src/pages/Login';
import RegisterScreen from './src/pages/Register';
import PublicScreen from './src/pages/Public';
import FilePublic from './src/pages/FilePublic';
import PrivateScreen from './src/pages/Private';
import FilePrivate from './src/pages/FilePrivate';

const MainNavigation = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: RegisterScreen },
  Public: { screen: PublicScreen },
  FilePublic: { screen: FilePublic },
  Private: { screen: PrivateScreen },
  FilePrivate: { screen: FilePrivate },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  navigationOptions: {
    headerLeft: null,
  }
})

const App = createAppContainer(MainNavigation);

export default App;