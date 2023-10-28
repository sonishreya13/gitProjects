import { useState, useEffect } from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { DiningSharp, EmojiFoodBeverage } from "@mui/icons-material";
import "../styles/Shop.css";
import axios from "axios";
import Foods from "./Foods";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [foodOnly, setFoodOnly] = useState([]);
  const [beveragesOnly, setBeveragesOnly] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/api/food`);
        console.log("responseeee",response.data);
        setProduct(response.data);
        setFoodOnly(response.data.filter((item) => item.category === "food"));
        setBeveragesOnly(
          response.data.filter((item) => item.category === "beverages")
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
        console.log("Something went wrong!!");
        setLoading(false);
      }
    }
    fetchData();
  }, []);
 console.log("product",product)
  return loading ? (
    <p>Loading..........</p>
  ) : (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="latest-nav">
          <div
            onClick={() => setProduct(foodOnly.concat(beveragesOnly))}
            className="category-text"
          >
            <FoodBankIcon />
            <span>All</span>
          </div>
          <div onClick={() => setProduct(foodOnly)} className="category-text">
            <DiningSharp />
            <span>Food</span>
          </div>
          <div
            onClick={() => setProduct(beveragesOnly)}
            className="category-text"
          >
            <EmojiFoodBeverage />
            <span>Drinks</span>
          </div>
        </div>
        <Foods data={product} />
      </div>
    </>
  );
};

export default Shop;