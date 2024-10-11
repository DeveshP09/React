const fooditems = () => {

  let fooditems = ["dal" , "green veg", "roti", "milk", "ghee"];   
  return;
  <ul className="list-group">
    {fooditems.map((item) => (
      <item key={item} fooditems = {item}></item>
    ))}
  </ul>;
};

export default fooditems;
