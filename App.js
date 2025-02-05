import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'
import { Image, StatusBar, Text, View } from 'react-native'

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigation />
    // </NavigationContainer>
    <View className="bg-white h-full w-full">
      <StatusBar style='light' />
      <Image className="h-full w-full absolute" source={require("./src/assets/background.png")} />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Image className="h-[225] w-[90]" source={require("./src/assets/light.png")} />
        <Image className="h-[160] w-[65]" source={require("./src/assets/light.png")} />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Text className="text-white font-bold tracking-wider text-5xl">Login</Text>
        </View>

      </View>
    </View>
  )
}