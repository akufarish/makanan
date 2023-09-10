import {Image, StyleSheet, Text, View} from 'react-native';
import BottomBar from '../../components/bottomBar';
import Bell from 'react-native-eva-icons/icons/BellOutline';
import Person from 'react-native-eva-icons/icons/PersonOutline';
import Edit from 'react-native-eva-icons/icons/Edit_2Outline';
import Language from 'react-native-eva-icons/icons/GlobeOutline';
import Arrow from 'react-native-eva-icons/icons/ArrowIosForwardOutline';
import FeedBack from 'react-native-eva-icons/icons/MessageCircleOutline';
import Star from 'react-native-eva-icons/icons/StarOutline';
import Update from 'react-native-eva-icons/icons/ArrowCircleUpOutline';

export default function Profile() {
  return (
    <>
      <View className="flex bg-white rounded-md justify-between h-screen">
        <View className="mt-12">
          <View
            style={styles.shadow}
            className="bg-white rounded-md flex items-center justify-between flex-row p-6 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-5">
              <Image
                className="w-12 h-12 rounded-full"
                source={{
                  uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png',
                }}></Image>
              <View>
                <Text className="text-black text-lg">Fajar</Text>
                <Text className="text-slate-400 ">fajar@gmail.com</Text>
              </View>
            </View>
            <View className="bg-slate-200 p-2 rounded-full">
              <Bell width={30} height={30}></Bell>
            </View>
          </View>
          <View
            style={styles.shadow}
            className="bg-white rounded-md mt-12 flex items-center justify-between flex-row p-6 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-2">
              <Person width={30} height={30}></Person>
              <View>
                <Text className="text-black text-lg">Account Settings</Text>
              </View>
            </View>
            <Edit width={30} height={30}></Edit>
          </View>
          <View
            style={styles.shadow}
            className="bg-white rounded-t-md mt-7 flex items-center justify-between flex-row p-4 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-2">
              <Language width={30} height={30}></Language>
              <View>
                <Text className="text-black text-lg">Language</Text>
              </View>
            </View>
            <Arrow width={30} height={30}></Arrow>
          </View>
          <View
            style={styles.shadow}
            className="bg-white flex items-center justify-between flex-row p-4 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-2">
              <FeedBack width={30} height={30}></FeedBack>
              <View>
                <Text className="text-black text-lg">Feedback</Text>
              </View>
            </View>
            <Arrow width={30} height={30}></Arrow>
          </View>
          <View
            style={styles.shadow}
            className="bg-white flex items-center justify-between flex-row p-4 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-2">
              <Star width={30} height={30}></Star>
              <View>
                <Text className="text-black text-lg">Rating us</Text>
              </View>
            </View>
            <Arrow width={30} height={30}></Arrow>
          </View>
          <View
            style={styles.shadow}
            className="bg-white rounded-b-lg flex items-center justify-between flex-row p-4 mx-8 shadow-lg">
            <View className="flex flex-row items-center gap-2">
              <Update width={30} height={30}></Update>
              <View>
                <Text className="text-black text-lg">Update</Text>
              </View>
            </View>
            <Arrow width={30} height={30}></Arrow>
          </View>
          <View className="flex mt-12 justify-center items-center">
            <Text
              style={styles.shadow}
              className="bg-red-600 font-semibold px-4 py-3 w-40 text-center rounded-lg">
              Logout
            </Text>
          </View>
        </View>
        <BottomBar booking={false} home={false} profile={true}></BottomBar>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
