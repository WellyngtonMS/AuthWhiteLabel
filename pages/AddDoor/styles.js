import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    width: 90%;
    max-height: 500px;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    width: 100%;
    max-height: 500px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    width: 50%;
    height: 50px;
    background-color: #d23e44;
    border-radius: 25px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const TextSubmit = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
`;