import axios from 'axios';

const getPersons = () => {
    const request = axios.get('/api/persons');
    return request.then(response => response.data)
}

export default { getPersons };