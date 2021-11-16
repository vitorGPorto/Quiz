import axios from "axios";

//https://opentdb.com/api.php?amount=10


//export const key = ''

const api = axios.create({
    baseURL:'https://opentdb.com'
})

export default api;