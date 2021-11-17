import React from "react";
//import { View, Text, ScrollView } from "react-native";

import Challenge from "../../components/Challenge";
//import ButtonFinalizar from "../../components/ButtonFinalizar";
//import Quiz from "../../components/Quiz";

import {
  Container,
  Title,
  Button,
  ActionContainer,
  TitleButton,
  SliderQuest
} from "./styles";

function Questions({ navigation }) {
  return (
    <Container>
     
      
          <Title> Questions </Title>

          <SliderQuest
          data={ [
            {
              "category": "Science: Computers",
              "type": "boolean",
              "difficulty": "medium",
              "question": "The HTML5 standard was published in 2014.",
              "correct_answer": "True",
              "incorrect_answers": [
                "False"
              ]
            },
            {
              "category": "History",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
              "correct_answer": "Chile",
              "incorrect_answers": [
                "Peru",
                "Brazil",
                "Argentina"
              ]
            },
            {
              "category": "Entertainment: Cartoon & Animations",
              "type": "multiple",
              "difficulty": "easy",
              "question": "In &quot;Avatar: The Last Airbender&quot;, which element does Aang begin to learn after being defrosted?",
              "correct_answer": "Water",
              "incorrect_answers": [
                "Air",
                "Earth",
                "Fire"
              ]
            },
      
        ]}
          renderItem={({item})=> <Challenge data={item}/>}
          />
        

        <ActionContainer>
        <Button onPress={() => navigation.navigate("Report")}>
          <TitleButton size={14}>FINALIZAR</TitleButton>
        </Button>
      </ActionContainer>
      

     
    </Container>
  );
}

export default Questions;
