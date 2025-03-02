import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {}, //All this three are the required default structure in our post list using createPost
  addInitialPosts : () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {

    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
      newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if(action.type === "ADD_INITIAL_POST"){     // will get posts from dummy API
      newPostList = action.payload.posts
    }
    else if(action.type === "ADD_POST"){
      newPostList = [action.payload ,...currPostList ] ;      // to add new post in existing post arry ,using spread operator
    }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : {
        id: Date.now(), //to generate a random id ,in a form of time when it is post
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POST",
      payload : {
        posts
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
        type: "DELETE_POST" ,
        payload:{
            postId,
        }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost ,addInitialPosts }}>
      {children}
    </PostList.Provider> //object having same key value pair can be written single
  );
};



export default PostListProvider;
