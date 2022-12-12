import React, { useRef } from "react";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { firebase } from "../../config";
import { onValue, ref } from "firebase/database";
import {
    ScrollView,
    View,
    FlatList,
    TextInput
} from "react-native";
import ExpandableItem from "./ExpandableItem";
import { filter } from "lodash";
import { Transition, Transitioning } from "react-native-reanimated";

function ListView() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const transitionRef = useRef();
    const transition = <Transition.Change interpolation='easeInOut' />

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
                    marginTop: 20,
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

    const renderItem = ({ item }) => {
        return (
            <ExpandableItem
                item={item}
                onPress={
                    () => {
                        transitionRef.current.animateNextTransition()
                    }
                }
            />
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
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
            >
                <Transitioning.View ref={transitionRef} transition={transition} style={{ flex: 1 }}>
                    <FlatList
                        ListHeaderComponent={
                            renderHeader()
                        }
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item.key}${index}`}
                        removeClippedSubviews={false}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                        style={{ flex: 1, paddingHorizontal: 5,}}
                    />
                </Transitioning.View>
            </ScrollView>
        </Container>
    );
}

export default ListView;
