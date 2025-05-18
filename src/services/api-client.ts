import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3086eed65bdd42c2b0551444653d93ae'
    }
})