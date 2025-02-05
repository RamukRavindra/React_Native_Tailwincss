import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function Login() {
	return (
		<View className="bg-white h-full w-full">
			<StatusBar style='light' />
			<Image className="h-full w-full absolute" source={require("../../../src/assets/background.png")} />
		</View>
	)
}