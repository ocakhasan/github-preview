import React, { useState } from 'react';
import Profile from './components/Profile'
import githubService from './services/githubService';

const App = () => {

    const baseUrl = 'https://api.github.com/users'
    const [data, setData] = useState(null)
    const [repo, setRepo] = useState(null)
    const [filter, setFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [userFound, setUserFound] = useState(false)

    const getUserData = () => {
        const url = `${baseUrl}/${filter}`
        console.log("url", url)
        githubService
            .fetchUserData(url)
            .then(response => {
                setData(response)
                setUserFound(true)
            })
            .catch(error => {
                console.log("error", error)
                setErrorMessage('user not found enter another username ')
                setUserFound(false)
            })
    }

    const getRepoData = () => {
        if (userFound){
            const repoUrl = `${baseUrl}/${filter}/repos`
            console.log("repo url", repoUrl)
            githubService
                .fetchRepoData(repoUrl)
                .then(response => {
                    setRepo(response)
                })
                .catch(_error => {
                    setErrorMessage(`Could not load the repositories of the user ${data.name}`)
                })
        }
    }

    const handleSubmit = (event) => {
        setData(null)
        setRepo(null)
        setErrorMessage('')
        event.preventDefault()
        getUserData()
        getRepoData()
        
    }

    return (
        <div className="container">
            <h1>Github Profile Preview</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                />
                <button className="btn" type="submit">search</button>
            </form>
            <h1>{errorMessage}</h1>
            {data !== null && repo !== null && <Profile data={data} repo={repo} />}
            <div className="credit">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default App