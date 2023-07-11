import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'bf69ca4a8f8647108c896ff994a0a6b2'
    }
})