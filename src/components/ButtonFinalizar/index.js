import React from "react";



import {
    ActionContainer,
    Button,
    TitleButton,
} from './styles'

function ButtonFinalizar({navigation}){
    return(

        <ActionContainer>
            <Button 
            onPress={ () => navigation.navigate('Report')}
            color={'#427546'}>
                <TitleButton size={14}>FINALIZAR</TitleButton>
            </Button>
        </ActionContainer>
    )
}

export default ButtonFinalizar;

// erro  ao  ser  redirecionado  para  tela de  relatorio 