import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Complete from "./components/week4/Assignment4/Complete";
import Active from "./components/week4/Assignment4/Active";
import All from "./components/week4/Assignment4/All";
import Ionicons from "react-native-vector-icons/Ionicons";

import ContactsScreen from "./components/week4/Lap4/ContactsScreen";
import MessagesScreen from "./components/week4/Lap4/MessagesScreen";
import GroupsScreen from "./components/week4/Lap4/GroupsScreen";
import TimelineScreen from "./components/week4/Lap4/TimelineScreen";
import MoreScreen from "./components/week4/Lap4/MoreScreen";
import SingleTodoScreen from "./components/week4/Assignment4/SingleTodoScreen";

// const AllStack = createStackNavigator(
// 	{
// 	  All: All,
// 	  SingleTodo: SingleTodoScreen
// 	},
//   );
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 18, padding: 25 }}>Home Screen</Text>
			<Button
				title="Go to Week4"
				onPress={() => navigation.navigate("Week4")}
			/>
		</View>
	);
}

function Week4({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 18, padding: 25 }}>Week4</Text>
			<Button
				title="Go to Assignment4"
				onPress={() => navigation.navigate("Assignment4")}
			/>
			<Button
				title="Go to Lab4"
				onPress={() => navigation.navigate("Lab4")}
			/>
		</View>
	);
}

function Lab4({ navigation }) {
	
	return (
		<Tab.Navigator
			initialRouteName="Messages"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Contacts") {
						iconName = focused ? "ios-contacts" : "ios-contacts";
					} else if (route.name === "Messages") {
						iconName = focused
							? "ios-chatbubbles" : "ios-chatbubbles"
					} else if (route.name === "Groups") {
						iconName = focused ? "ios-people" : "ios-people";
					}
					else if (route.name === "Timeline") {
						iconName = focused ? "ios-bookmarks" : "ios-bookmarks";
					}
					else if (route.name === "More") {
						iconName = focused ? "ios-options" : "ios-options";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "tomato",
				inactiveTintColor: "gray",
			}}
		>
			<Tab.Screen name="Messages" component={MessagesScreen} />
			<Tab.Screen name="Contacts" component={ContactsScreen} />
			<Tab.Screen name="Groups" component={GroupsScreen} />
			<Tab.Screen name="Timeline" component={TimelineScreen} />
			<Tab.Screen name="More" component={MoreScreen} />
		</Tab.Navigator>
		
	);
}

function Assignment4({ navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="All"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Completed") {
						iconName = focused ? "ios-done-all" : "ios-done-all";
					} else if (route.name === "All") {
						iconName = focused
							? "ios-add-circle-outline"
							: "ios-add-circle-outline";
					} else if (route.name === "Active") {
						iconName = focused ? "ios-list-box" : "ios-list";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "tomato",
				inactiveTintColor: "green",
			}}
		>
			<Tab.Screen name="Completed" component={Complete}></Tab.Screen>
			<Tab.Screen name="All" component={All}></Tab.Screen>
			<Tab.Screen name="Active" component={Active}></Tab.Screen>
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Week4" component={Week4} />
				<Stack.Screen name="Assignment4" component={Assignment4} />
				<Stack.Screen name="Lab4" component={Lab4} />				
			</Stack.Navigator>
		</NavigationContainer>
	);
}


 
export default App;
