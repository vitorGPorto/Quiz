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
          data={ [{
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?",
            "correct_answer": "White",
            "incorrect_answers": [
              "Black",
              "Blue",
              "Yellow"
            ]
          },
          {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?",
            "correct_answer": "White",
            "incorrect_answers": [
              "Black",
              "Blue",
              "Yellow"
            ]
          },
          {
            "category": "History",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Former United States Presidents John Adams and Thomas Jefferson died within hours of each other.",
            "correct_answer": "True",
            "incorrect_answers": [
              "False"
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
