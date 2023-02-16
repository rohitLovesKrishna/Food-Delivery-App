import './Ordered.css'
import ReactDOM from 'react-dom'
const Ordered = (props)=>{
    const Message = ()=>{
        return(
            <>
                <div className='happyMessage'>
                    <strong>Hurray! Your order has been placed succesfully</strong>
                </div>
            </>
        )
    }
return(<>
  {ReactDOM.createPortal(<Message/>,document.getElementById('ordered__root'))}
</>)
}
export default Ordered