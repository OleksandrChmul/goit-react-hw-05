import axios from 'axios'

const url =
	'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

const options = {
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODEzMWVmODMxMjlmNzVhZGU4MGFiMjMwNTVhNDg4NCIsInN1YiI6IjY1ZWM2NGIxOGM0NGI5MDE0OTA3NzRmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-dalyXs8HdxUbeJKp7KlFYrFQA4eDqNgtBXRS4naTg',
	},
}

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const getMovies = async () => {
	const response = await axios.get(url, options)
	console.log(response)
}
export default getMovies()
