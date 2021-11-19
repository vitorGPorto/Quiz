import React, { useState, useEffect } from "react";
//import Checkbox from "expo-checkbox";
import{CheckBox} from 'react-native-elements'

import { StyleSheet, View, Text } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import{
    Container, 
    Title, 
    CheckboxContainer,
    ButtonOption,
    TextOption,
   
} from './styles';
import { createPermissionHook } from "expo-modules-core";
import { TouchableOpacity } from "react-native-gesture-handler";

 function Challenge({data}){

    
    
  
    const [resposta, setResposta] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)


   useEffect(() =>{
     
      if(!!data){
         
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
      let correct_answer = data.correct_answer;
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_answer);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_answer){
            // Set Score
            setScore(score+1)
            console.log('valor',score)
            console.log('selecionou',selectedOption)
        }

        //show Next Button 
        //setShowNextButton(true)
   }

   const renderQuestion =  () =>{
      return(
         <View style={{}}>
        { /*<Title>{currentQuestionIndex+1}</Title>*/}
           <Title>Categoria: {data.category}</Title>
           <Title>{data?.question}</Title>
         </View>
      )
   }
   const renderOptions = () =>{
      
      return(
   <Container>
       <CheckboxContainer>
             {resposta.map(
                  (option)=>{
                     return(
                        
                <ButtonOption 
                key={option}
                onPress={ ()=>validateAnswer(option)} 
                disabled={isOptionsDisabled}
                style={{
                  borderColor: option == correctOption
                  ? '#00C851'
                  : option==currentOptionSelected 
                  ? "#ff4444"
                  :  '#24374D' ,
                  backgroundColor: option==correctOption 
                  ? '#00C851' +'90'
                  : option==currentOptionSelected 
                  ? "#ff4444"+'90'
                  : '#24374D',
                }}
                >
                    <TextOption>{option}</TextOption>

                    {/*Mostrar ícone de verificação ou cruz com base na resposta correta*/}
                    {
                                option== correctOption ? (
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
                                ): option == currentOptionSelected ? (
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

const handleNext = ()=>{
  if(currentQuestionIndex == data.length-1){

            // Ultima questão
            // Mostrar pontuação modal
            setShowScoreModal(true)
  }else{
   setCurrentQuestionIndex(currentQuestionIndex+1);
   setCurrentOptionSelected(null);
   setCorrectOption(null);
   setIsOptionsDisabled(false);
   setShowNextButton(false);
  }
}
  const renderNextButton = () =>{

   if(showNextButton){
      return (
         <TouchableOpacity
         onPress={handleNext}
         style={{
            marginTop:20, 
            width: '100%',
            backgroundColor:'#3498db',
            padding: 20,
            borderRadius:5
         }}
         >
            <Text 
            style={{ 
               fontSize:20, 
               color:"#000",
               textAlign:'center',
               }} >Próxima</Text>
         </TouchableOpacity>
      )
   }else{
      return null; 
   }

  }

     return(
        <Container>

         {/*Mostrar pergunta*/}
          {renderQuestion()}

          {/*Mostrar opcoes*/}
          {renderOptions()}
         
          {/*Next button*/}
          {renderNextButton()}
             
             
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