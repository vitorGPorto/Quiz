import React, { useState, useEffect } from "react";

import api from "../../services/api";

import {
    Container,
    ActionContainer,
    Button,
    TitleButton,
    Banner,
    Title
} from './styles'

import {useNavigation, useRoute} from '@react-navigation/native'

 function Start(){

  const navigation  = useNavigation();
  const route = useRoute();
  
    const [nowQuizzes, setNowQuizzes] = useState([]);

  
   useEffect(() => {
    let isActive = true;

    async function getQuizzes() {
      // https://opentdb.com/api.php?amount=
      //const config = {
       // params: {
       //   amount: "10",
       // },
     // };

      const response = await api.get("/api.php", {
        params: {
          amount: route?.params.number,
        },
      
      });
      console.log(response.data);



      //const nowList = getListQizzes(3, nowQuizzes.data.results);
    }

    getQuizzes();
  }, []);

     return(
    <Container>
         <Title size={40}>Quizzes</Title>
      <Banner
        resizeMethod="resize"
        source={require("../../assets/imagens02.png")}
      ></Banner>
      <Title size={25}>Iniciar desafio?</Title>
        <ActionContainer>
            <Button 
            onPress={() =>  navigation.navigate('Questions')}
            color={'#427546'}>
                <TitleButton size={14}>START</TitleButton>
            </Button>
            <Button  
            onPress={() =>  navigation.navigate('Home')}
            color={'#C2291C'}
            >
                <TitleButton size={14}>CANCEL</TitleButton>
            </Button>
        </ActionContainer>
    </Container>
     )
 }

 export default Start;