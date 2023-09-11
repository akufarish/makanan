import {Button, Text, View} from 'react-native';
import FoodCard from '../../components/foodCard';
import BottomBar from '../../components/bottomBar';

export default function Booking() {
  return (
    <>
      <View className="flex flex-col justify-between h-screen">
        <View className="flex justify-center items-center flex-1">
          <FoodCard
            title="makanan enak bintang 5"
            desc="makanan terbaik"
            image={
              'https://images.unsplash.com/photo-1694119548114-0427d1f51cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
            }></FoodCard>
          <FoodCard
            title="makanan enak bintang 5"
            desc="makanan terbaik"
            image={
              'https://images.unsplash.com/photo-1694119548114-0427d1f51cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
            }></FoodCard>
        </View>
        <BottomBar booking={true} home={false} profile={false}></BottomBar>
      </View>
    </>
  );
}
