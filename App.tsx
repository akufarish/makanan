import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './app/page';
import Login from './app/auth/Login';
import Profile from './app/profile';
import Booking from './app/booking/booking';
import Welcome from './app/welcome';
import Intro from './app/intro';
import BootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro}></Stack.Screen>
          <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
          <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
          <Stack.Screen name="Booking" component={Booking}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
