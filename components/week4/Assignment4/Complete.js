import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Complete = () => (
	<View style={styles.container}>
		<Text style={{fontSize:18}}>Complete Screen</Text>
	</View>
);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: "center",
	},
});
export default Complete;
