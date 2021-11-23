import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { getListQizzes } from "../../utils/quizzesQt";
import {
  Container,
  Title,
  TitleInput,
  Input,
  SearchContainer,
  Button,
  ActionContainer,
  TitleButton,
  Banner,
} from "./styles";

function Home({navigation}) {
  
  const [input, setInput] = useState('');
  // onde pegar o valor do input
  function handleQtQuestion() {
    
    if(input==='')return;
    navigation.navigate('Start', {number: input})
    console.log("valor do input:", input);

    setInput('');


  }

  return (
    <Container>
      <Title>Quizzes</Title>
      <Banner
        resizeMethod="resize"
        source={require("../../assets/images/StuckatHome.png")}
      ></Banner>
      <TitleInput>What is the number of questions? (1 to 10)</TitleInput>
      <SearchContainer>
      <Input 
        keyboardType='decimal-pad'
        placeholder="Ex 4"
        placeholderTextColor="#000"
        value={input} 
        onChangeText={(text)=> setInput(text)}
        />
      </SearchContainer>
      <ActionContainer>
        <Button onPress={handleQtQuestion}>
          <TitleButton size={14}>Próximo</TitleButton>
        </Button>
      </ActionContainer>
    </Container>
  );
}

export default Home;
