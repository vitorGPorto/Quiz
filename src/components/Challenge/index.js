import React, { useState, useEffect } from "react";
//import Checkbox from "expo-checkbox";
import{CheckBox} from 'react-native-elements'

import { StyleSheet } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import{
    Container, 
    Title, 
    CheckboxContainer
} from './styles';

 function Challenge({data}){

    
   const  [ checked, setchecked ] =  useState(false)
   const [resposta, setResposta] = useState([]);
  
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
      // Retornando array com aleatoriedade

          console.log('depois for res2 = ', res2)
      
      setResposta(res2);
      }
     

   },[data])

     return(
        <Container>
           
             <Title>
               {data.question}
             </Title>
             <CheckboxContainer>
             {!!resposta && resposta.map(
                  (obj)=>{
                     return(
                        <CheckBox
                        key={obj}
                        title = {obj}
                        checked={checked}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                       onPress={()=> setchecked(!checked)}
                  
                />
                     )
                  }
               )}

             </CheckboxContainer>
   
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