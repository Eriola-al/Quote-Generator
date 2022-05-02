import axios from 'axios';

const url = 'https://game-of-thrones-quotes.p.rapidapi.com/api/quote/by/tyrion_lannister';

const config = {
    headers: { 'X-RapidAPI-Key': process.env.API_KEY},
    // transformResponse: response => response, (//to display data in JSON format)
}

export default async () => {
    const { data } = await axios.get(url, config);
   
    return data;
}