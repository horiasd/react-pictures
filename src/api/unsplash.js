import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sOVEYFk7Q9llZVF56x8jhpJvCgIXuW_txQuNQ_0vFgs'
    }
});
