import React, {useState } from 'react';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import { useEffect } from 'react';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import '../styles/App.css';

function Posts() {
const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


const [fetchPosts, isPostLoading, postError] = useFetching (async(limit, page) => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
})

useEffect(() => {
  fetchPosts(limit, page)
}, [])

const handleClick = () => {
  setModal(true);
}



const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}


// Получаем post из дочернего компонента
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
  fetchPosts(limit, page)
}

return (
<div className='mainPage'>
  <div className="App">
    <MyButton onClick={handleClick}>
      Create new Post
    </MyButton>
    <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
    </MyModal>

    <hr/>
    <PostFilter
    filter={filter}
    setFilter={setFilter}/>

    {postError &&
      <h1>Something wrong...${postError}</h1>
    }

    {isPostLoading
      ?<div className='loader'><Loader/></div>
      :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Recipes"/>

    }
    <Pagination 
    page={page} 
    changePage={changePage} 
    totalPages={totalPages}/>

  </div>
</div>


  );
}

export default Posts;
