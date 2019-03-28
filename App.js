import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/auth/Auth';
import SharePlaceScreen from './src/screens/share-place/SharePlace';
import FindPlaceScreen from './src/screens/find-place/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider);

Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider);

Navigation.registerComponent(
"awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider);


// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
