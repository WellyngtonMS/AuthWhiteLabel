import {
    KeyboardView,
    Title,
    Container,
    Input,
    ButtonSubmit,
    TextSubmit,
} from "./styles";
import { StatusBar } from "react-native";
import { useState, useEffect } from "react";
import { firebase } from "../../config";
import { onValue, ref } from "firebase/database";

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async(email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("Main");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Container>
                <Title>Login</Title>
                <Input
                    placeholder="E-mail"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    />
                <ButtonSubmit
                    onPress={() => loginUser(email, password)}
                >
                    <TextSubmit>LOGIN</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    );
}

export default Login;
