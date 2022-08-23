import React, { useState, useEffect } from "react";
import axios from 'axios';



import Text from "../utilities_components/Text";
import RepoCardComponent from "./RepoCardComponent";
import Pagination from "../utilities_components/Pagination";


function UserDetailComponent({_userName}) {
    // const [user, setUser] = useState(_userName);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [repoPerPage] = useState(10);
    const [userDetail, setUserDetail] = useState({
        name: "",
        bio: "",
        location: "",
        twitter: "",
        github: "",
        repoUrl: "",
        totalRepo: 0,
        avatar: ""
    });

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const user = await axios.get('https://api.github.com/users/'+_userName);   //change this to 
            const result = await axios.get('https://api.github.com/users/'+_userName+'/repos?page=' + currentPage + '&per_page=10',{
                headers:{
                    Authorization: 'Bearer '+process.env.REACT_APP_GITHUB_PAT
                }
            });    //change this according to the "currentPage"
            console.log(result);
            setRepos(result.data);
         
            setUserDetail({
                name: user.data.name,
                bio: user.data.bio,
                location: user.data.location,
                twitter: user.data.twitter_username,
                github: user.data.html_url,
                repoUrl: user.data.repos_url,
                totalRepo: user.data.public_repos,
                avatar: user.data.avatar_url
            })
            setLoading(false);


        }
        fetchPosts();


    }, [_userName,currentPage]);


    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };

    return (
        <div className={_userName===""?"d-none UserDetailComponent border-box px-5 py-2":"d-block UserDetailComponent border-box px-5 py-2"}>
            <div className="userWrapper d-flex flex-row justify-content-start">
                <img
                    className="userProfile mx-5 rounded-circle"
                    height="100"
                    width="100"
                    src={userDetail.avatar}
                    alt="github-profile-pic"
                />

                <div className="userDetail">
                    <Text _class="mb-0">
                        {userDetail.name}
                    </Text>
                    <Text _class="mb-0">
                        {userDetail.bio}
                    </Text>
                    <Text _class="mb-0">
                        {userDetail.location}
                    </Text>
                    <Text _class="mb-0">
                        {userDetail.twitter}
                    </Text>
                </div>


            </div>
            <Text _class="mt-4 ms-5 mb-0"><a href={userDetail.github}>{userDetail.github}</a></Text>
            <div className="repoDetail d-flex flex-row flex-wrap justify-content-evenly">
                <RepoCardComponent
                    _class="border border-2 border-primary border-box my-3 p-4 w-45"
                    repos={repos}
                    loading={loading}
                />
            </div>
            <Pagination
                repoPerPage={repoPerPage}
                totalRepos={userDetail.totalRepo}
                paginate={paginate}
            />
        </div>
    );
}

export default UserDetailComponent;