import styled from "styled-components";

export const Container =styled.SafeAreaView`
background-color: #FBFBFB;
flex: 1;
padding: 4px 0;
`;

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
padding: 50px;


`;
export const TitleButton = styled.Text`
color: #FFF;
font-size: ${props=>props.size}px;
font-weight: bold;
padding: 0px 10px;

`;
export const Title = styled.Text`

    color: #11141F;
    font-size: ${props=>props.size}px;
    font-weight: bold;
    margin-left: 120px;
    align-items: center;
    justify-content: center;
`;
export const Banner = styled.Image`
height: 370px;
margin: 15px  10px 10px 0px;
justify-content: center;
align-items: center;
border-radius: 4px;
`; 