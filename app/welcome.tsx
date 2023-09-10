import {Image} from 'react-native';
import {Text, View} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <>
      <View className="flex bg-white justify-center items-center flex-1">
        <View className="flex flex-col justify-between items-center">
          <Image source={require('../assets/welcome.png')}></Image>
          <View className="mt-5 flex flex-col justify-center items-center">
            <Text className="text-black text-2xl">Welcome</Text>
            <Text className="text-slate-400 text-base mt-5 mx-12 text-center">
              Before enjoying Foodmedia services Please register first
            </Text>
          </View>
          <View className="mt-16 flex flex-col">
            <Text
              onPress={() => navigation.navigate('Dashboard')}
              className="bg-green-500 font-semibold text-white py-3 px-16 rounded-md">
              Create Account
            </Text>
            <Text
              onPress={() => navigation.navigate('Dashboard')}
              className="text-green-700 mt-5 font-semibold bg-green-300 py-3 px-16 rounded-md">
              Create Account
            </Text>
          </View>
          <Text className="text-black text-center mx-12 mt-12">
            By logging in or registering, you have agreed to{' '}
            <Text className="text-green-500">the Terms and Conditions</Text> and{' '}
            <Text className="text-green-500">Privacy Policy.</Text>
          </Text>
        </View>
      </View>
    </>
  );
}
