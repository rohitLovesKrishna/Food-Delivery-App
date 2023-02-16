import  ReactDOM  from "react-dom"
import {useState,useEffect} from 'react'
import './Checkout.css'
const CheckoutPage = (props)=>{

    const newData = props.data.filter((item)=>item.qty > 0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=>{
       props.data.forEach((val)=>{
            setTotalAmount(prev=>prev+=val.qty * val.amt)
        })
    },[props.data]);

    const Backdrop = ()=>{
        return <div className="backdrop" onClick={props.onClick} />
    }
    const Overlay = ()=>{
        return (
            <>
            <div className="overlay">
              <h5>Your Cart is ready to checkout..
                        <hr style={{ border: '2px solid gray' }} />
              </h5>
              <div className="performaOfCart">
                <h5>Image</h5>
                        <h5>&emsp;&emsp;Title</h5>
                        <h5>&emsp;&emsp;&emsp;Quantity</h5>
                        <h5>Amount</h5>
              </div>
                    <hr style={{ border: '2px solid gray' }} />
                    <div className="forScrollBar">
                        {newData.map((item,index)=>{
                return(
                    <>
                            <div className="orderDetailsBox" >
                                <div className="orderDetailsBox image" ><img src={require(`${item.img}`)} alt={item.title}/></div>
                                <div className="orderDetailsBox title" >{item.title}</div>
                                <div className="orderDetailsBox qty" >1*{item.qty}</div>
                                <div className="orderDetailsBox amount">Rs.{item.qty * item.amt}</div>
                        </div>
                            <hr style={{ border: '2px solid gray' }}  />
                    </>
                )
              })}
                    </div>
                    <div className="totalAmount">
                        <div className="amountToPaid">
                            <h5>Total Amount: Rs. {totalAmount}</h5>
                        </div>
                        <div className="btns">
                            <button className="closeBtn" onClick={props.onClick}>Close</button>
                            <button className="orderBtn" onClick={props.onConfirm}>Order</button>
                        </div>
                    </div>
            </div>
            </>
        )
    }

return (
    <>
        {props.items <= 0 ? <div style={{position:'fixed',zIndex:'10',width:'100%'}} className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Ufff!!!! Cart is empty!!</strong> 
            <button onClick={props.onClick} type="button" style={{backgroundColor:'transparent',border:'none',fontSize:'20px'}} className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> :<div>
                {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop__root'))};
                {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay__root'))};
        </div>}
        </>
)
}
export default CheckoutPage 