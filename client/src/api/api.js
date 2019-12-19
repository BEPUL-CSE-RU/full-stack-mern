import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9697/api',
})

export const insertMovie = (payload)=> api.post('/movierouter', payload)
export const updateMovieById = (id,payload)=>api.put(`/movierouter/${id}`,payload)
export const deleteMovieById = (id)=>api.delete(`/movierouter/${id}`)

export const getMovieById=id=> api.get(`/movierouter/${id}`)
export const getAllMovies = ()=> api.get(`/getmovies`)


const apis = {
    insertMovie,
    getAllMovies,
    deleteMovieById,
    updateMovieById,
    getMovieById,
}

export default apis
