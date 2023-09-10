import {Button, Text, View} from 'react-native';
import FoodCard from '../../components/foodCard';
import BottomBar from '../../components/bottomBar';

export default function Booking() {
  return (
    <>
      <View className="flex flex-col justify-between h-screen">
        <View>
          <FoodCard></FoodCard>
        </View>
        <BottomBar booking={true} home={false} profile={false}></BottomBar>
      </View>
    </>
  );
}
