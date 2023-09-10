import {StyleSheet, Text, View} from 'react-native';
import PersonIcon from 'react-native-eva-icons/icons/Person';
import Attach from 'react-native-eva-icons/icons/Attach_2Outline';
import Home from 'react-native-eva-icons/icons/Home';
import {useNavigation} from '@react-navigation/native';

interface propsBottom {
  home: boolean;
  profile: boolean;
  booking: boolean;
}

export default function BottomBar({home, profile, booking}: propsBottom) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={styles.shadow}
        className="bg-white w-full p-2 rounded-t-3xl justify-center shadow-xl items-center">
        <View style={styles.shadow} className="grid  grid-cols-3 mx-auto px-2">
          <View
            style={styles.shadow}
            className="flex flex-row justify-center gap-24 mb-3 text-center text-xs">
            <Home
              onPress={() => navigation.navigate('Dashboard')}
              width={38}
              height={38}
              fill={home == true ? '#22c55e' : 'black'}></Home>
            <Attach
              width={38}
              height={38}
              fill={booking == true ? '#22c55e' : 'black'}
              onPress={() => navigation.navigate('Booking')}></Attach>
            <PersonIcon
              onPress={() => navigation.navigate('Profile')}
              width={38}
              height={38}
              fill={profile == true ? '#22c55e' : 'black'}></PersonIcon>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});
