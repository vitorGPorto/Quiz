import styled from "styled-components";

export const Container =styled.SafeAreaView`
background-color: #FBFBFB;
flex: 1;
padding: 4px 0;
margin: 3px;
position: relative;
`;
export const Title = styled.Text`

    color: #11141F;
    font-size: 30px;
    font-weight: bold;
    margin-left: 110px;
    padding: 8px 4px;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
width: 40%;
height: 30px;
background-color:#427546;
justify-content: center;
align-items: center;
border-radius: 6px;

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
export const SliderQuest = styled.FlatList`

padding: 10px 14px;
`;
