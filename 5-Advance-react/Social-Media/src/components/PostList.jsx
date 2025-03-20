import { useContext ,useEffect} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")                 // fetching dummy API using useEffect 
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")               // fetching dummy API using normal function call
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (
    <>
      {postList.length == 0 && (
        <WelcomeMessage  />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
