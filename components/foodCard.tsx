import {Button, Image, Text, View} from 'react-native';
import Bell from 'react-native-eva-icons/icons/PinOutline';

interface FoodProps {
  image: string;
  title: string;
  desc: string;
}

export default function FoodCard({image, title, desc}: FoodProps) {
  return (
    <>
      <View className="flex flex-col justify-center items-center my-3">
        <View className="flex flex-col justify-center items-center gap-5">
          <View className="p-6 w-[370px] bg-white shadow-2xl rounded-md flex flex-row justify-between items-center">
            <Image
              className="w-24 h-24 rounded-md"
              source={{
                uri: image,
              }}></Image>
            <View>
              <Text className="text-black font-bold text-xl">{title}</Text>
              <View className="flex gap-2 flex-row items-center">
                <Bell width={20} height={20} fill="#22c55e"></Bell>
                <Text className="text-slate-400">{desc}</Text>
                <Text className="bg-green-500 px-2 py-2 rounded-lg font-semibold text-white">
                  Check
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
