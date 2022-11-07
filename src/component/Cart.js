

const Cart = ({parray1})=>{
  const Total =parray1.parray.reduce((sum,ele) => {
              return sum+(ele.quantity*ele.price)
  },0);
    return(
        <>
        <div>
         {
            parray1.parray.map((ele)=>{
                if(ele.quantity)
                return(
                    <>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    </>
                )
            })
         }
         <div>
           <p>Total</p>
            <p>{Total}</p>
         </div>
        </div>
        </>
    )
     
}

export default Cart;