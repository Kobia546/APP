import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Platform, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';
import Item from './Item';
import { StatusBar } from 'expo-status-bar';
import Pagination from './Pagination';

const { width: WindowWidth } = Dimensions.get('window');
const Slide = [
  {
    id: 1,
    title: "Cultivez,Vendez",
    image: require("./Images/femme.png")
  },
  {
    id: 2,
    title: "Ayez un recapitulatif de toutes vos culutres en temps reel! ",
    image: require("./Images/Dashboard.png")
  },
  {
    id: 3,  
    title: "Laissez nous vous livrer tous vos produits",
    image: require("./Images/voiture.png"),
    isLastSlide: true,
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const onScroll = (event) => {
    const slideSize = WindowWidth;
    const n = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(n);
    if (index !== roundIndex) {
      setIndex(roundIndex);
    }
  };

  const handleStartAdventure = () => {
    navigation.navigate('Register');
  };

  const renderLastSlide = () => {
    const lastSlide = Slide[Slide.length - 1];
    return (
      <View style={styles.slide}>
        <Image source={lastSlide.image} style={styles.image} />
        <Text style={styles.title}>{lastSlide.title}</Text>
        <Pressable style={styles.button} onPress={handleStartAdventure}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, { opacity: pressed ? 0.5 : 1 }]}>
              Deviens membre
            </Text>
          )}
        </Pressable>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    if (item.isLastSlide) {
      return renderLastSlide();
    }
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
    <Image 
         style={{width:100,height:100,top:10}}
        source={require('./Images/Manioc.jpg')}
       />

      <FlatList
        data={Slide}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
      />
      <Pagination index={index} data={Slide} />
      <StackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    bottom:30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
  },
  slide: {
    width: WindowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginLeft: 150,
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



