import {useState} from 'react';
import {View, Image, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Arrow from 'react-native-eva-icons/icons/ArrowForwardOutline';
import ArrowBack from 'react-native-eva-icons/icons/ArrowBackOutline';

const slides = [
  {
    id: 1,
    title: 'Nearby restaurants',
    text: "You don't have to go far to find a good restaurant, we have provided all the restaurants that is near you",
    image: require('../assets/intro1.png'),
  },
  {
    id: 2,
    title: 'Select the Favorites Menu',
    text: "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    image: require('../assets/intro2.png'),
  },
  {
    id: 3,
    title: 'Good food at a cheap price',
    text: 'You can eat at expensive restaurants with affordable price',
    image: require('../assets/intro3.png'),
  },
];

export default function Intro({navigation}) {
  const [intro, setIntro] = useState(false);

  if (!intro) {
    return (
      <AppIntroSlider
        dotStyle={{backgroundColor: '#cbd5e1'}}
        activeDotStyle={{backgroundColor: '#22c55e'}}
        data={slides}
        showSkipButton={true}
        renderNextButton={() => {
          return (
            <Text className="text-green-500 text-xl">
              <Arrow width={30} height={30} fill={'#22c55e'}></Arrow>
            </Text>
          );
        }}
        renderSkipButton={() => {
          return <Text className="text-black text-xl">Skip</Text>;
        }}
        showDoneButton={true}
        renderDoneButton={() => {
          return (
            <Text className="text-green-500 text-xl">
              <Arrow
                onPress={() => {
                  navigation.navigate('Welcome');
                }}
                width={30}
                height={30}
                fill={'#22c55e'}></Arrow>
            </Text>
          );
        }}
        renderItem={({item}) => {
          return (
            <>
              <View className="flex bg-white justify-center flex-col items-center flex-1">
                <Image
                  source={item.image}
                  className=""
                  resizeMode="contain"></Image>
                <Text className="text-black mt-5 text-center font-semibold text-xl">
                  {item.title}
                </Text>
                <Text className="text-black mt-5 mx-12 text-center text-base">
                  {item.text}
                </Text>
              </View>
            </>
          );
        }}></AppIntroSlider>
    );
  }
}

function IfDone() {}
