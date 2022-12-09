import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #d23e44;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    width: 90%;
    max-height: 500px;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: #ffffff;
    border-radius: 25px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSignUp = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: transparent;
    border-radius: 25px;
    border-color: #ffffff;
    border-width: 1px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
`;

export const TextButtonLogin = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #d23e44;
`;
