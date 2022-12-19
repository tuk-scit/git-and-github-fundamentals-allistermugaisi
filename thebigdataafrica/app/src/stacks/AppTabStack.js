import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Details } from '../screens/app';
import { HomeStack, ProfileStack } from './AppStack';

import { AntDesign, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppTabStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
				// tabBarStyle: [
				// 	{
				// 		position: 'absolute',
				// 		height: 70,
				// 		bottom: 5,
				// 		left: 20,
				// 		right: 20,
				// 		backgroundColor: '#fff',
				// 		borderRadius: 10,
				// 		...styles.shadow,
				// 	},
				// 	null,
				// ],
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={({ route }) => ({
					// tabBarStyle: { display: 'none' },
					// tabBarStyle: { display: getRouteNameHomeScreen(route) },
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								top: 5,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name="home"
								size={22}
								color={focused ? '#7CC89A' : 'gray'}
							/>
							<Text
								style={{
									color: focused ? '#7CC89A' : 'gray',
								}}
							>
								Home
							</Text>
						</View>
					),
				})}
			/>

			<Tab.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					title: 'Profile & Settings',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								top: 5,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<AntDesign
								name="profile"
								size={22}
								color={focused ? '#7CC89A' : 'gray'}
							/>
							<Text
								style={{
									color: focused ? '#7CC89A' : 'gray',
								}}
							>
								Profile
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppTabStack;

const getRouteNameHomeScreen = (route) => {
	const routeName = getFocusedRouteNameFromRoute(route);
	console.log(routeName);

	if (
		routeName?.name === 'SurveyDetails' &&
		routeName?.name === 'SurveyeeForm'
	) {
		return 'none';
	} else {
		return 'flex';
	}
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#0052ff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
