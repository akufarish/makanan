import {Button, Image, Text, View} from 'react-native';
import Bell from 'react-native-eva-icons/icons/PinOutline';

export default function FoodCard() {
  return (
    <>
      <View className="flex flex-col justify-center items-center gap-5">
        <View className="p-6 w-[370px] bg-white shadow-2xl rounded-md flex flex-row justify-between items-center">
          <Image
            className="w-24 h-24 rounded-md"
            source={{
              uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            }}></Image>
          <View>
            <Text className="text-black font-bold text-xl">Ambrosia Hotel</Text>
            <View className="flex gap-2 flex-row items-center">
              <Bell width={20} height={20} fill="#22c55e"></Bell>
              <Text className="text-slate-400">Ambrosia Hotel</Text>
              <Text className="bg-green-500 px-2 py-2 rounded-lg font-semibold text-white">
                Check
              </Text>
            </View>
          </View>
        </View>
        <View className="p-6 w-[370px] bg-white shadow-2xl rounded-md flex flex-row justify-between items-center">
          <Image
            className="w-24 h-24 rounded-md"
            source={{
              uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            }}></Image>
          <View>
            <Text className="text-black font-bold text-xl">Ambrosia Hotel</Text>
            <View className="flex gap-2 flex-row items-center">
              <Bell width={20} height={20} fill="#22c55e"></Bell>
              <Text className="text-slate-400">Ambrosia Hotel</Text>
              <Text className="bg-green-500 px-2 py-2 rounded-lg font-semibold text-white">
                Check
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
