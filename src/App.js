/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import dummydata from "./dummy-data.js"
import PostsPage from "./components/PostsContainer/PostsPage.js"
import SearchBar from "./components/SearchBar/SearchBarContainer.js"
import Post from "./components/PostsContainer/Post";

// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  let [post, setPost] = useState(dummydata)

  return (
    <div className="App">
      <SearchBar/>
      <PostsPage post={post}/>
      
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
