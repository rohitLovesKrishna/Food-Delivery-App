import { Fooditems, Navbar, ThemeImg, data } from './components'
import {useState} from 'react'


function App() {

const [items,setItems] = useState(0);
const [foodItems,setFoodItems] = useState(data);


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
      
      <Navbar items={items} />
<ThemeImg/>
<Fooditems foodItems={foodItems}  addItems = {increaseMe} subItems={decreaseMe} />
  </>
  );
}

export default App;
