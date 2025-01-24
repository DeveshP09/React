import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

 const{addPost}= useContext(PostList)
 const navigate = useNavigate();  // used to navigate to specific page after a event

  const userIdElement = useRef(); //we use useRef hook to access the DOM element directly
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevents the form from being submitted
    const userId = userIdElement.current.value ;
    const postTitle = postTitleElement.current.value ;
    const postBody = postBodyElement.current.value ;
    const reactions = reactionsElement.current.value ;
    const tags = tagsElement.current.value.split(" ") ;  //to store the string in an array

    //after clicking on submit make the values blank
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
    navigate("/")   // Here it will navigate to home page after clicking on submit
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter User-Id
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          ref={userIdElement}
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter post title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          No.of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          ref={reactionsElement}
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Tag the post"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
