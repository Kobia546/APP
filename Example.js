import React, { useState } from 'react';
import { NativeBaseProvider, Box, HStack, Pressable, Center, Icon, Text, View,} from 'native-base';
import { StyleSheet,Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import menu from "./Images/menu.png"
import notification from "./Images/notification.png"
import  MyComponent from './Mycomponent';


export default function Example() {
  const [selected, setSelected] = useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%"  alignSelf="center">
      <View style={styles.vue}  >
      <Pressable   >
      <Image  style={{ width: 50, height: 50, marginLeft: 10 }}   source={menu} alt=" Mon menu"/>
      </Pressable>
     <Image  style={{ width: 40, height: 40, marginLeft:250,top:10}}  source={notification} />
   </View>
      <MyComponent  />
 


 
       
      
        
        <HStack bg="green.500" alignItems="center" safeAreaBottom shadow={6}  position="absolute" bottom={0} left={0} right={0} >
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;

}
const styles= StyleSheet.create({

vue:{
flexDirection:"row",
paddingHorizontal:10,
top:10,

 
},
})