import axios from 'axios';

const API_URL = 'https://ironbeer-api.herokuapp.com/beers/all'

const http = axios.create({
    baseURL: API_URL
})

export const listBeers = () => {
    return http.get('/');
}