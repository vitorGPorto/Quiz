import styled from "styled-components";

export const Container =styled.SafeAreaView`
background-color: #252c4a;
flex: 1;
padding: 4px 0;
`;
export const Title = styled.Text`

    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
    margin-left: 110px;
    align-items: center;
    justify-content: center;
`;

export const TitleInput = styled.Text`

    color: #FFFFFF;
    font-size: 23px;
    font-weight: bold;
    margin: 40px;
    justify-content: center;
    align-items: center;
`;
export const Input = styled.TextInput`
background-color: #D1DAE8;
width: 80%;
height: 50px;
border-radius: 10px;
padding: 6px 10px;
font-size: 18px;
color:#000;
`;
export const SearchContainer = styled.View`
flex-direction:row;
width: 100%;
height: 40px;
align-items: center;
justify-content: center;
padding: 0 14px;
margin-bottom: 8px;

`;
export const Button = styled.TouchableOpacity`
width: 50%;
height: 30px;
background-color:#0064FE;
justify-content: center;
align-items: center;
border-radius: 6px;

`
export const ActionContainer = styled.View`
flex-direction:row;
align-items: center;
justify-content: center;
padding: 40px;

`;
export const TitleButton = styled.Text`
color: #FFF;
font-size: ${props=>props.size}px;
font-weight: bold;

`;
export const Banner = styled.Image`
height: 360px;
margin: 10px  14px 0px 2px;
border-radius: 4px;
`; 