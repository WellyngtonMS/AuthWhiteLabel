import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 35px;
    width: 100%;
    background-color: #E8EAED;
`;

export const ListItem = styled.View`
    padding: 20px;
    align-items: center;
    background-color: #fff;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.15;
    shadow-radius: 3.84px;
    elevation: 5;

`;