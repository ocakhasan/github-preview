import axios from 'axios'

const fetchUserData = baseUrl => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const fetchRepoData = repoUrl => {
    const request = axios.get(repoUrl)
    return request.then(response => response.data)
}

export default { fetchUserData, fetchRepoData }