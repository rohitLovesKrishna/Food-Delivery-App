import  ReactDOM  from "react-dom"
import './Checkout.css'
const CheckoutPage = (props)=>{

    const Backdrop = ()=>{
        return <div className="backdrop"/>
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
              {props.data.map((item)=>{
                return(
                    <>
                        <div className="orderDetailsBox">
                            <div className="orderDetailsBox image"><img src={require(`${item.img}`)} alt={item.title}/></div>
                            <div className="orderDetailsBox title">{item.title}</div>
                            <div className="orderDetailsBox qty">{item.qty}</div>
                            <div className="orderDetailsBox amount">{item.amt}</div>
                        </div>
                        <hr style={{ border: '2px solid gray' }} />
                    </>
                )
              })}
                    </div>
                    <div className="totalAmount">
                        <div className="amountToPaid">
                       <h3>Total Amount:</h3>
                        </div>
                        <div className="btns">
                            <button className="closeBtn">Close</button>
                            <button className="orderBtn">Order</button>
                        </div>
                    </div>
            </div>
            </>
        )
    }

return (
    <>
        {props.items <= 0 ? <div style={{display:'flex',justifyContent:'space-between'}} className="alert alert-warning alert-dismissible fade show" role="alert">
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