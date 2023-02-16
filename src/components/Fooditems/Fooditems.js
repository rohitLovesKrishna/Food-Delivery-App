import './Fooditems.css'
import React from 'react'

export default function Fooditems(props) {

  return (
<>
<div className='food-itemContainer'>

    {/* start of dhai balle box */}
    {props.foodItems.map((item)=>{
        return (
            <div className='food-itemBox' key={item.id}>
                <div className='food-item' >
                    <div className='foodDetails'>
                        <img className='food-image' src={require(`${item.img}`)} alt={item.title} />
                        <h4 className='food-title'>{item.title}</h4>
                    </div>
                    <div className='counter'>
                        <span className='control-cart' id={item.id} onClick={props.subItems}>-</span>
                        <span className='counter-inc' >{item.qty}</span>
                        <span className='control-cart' id={item.id} onClick={props.addItems }>+</span>
                    </div>
                    <div className='price'>
                        Rs.{item.qty > 0?item.qty*item.amt : item.amt}
                    </div>
                </div>
            </div>
        )
    })}
          
              {/* end of dhai balle box */}

</div>
</>
  )
}
