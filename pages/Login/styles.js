import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    width: 90%;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #d23e44;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: #d23e44;
    border-radius: 25px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const TextSubmit = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
`;
