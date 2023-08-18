import axios from 'axios';

// const API_KEY = '16fafda765cfd433bc1b8d19f6b5112b';
const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmZhZmRhNzY1Y2ZkNDMzYmMxYjhkMTlmNmI1MTEyYiIsInN1YiI6IjY0YWUzMWMxNmEzNDQ4MDBhZDc3ZTgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GRTNOQiGKoHd2jGY_4sABd6aHTI2xlmPgQzDU1JjWw';

const getData = (newUrl) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${newUrl}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    };
    return axios.request(options);
};

export const baseUrlImg = 'https://image.tmdb.org/t/p/original';
export const baseUrlVideo = 'https://www.youtube.com/embed/';

export default getData;
