import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {styled} from 'nativewind' 
import "./global.css"

export default function App() {


  return (
    <View className='bg-black h-full justify-center items-center '>
      <View className=" h-96 justify-evenly items-center">
        <View className='w-20 h-20 bg-red-500 rounded-full justify-center items-center'>
          <Text className='text-white text-ig'>SI</Text>
        </View>
        <View className='h-200 justify-evenly'>
          <TouchableOpacity className='w-80 m-5 p-2 bg-white rounded-lg justify-center items-center '>
            <Text className="text-black text-base font-medium">Cadastra-se</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-80 m-5 p-2 bg-white rounded-lg justify-center items-center '>
            <Text className="text-black text-base font-medium">Faça Login</Text>  
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  );
}


