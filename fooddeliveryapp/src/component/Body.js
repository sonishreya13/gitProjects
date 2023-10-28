import MenuItems from "./FoodData"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Body(){
        let navigate = useNavigate(); 
      const routeChange = () =>{ 
        navigate('/addtocart');
      }
return(
    <div className='body'>
        <h2 className="h2">Hungry??? Just wait</h2> 
        <h3 className="h3">food at your door</h3>
        <p className="paragraph">Lorem ipsum dolor sit amet,consectetur adipisicing elit.</p>
        <p className="paragraph"> Qui magni delectus tenetur autem, sint veritatis!</p>
        {/* <button className="ordernow"> Order now </button>  */}
        <Link className='orderbutton' to="/Login"> Order Now</Link>
        <h1 className='foodie1'>Proud to be a Foodie 😇 </h1>
        <div>
            <div className='cardContainer'>
                {MenuItems.map((item) => (
                    <div className='card' key={item.id}>
                        <div className='item'>
                            <div>
                                <img className="img" src={item.imgSrc} alt={item.name} />
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                            </div>
                            <div>
                                <h3>{item.price}</h3>
                            </div>
                        </div>
                        <button className='button' onClick={routeChange}>Add to cart</button>
                        </div>
                ))}
                </div>
    </div>
    </div>
)
}
export default Body;
