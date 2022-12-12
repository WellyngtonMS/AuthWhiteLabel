import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ListItem, Button } from "./styles";
import { firebase } from "../../config";
import { ref, update } from "firebase/database";

function ExpandableItem({ item, onPress }) {
    const [expanded, setExpanded] = useState(false);

	const updateStateDoor = () => {
		update(ref(firebase.getDatabase, 'MACS/' + item.key), {
			door: item.door == 0 ? 1 : 0,
		})
		.then(() => {
			console.log('Update succeeded.');
		})
		.catch((error) => {
			console.log('Update failed: ' + error.message);
		}
		);
	}

    const onItemPress = () => {
		onPress();
        setExpanded(!expanded)
    }

    return (
        <TouchableOpacity
			onPress={onItemPress}
			style={{
				backgroundColor: "#fff",
				padding: 10,
				marginVertical: 10,
				borderRadius: 20,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.15,
				shadowRadius: 3.84,
				elevation: 5,
				
			}}
        >
			<ListItem>
				<View 
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#fff",
					}}
				>
					<Text style={{ fontSize: 20, color: "#000" }}>
						{item.key}
					</Text>
				</View>
				{expanded && (
					<Button
						onPress={updateStateDoor}
						style={{
							backgroundColor: item.door == 0 ? "#00b300" : "#ff0000",
						}}
					>
						<Text style={{ color: "#fff" }}>
							{item.door == 0 ? "Open Door" : "Close Door"}
						</Text>
					</Button>
				)}
			</ListItem>
        </TouchableOpacity>
    );
};

export default ExpandableItem;