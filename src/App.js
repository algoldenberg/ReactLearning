import React, {useMemo, UseRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { useRef } from 'react';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios'
import { useEffect } from 'react';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
const [isPostLoading, setIsPostsLoading] = useState(false);

useEffect(() => {
  fetchPosts()
}, [])

const handleClick = () => {
  setModal(true);
}



const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

async function fetchPosts(){
  setIsPostsLoading(true)
  setTimeout(async() => {
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false)
  }, 1000)
}

// Получаем post из дочернего компонента
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

return (
<div className="App">
  <MyButton style={{marginTop: '30px'}} onClick={handleClick}>
    Create new Post
  </MyButton>
  <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
  </MyModal>

  <hr style={{margin:'15px 0'}}/>
  <PostFilter 
  filter={filter}
  setFilter={setFilter}/>
  {isPostLoading
    ?<div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}><Loader/></div>
    :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Shopping list"/>

  }
</div>



  );
}

export default App;
