import React from "react";
import { View, Text, ScrollView } from "react-native";

import Challenge from "../../components/Challenge";
//import ButtonFinalizar from "../../components/ButtonFinalizar";
import Quiz from "../../components/Quiz";

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
     
     
          
        { /*

          
          <SliderQuest
          data = { [
           
            {
              "category": "Entertainment: Film",
              "type": "multiple",
              "difficulty": "hard",
              "question": "Which singer is portrayed by Bruce Campbell in the 2002 film &#039;Bubba Ho-Tep&#039;?",
              "correct_answer": "Elvis Presley",
              "incorrect_answers": [
                "Johnny Cash",
                "Hank Williams, Sr.",
                "Buddy Holly"
              ]
            },{
              "category": "Entertainment: Film",
              "type": "multiple",
              "difficulty": "hard",
              "question": "Which singer is portrayed by Bruce Campbell in the 2002 film &#039;Bubba Ho-Tep&#039;?",
              "correct_answer": "Elvis Presley",
              "incorrect_answers": [
                "Johnny Cash",
                "Hank Williams, Sr.",
                "Buddy Holly"
              ]
            }
      
        ]}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
          renderItem={({item})=> <Challenge data={item}/>}
          />
           <ActionContainer>
        <Button onPress={() => navigation.navigate("Report")}>
          <TitleButton size={14}>FINALIZAR</TitleButton>
        </Button>
      </ActionContainer>

        */}
     
       
      <Quiz/>
       
     
    </Container>
  );
}

export default Questions;
