import { KeyboardView, Container, Title, Input, Button, Text } from "./styles";
import { StatusBar } from "react-native";
import { firebase } from "../../config";
import { useState } from "react";

function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = async(email, password) => {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://auth-white-label.firebaseapp.com'
                })
                .then(() => {
                    alert("Check your email to verify your account")
                    navigation.navigate("Home")
                }).catch((error) => {
                    alert(error.message)
                })
                .then(() => {
                    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
                    .set({
                        email,
                    })
                }).catch((error) => {
                    alert(error.message)
                })
            }).catch((error) => {
                alert(error.message)
            })
    }

    return (
        <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Container>
                <Title>Sign Up</Title>
                <Input
                    placeholder="E-mail"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input placeholder="Confirm Password" secureTextEntry />
                <Button
                    onPress={() => registerUser(email, password)}
                >
                    <Text>SIGN UP</Text>
                </Button>
            </Container>
        </KeyboardView>
    );
}

export default SignUp;
