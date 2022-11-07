import axios from "axios"
import { useEffect, useMemo, useState } from 'react';

const CoinMarket = ()=>{
   
  const [topcurrency,setTopCurrency] = useState([])
  const [interval,setNewInterval] = useState(true)
  //console.log(topcurrency);
    
   useMemo(()=>{
         const getData = async()=>{
             try{
            const Result = await axios.get("http://localhost:5000/getdata")
              console.log(Result)
            //setTopCurrency(Result.data.Result)
             }
             catch(error){
              console.log(error)
             }
         }
         getData();
   },[])
  
      //  setInterval(() => {
      //    interval ? setNewInterval(false) : setNewInterval(true)
      //  }, 3000);

     return (
        <>
        <div>
        <table class="table table-striped-columns" style={{marginTop:"50px"}}>
  <thead style={{background:'black',color:"white"}}>
    <tr>
      <th>Rank</th>
      <th style={{color:"white"}}>Name</th>
      <th>Price</th>
      <th style={{color:"white"}}>1h%</th>
      <th>24h%</th>
      <th style={{color:"white"}}>7d%</th>
      <th>MarketCap</th>
      <th style={{color:"white"}}>Circulating Supply</th>
    </tr>
  </thead>
  <tbody>
    {
      topcurrency.map((element)=>{
        return(
        <tr>
        <th scope="row">{element.rank}</th>
        <td>{element.name}</td>
        <td>{element.price}</td>
        <td>{element['1h']}</td>
        <td>{element['24h']}</td>
        <td>{element['7d']}</td>
        <td>{element.marketCap}</td>
        <td>{element.circulatingSupply}</td>
      </tr>)
      })
    }
  </tbody>
</table>
        </div>
        </>
     )

}

export default CoinMarket;