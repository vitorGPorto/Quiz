import React, { useState, useEffect } from "react";
//import Checkbox from "expo-checkbox";
import{CheckBox} from 'react-native-elements'

import { StyleSheet, View } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import{
    Container, 
    Title, 
    CheckboxContainer,
    ButtonOption,
    TextOption
} from './styles';
import { createPermissionHook } from "expo-modules-core";

 function Challenge({data}){

    
   const  [ checked, setchecked ] =  useState();
   const [resposta, setResposta] = useState([]);
  
   //
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)

   useEffect(() =>{
     
      if(!!data){
         console.log('entrou')
            let res = data.correct_answer;
            let res2 = data.incorrect_answers;    
      res2.push(res) 
      // Loop em todos os elementos
      for (let i = res2.length - 1; i > 0; i--) {
              // Escolhendo elemento aleatório
          const j = Math.floor(Math.random() * (i + 1));
          // Reposicionando elemento
          [res2[i], res2[j]] = [res2[j], res2[i]];
      }
      

          console.log('depois for res2 = ', res2)
      
      setResposta(res2);
      }
     

   },[data])

   const validateAnswer = (selectedOption)=>{

     // verificar como dever passar o data 
      let correct_answer = data;
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_answer);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_answer){
            // Set Score
            setScore(score+1)
        }

        //show Next Button 

   }

   const renderQuestion =  () =>{
      return(
         <Container>
         <Title>{currentQuestionIndex+1}</Title>
           <Title>{data.length}</Title>
           <Title>{data?.question}</Title>
         </Container>
      )
   }
   const renderOptions = () =>{
      
      return(
   <Container>
       <CheckboxContainer>
             {resposta.map(
                  (obj)=>{
                     return(
                        
                <ButtonOption 
                key={obj}
                onPress={ ()=>validateAnswer(obj)} 
                disabled={isOptionsDisabled}
                style={{
                  borderColor: obj==correctOption 
                  ? '#00C851'
                  : obj==currentOptionSelected 
                  ? "#ff4444"
                  :  '#24374D' ,
                  backgroundColor: obj==correctOption 
                  ? '#00C851' +'90'
                  : obj==currentOptionSelected 
                  ? "#ff4444"+'90'
                  : '#24374D',
                }}
                >
                    <TextOption>{obj}</TextOption>

                    {/*Mostrar ícone de verificação ou cruz com base na resposta correta*/}
                    {
                                obj== correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 10/2,
                                        backgroundColor: '#00C851',
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: "#24374D",
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): obj == currentOptionSelected ? (
                                    <View style={{
                                        width: 20, height: 30, borderRadius: 10/2,
                                        backgroundColor: "#ff4444",
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: "#ffff",
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }
                     
                </ButtonOption>
                     )
                  }
               )}
              
       </CheckboxContainer>
   </Container>
   )
}
     
      

     return(
        <Container>

         {/*Mostrar pergunta*/}
          {renderQuestion()}

          {/*Mostrar opcoes*/}
          {renderOptions()}
             
             
        </Container>
        
     )}
 

 const styles = StyleSheet.create({

   
    checkbox: {
       flexDirection: "column" ,
        margin: 8,
        alignItems: 'center',
        
      },
 })
 
 export default Challenge;