import { useEffect,useState } from "react";
import axios from "axios"

const Home = ()=>{
 
    const [weatherData,setWeatherData] = useState()
    const [city,setCity] = useState("")
    const [error,setError] = useState(false)
    const [History,setHistory] = useState([])
    
    const debounce = (fun)=>{
        let timer;
        return (...arg)=>{
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                fun.call(this,arg)
            },1000)
        }
    }
        
    const callApi = async(e)=>{
       try{
        if(e){
            if(e[0]){
                const Responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=5140aeba1fee36ee6e43232510a2c885`)
                setWeatherData(Responce?.data?.main)
                setCity(Responce.data.name)
                    if(History.length<3){
                       setHistory((previous)=>{
                          return [...previous,Responce.data.name]
                       })
                    }
                    else{
                       
                        const Result = History.filter((ele,index)=>{
                            return (index!=0)
                        })
                            

                           
                         setHistory(()=>{
                            return [...Result,Responce.data.name]
                         })
                    }
                 }
                 else{
                    setCity("")
                    setError("")
                 }
            }
        }          
       catch(error){
         setError(true)
       }     
    }

    const getInput = debounce(callApi)

 
     callApi()
    return(
        <>
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{ width:"80%",height:"90%",background:"skyblue",display:"flex",flexDirection:"column",alignItems:"center"}}>
       <h1>Weather App</h1>
           <div style={{width:"80%",height:"10%"}}>
            <input type="text" onChange={(e)=>{getInput(e.target.value)}} style={{width:"100%",height:"100%",boxShadow:"4px 3px 4px 3px rgb(0 0 0.5)",border:"none",borderRadius:"25px",marginTop:"50px",fontSize:"22px",padding:"25px"}}/>
           </div>
           {
            city?
            <div style={{height:"80%",marginTop:"120px"}}>
            <h4>Weather Detials of City: {city}</h4>
           <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>Current Temp: {weatherData.temp}</p>
           <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>Temp Range: {weatherData.min_temp} To {weatherData.temp_max}</p>
           <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>Humidity:  {weatherData.humidity}</p>
           <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>Sea Leavel:  {weatherData.sea_level}</p>
           <p style={{fontSize:"18px",fontWeight:"600"}}>Ground Leavel:  {weatherData.grnd_level}</p>
           </div>:
           <div style={{marginTop:"80px"}}>
            {
                History[0]?
                <div>
                <h2>Last three Searched City</h2>
           <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>{History[0]}</p>
          <p style={{fontSize:"18px",fontWeight:"600",marginTop:"20px"}}>{History[1]}</p>
              <p style={{fontSize:"18px",fontWeight:"600"}}>{History[2]}</p>
              </div>:
          ""
            }
            
          </div>
           }
           {
            error?<div style={{marginTop:"80px"}}>
                <h3 style={{color:"red"}}>Invalid City</h3>
            </div>:""

           }
        </div>
        </div>
        </>
    )

}

export default Home;