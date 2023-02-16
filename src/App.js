import { Fooditems, Navbar, ThemeImg, data, CheckoutPage,initialData} from './components'
import {useEffect, useState} from 'react'
import Ordered from './components/Ordered/Ordered';


function App() {

const [items,setItems] = useState(0);
  const [isCart, setIsCart] = useState(false);
const [foodItems,setFoodItems] = useState(data);
  const [isOrder, setIsOrder] = useState(false);

  const thanksForOrder =()=>{
    setIsCart(!isCart);
    setIsOrder(true)
    if(isCart){
      setItems(0);
      setFoodItems((prev)=>prev.map((item)=>{
        return {
          ...item,qty:0
        }
      }))
    }
    setTimeout(()=>{
      setIsOrder(false)
    },2000)
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
      {isOrder&&<Ordered  isOrder={isOrder}/>}
<ThemeImg/>
      <Fooditems foodItems={foodItems} addItems={increaseMe} subItems={decreaseMe} />
  </>
  );
}

export default App;
