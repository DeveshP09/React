function AddToDo() {
  return (
    // we define two class row which is imported from bootstrap and other dev-row for CSS
    <div class="row dev-row"> 
      <div class="col-6">
        <input type="text" placeholder="Enter Todo here"></input>
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success dev-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;