import React from 'react';

const Repos = ({ data }) => {
    return (
        <div>
            <h2 className="text-center">Repositories</h2>
            <div className="repos">
                {data.map((repo, i) => (
                    <a key={i} className="repo" href={repo.html_url} target="_blank" rel="noreferrer">

                        <div className="repo-header">
                            <div className="repo-name">
                                <h3>{repo.name}</h3>
                            </div>
                            <div className="repo-desc">
                                <p>{repo.description}</p>
                            </div>
                        </div>


                        <div className="repo-details">
                            <div>{repo.language}</div>
                            <div className="icon-div">
                                <img src={process.env.PUBLIC_URL + "/star.svg"} className="icon" alt="star icon"></img>
                                <span>{repo.stargazers_count}</span>
                            </div>
                            <div className="icon-div">
                                <img src={process.env.PUBLIC_URL + "/fork.svg"} className="icon" alt="fork icon"></img>
                                <span>{repo.forks_count}</span>
                            </div>
                        </div>

                    </a>
                ))}
            </div>
        </div>
    )

}

export default Repos