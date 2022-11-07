
const Products = ({parray1})=>{
    console.log(parray1)
    const getid = (e) => {
        const changedQuantity = parray1.parray.filter((ele) => {
            if (e.target.id == ele.id) { return ele }
        })

        if (e.target.value == "add") {
            changedQuantity[0].quantity = changedQuantity[0].quantity + 1;
            parray1.setparray((parray) => {
                return parray.map((ele) => {
                    return e.target.id == ele.id ? e.quantity = changedQuantity[0] : ele
                })
            })
        }
        else {
            if(changedQuantity[0].quantity){
            changedQuantity[0].quantity = changedQuantity[0].quantity - 1;}
            parray1.setparray((parray) => {
                return parray.map((ele) => {
                    return e.target.id == ele.id ? e.quantity = changedQuantity[0] : ele
                })
            })
        }

    }
    return(
        <>
       <div>
        <h3> Products </h3>
        {
            parray1.parray.map((product)=>{
                return(
                <div id={product.id}>
                 <p>{product.name}</p>
                 <p>{product.price}</p>
                 <div>
                    <button id={product.id} value="sub" onClick={getid}>-</button>
                    <p >{(product.price*product.quantity)}</p>
                    <button id={product.id} value="add" onClick={getid}>
                        +
                    </button>
                 </div>
                </div>
                )
            })
        }
       </div>
        </>
    )
     
}

export default Products;
