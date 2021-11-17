import styled from "styled-components/native";

export const Container =styled.SafeAreaView`
background-color: #FBFBFB;
flex: 1;
padding: 4px 0;
`;
export const Title = styled.Text`

    color: #11141F;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
   
    
`;

export const ButtonOption = styled.TouchableOpacity`
width: 90%;
height: 60px;
background-color:#24374D;
justify-content: space-between;
align-items: center;
border-radius: 10px;
flex-direction: row;
padding: 0 14px;
margin: 10px 10px ;
`
export const TextOption = styled.Text`

    color: #FFFF;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`;
export const CheckboxContainer =styled.SafeAreaView`

margin-bottom: 4px;
padding: 4px 8px;

`;