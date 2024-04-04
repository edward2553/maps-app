import axios from 'axios'
import { ACCESS_TOKEN } from '../consts'

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: '5',
        language: 'es',
        country: 'co',
        access_token: ACCESS_TOKEN
    }
})