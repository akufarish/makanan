import {Button, Text, View} from 'react-native';
import FoodCard from '../components/foodCard';
import BottomBar from '../components/bottomBar';

export default function Dashboard() {
  const gambar =
    'https://images.unsplash.com/photo-1693817027569-908462a0bca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  return (
    <>
      <View className="flex flex-col justify-between h-screen">
        <View className="flex justify-center items-center flex-1">
          <FoodCard
            title="Resto bintang 5"
            desc="makanan terbaik"
            image={gambar}></FoodCard>
          <FoodCard
            title="makanan enak bintang 5"
            desc="makanan terbaik"
            image={
              'https://images.unsplash.com/photo-1694119548114-0427d1f51cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
            }></FoodCard>
          <FoodCard
            title="kopi nyaman"
            desc="kopi sedap sedap"
            image="https://plus.unsplash.com/premium_photo-1694114804831-33622a2eacc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1572&q=80"></FoodCard>
        </View>
        <BottomBar booking={false} home={true} profile={false}></BottomBar>
      </View>
    </>
  );
}
