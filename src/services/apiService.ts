import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA3M2NjYWUzOTM5YTRiZWFlMThjMTJlYTM0YzZlYSIsInN1YiI6IjY1ZGIzNjUxMTc1MDUxMDE4N2Y5YjE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p19VYzvCVDfabuAjd9UPyAgnNNaXnvrahnJWCJlkQp0'
    return request

})

export {
    apiService
}