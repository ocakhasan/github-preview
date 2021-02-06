import React from 'react';
import Repos from './Repos'
const Profile = ({ data, repo }) => {

    return (
        <div>
            <div className="userInfo">
                <div>
                    <img src={data.avatar_url} className="avatar-img"></img>

                </div>
                <div>
                    <div>
                        <h1>{data.name}</h1>
                        <a href={data.html_url} className="green-text underline">@{data.login}</a>
                        <p>{data.bio}</p>
                    </div>
                    <div className="userFollower">
                        <p>followers: {data.followers}</p>
                        <p>following: {data.following}</p>
                    </div>

                </div>
            </div>
            <Repos data={repo} />
        </div>
    )
}

export default Profile