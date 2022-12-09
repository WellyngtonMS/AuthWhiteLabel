import React from "react";
import { Container, ListItem } from "./styles";
import { useState, useEffect } from "react";
import { firebase } from "../../config";
import { onValue, ref } from "firebase/database";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput
} from "react-native";
import { filter } from "lodash";

function ListView() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, key => {
            return contains(key, formattedQuery);
        });
        setItems(filteredData);
        setQuery(text);
    };

    const contains = ({ key }, query) => {
        if (key.includes(query)) {
            return true;
        }
        return false;
    };

    const renderHeader = () => {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 20,
                }}
            >
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={(queryText) => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
                />
            </View>
        );
    };

    useEffect(() => {
        setIsLoading(true);
        return onValue(ref(firebase.getDatabase, "MACS"), (snapshot) => {
            const data = snapshot.val() || {};
            const items = Object.keys(data).map((key) => ({
                ...data[key],
                key,
            }));
            setItems(items);
            setFullData(items);
            setIsLoading(false);
        });
    }, []);

    return (
        <Container>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 40,
                    minWidth: "80%",
                }}
                horizontal={true}
            >
                <FlatList
                    ListHeaderComponent={
                        renderHeader()
                    }
                    data={items}
                    renderItem={({ item }) => (
                        <ListItem>
                            <Text style={{ fontSize: 20, color: "#000" }}>
                                {item.key}
                            </Text>
                        </ListItem>
                        // <ExpandableList
                        //     item={item}
                        //     onClickFunction={() => {
                        //         alert("Clicked on item with key: " + item.key);
                        //     }}
                        // />
                    )}
                    keyExtractor={(item) => item.key}
                    removeClippedSubviews={false}
                />
            </ScrollView>
        </Container>
    );
}

export default ListView;
