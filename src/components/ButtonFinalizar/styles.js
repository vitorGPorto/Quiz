import styled from "styled-components/native";
export const Button = styled.TouchableOpacity`
width: 40%;
height: 30px;
background-color: ${props=>props.color};
justify-content: center;
align-items: center;
border-radius: 6px;
margin-left: 20px;

`
export const ActionContainer = styled.View`
flex-direction:row;
align-items: center;
justify-content: center;
padding: 8px;

`;
export const TitleButton = styled.Text`
color: #FFF;
font-size: ${props=>props.size}px;
font-weight: bold;
padding: 0px 10px;

`;