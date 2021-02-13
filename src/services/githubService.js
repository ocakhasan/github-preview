import axios from 'axios'

const fetchUserData = async baseUrl => {
    const response = await axios.get(baseUrl)
    return response.data
}

const fetchRepoData = async repoUrl => {
    const response = await axios.get(repoUrl)
    return response.data
}

export default { fetchUserData, fetchRepoData }