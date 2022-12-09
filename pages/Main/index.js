import { Container } from "./styles";
import { StatusBar } from "react-native";
import ListView from "../../components/ListView";

function Main({ navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Container>
                <ListView navigation={navigation} />
            </Container>
        </>
    );
}

export default Main;
