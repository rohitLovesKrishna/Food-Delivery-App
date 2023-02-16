const CheckoutPage = (props)=>{
return (
    <>
        {props.items <= 0 ? <div style={{display:'flex',justifyContent:'space-between'}} className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Ufff!!!! Cart is empty!!</strong> 
            <button type="button" style={{backgroundColor:'transparent',border:'none',fontSize:'20px'}} className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>:'' }
    </>
)
}
export default CheckoutPage 