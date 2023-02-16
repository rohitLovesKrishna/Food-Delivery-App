import { Fooditems, Navbar, ThemeImg, data ,CheckoutPage} from './components'
import {useState} from 'react'


function App() {

const [items,setItems] = useState(0);
  const [isCart, setIsCart] = useState(false);
const [foodItems,setFoodItems] = useState(data);
  const [isOrder, setIsOrder] = useState(false);

  const thanksForOrder =()=>{
    setIsCart(!isCart);
    if(isCart){
      setItems(0);
      setIsOrder(!isOrder)
    } 
  }

const increaseMe = (e)=>{
  setItems(items + 1)
  foodItems[e.target.id].qty += 1;
  setFoodItems((prev) => [
    ...prev
  ])
  }
  const decreaseMe = (e) => {
    if (items > 0 && foodItems[e.target.id].qty > 0){
        setItems(items - 1)
      foodItems[e.target.id].qty -= 1
      setFoodItems((prev) => [
        ...prev
      ])
      }
  }
  return (
  <>
      {isCart && <CheckoutPage items={items} onClick={() => setIsCart(!isCart)} data={foodItems} onConfirm={thanksForOrder}/>}
      <Navbar items={items} readyToBuy={() => setIsCart(!isCart)}/>
<ThemeImg/>
      <Fooditems foodItems={foodItems} addItems={increaseMe} subItems={decreaseMe} isOrder={isOrder} />
  </>
  );
}

export default App;
