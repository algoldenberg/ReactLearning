import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import Page404 from './Page 404';
import '../styles/App.css'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, Page404] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='postPage'>
            <h2 className='header'>This is page of post №{params.id}</h2>
            {isLoading
                ? <Loader/>
                :  <div className='postBody'>{post.id}. {post.title}. {post.body}</div>
            }
            <h2 className='postBody'>
                Comments
            </h2>
                <div>
                    {comments.map(comm =>
                        <div className='postBody' key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
                        
        </div>
    );
};

export default PostIdPage;