const CreatePost = () => {
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="User-Id" className="form-label">
          Enter User-Id
        </label>
        <input
          type="text"
          className="form-control"
          id="User-Id"
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
