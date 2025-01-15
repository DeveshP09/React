import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {}, //All this three are the required default structure in our post list using createPost
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {

    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
      newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if(action.type === "ADD_POST"){
      newPostList = [action.payload ,...currPostList ] ;      // to add new post in existing post arry ,using spread operator
    }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
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

  const deletePost = (postId) => {
    dispatchPostList({
        type: "DELETE_POST" ,
        payload:{
            postId,
        }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider> //object having same key value pair can be written single
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to kashmir",
    body: "Hii friends ,I am going to kashmir for my vacation, hope enjoy a lot",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "kashmir", "enjoy"],
  },
  {
    id: "2",
    title: "Pass zalo bhai",
    body: "4 saal ke mehenate ke badd ,pass hoo gaye bhai Unbelievable",
    reaction: 4,
    userId: "user-10",
    tags: ["4saal", "pass", "BTech"],
  },
];

export default PostListProvider;
