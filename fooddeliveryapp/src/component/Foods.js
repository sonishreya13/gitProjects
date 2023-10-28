import "../styles/Foods.css";

const Foods = ({data}) => {

  console.log("Fooddddd",data)

  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let existingCart = [];
    if (localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))) {
      existingCart = JSON.parse(localStorage.getItem("cart"));
    }
    let cartCopy = [...existingCart];
    let itemCopy = { ...item };

    //assuming we have an ID field in our item
    let { id } = itemCopy;
    console.log("itemcopy",itemCopy);
    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);
    console.log("existig",existingItem);
    //if item already exists
    if (existingItem) {
      existingItem.quantity += 1; //update item
      console.log(existingItem);
    } else {
      //if item doesn't exist, simply add it
      itemCopy.quantity = 1;
      cartCopy.push(itemCopy);
    }
    //update app state
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleAddFood = (item) => {
    addItem(item);
  };

  return (
    <div className="food-list">
      {data.map((item) => {
        return (
          <div key={item.id} className="food">
            <img src={item.imgSrc} width="15%" alt="" />
            <p className="food-name">{item.name}</p>
            <div className="food-footer">
              <span className="food-price">Rs.{item.price}</span>
            </div>

            <button className="add-food" onClick={() => handleAddFood(item)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;