import {Button, Text, View} from 'react-native';
import FoodCard from '../components/foodCard';

export default function Dashboard({navigation}) {
  return (
    <>
      <View className="flex justify-center items-center flex-1">
        <FoodCard></FoodCard>
      </View>
    </>
  );
}
