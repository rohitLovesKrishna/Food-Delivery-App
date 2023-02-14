import './App.css';
import Fooditems from './components/Fooditems/Fooditems';
import Navbar from './components/Navbar/Navbar';
import ThemeImg from './components/ThemeImage/ThemeImg';
import {useState} from 'react'
import data from './components/FoodData/FoodData.js'
import styled,{css} from 'styled-components'

function App() {
  const Button = styled.button`
  background-color:green;
  ${props =>
  props.primary && css`
    background: palevioletred;
    color: white;
`};
`
  const Heads = styled.h1`
  color:red;
  font-family:cursive;
 text-align: center;
 ${props =>props.h2 && css`
 color:green`};
  `
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
<Navbar items = {items}/>
<ThemeImg/>
<Fooditems foodItems={foodItems}  addItems = {increaseMe} subItems={decreaseMe} />
      <center><Button>Hi Rohit Ambawata</Button></center>
      <center><Button primary>Hi Rohit Ambawata</Button></center>
  </>
  );
}

export default App;
