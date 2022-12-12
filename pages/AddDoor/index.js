import React, { useRef } from "react";
import {
    Container,
    KeyboardView,
    Input,
    ButtonSubmit,
    TextSubmit,
} from "./styles";
import { useState, useEffect } from "react";
import { firebase } from "../../config";
import { ref, set, onValue } from "firebase/database";

function AddDoor() {
    const [name, setName] = useState("");
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        return onValue(ref(firebase.getDatabase, "MACS"), (snapshot) => {
            const data = snapshot.val() || {};
            const items = Object.keys(data).map((key) => ({
                ...data[key],
                key,
            }));
            setItems(items);
            setIsLoading(false);
        });
    }, []);

    const addDoor = () => {
        if (name == "") {
            alert("Insira um MAC");
            return;
        }
        if (items.some((item) => item.key === name)) {
            alert("Port already registered.");
            setName("");
            return;
        }

        set(ref(firebase.getDatabase, "MACS/" + name), {
            door: 0,
            bluetooth: 0,
        })
            .then(() => {
                alert("Port added successfully!");
                setName("");
            })
            .catch((error) => {
                console.log("Update failed: " + error.message);
            });
    };

    return (
        <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Container>
                <Input
                    placeholder="MAC da porta"
                    onChangeText={(name) => setName(name)}
                    value={name}
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                />
                <ButtonSubmit onPress={() => addDoor(name)}>
                    <TextSubmit>Add New Port</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    );
}

export default AddDoor;
