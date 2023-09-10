import {Button, Text, View} from 'react-native';
import FoodCard from '../components/foodCard';
import BottomBar from '../components/bottomBar';

export default function Dashboard() {
  return (
    <>
      <View className="flex flex-col justify-between h-screen">
        <View>
          <FoodCard></FoodCard>
        </View>
        <BottomBar booking={false} home={true} profile={false}></BottomBar>
      </View>
    </>
  );
}
