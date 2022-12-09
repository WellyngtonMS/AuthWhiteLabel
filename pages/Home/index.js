import { StatusBar } from "react-native";
import {
    KeyboardView,
    Container,
    Button,
    ButtonSignUp,
    TextButton,
    TextButtonLogin,
} from "./styles";

import Header from "../../components/Header";

function Home({ navigation }) {
    return (
        <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Container>
                <Header />
                <ButtonSignUp onPress={() => navigation.navigate("SignUp")}>
                    <TextButton>SIGN UP</TextButton>
                </ButtonSignUp>
                <Button onPress={() => navigation.navigate("Login")}>
                    <TextButtonLogin>LOGIN</TextButtonLogin>
                </Button>
            </Container>
        </KeyboardView>
    );
}

export default Home;
