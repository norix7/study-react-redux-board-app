import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPost, deletePost } from './features/Post';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPost(
      {
        id: uuidv4(),
        name: name,
        content: content,
      }
    ));

    setName("");
    setContent("");

  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <div className="bottomPadding10">
          <input type="text" placeholder="お名前" onChange={(e) => { setName(e.target.value)}} value={name} />
        </div>
        <div className="bottomPadding10">
          <textarea placeholder="投稿内容" onChange={(e) => { setContent(e.target.value)}} value={content} />
        </div>
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => {
          return(
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <pre className="postContent">{post.content}</pre>
            <button onClick={ () => dispatch(deletePost({ id: post.id }))}>削除</button>
          </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
