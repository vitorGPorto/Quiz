// gerar uma lista de perguntas 


export function getListQizzes(size, question){

    let qtQuizzes = [];

    for(let i =0, l = size; i< l; i++ ){

        qtQuizzes.push(question[i]);
    }
    return qtQuizzes;

}