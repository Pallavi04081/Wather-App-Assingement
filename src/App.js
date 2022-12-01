import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { ModalHover } from 'react-modal-hover'
import {Scrollbars} from 'react-custom-scrollbars'

function App() {
  const [getsearch,setGetSearch]= useState("")
  const [searchedInput,setSearchedInput] = useState("")
 const [search,setSearch] = useState([])
 const [hover,setHover] = useState(false)
 const [hoverResult,setHoverResult] = useState([])
  const key = 'PsyYpkRlysxfXQZ99-bZFf5msPHyopRoa5KGrC94cc0'

 useEffect(()=>{
  const getSearchResult = async()=>{
    try{
      if(searchedInput){
        console.log(searchedInput)
 const Result = await axios.get(`https://api.unsplash.com/search/photos?query=${searchedInput}&client_id=${key}`)
 setSearch(Result.data.results)
      }  
   }
  catch(error){
   console.log(error)
  }
  }
   getSearchResult()
 },[searchedInput])
 
 const searchInput = (e)=>{
    setGetSearch(e.target.value)
 }

 const setSearchInput = (e)=>{
  setSearchedInput(getsearch)
 }

 const hoverEffect = ()=>{
     setHover(true)
 }

  const captured = (e)=>{
      setHoverResult([...hoverResult,e.target.id])
  }

  return (
    <div className="App">
      <div className="mainContiner">
      <div>
        <h1>React Photo Search</h1>
        <button class="btn btn-primary" style={{marginLeft:"10px"}}>Bookmark</button>
      </div>
      <div>
        <input type="search" onChange={searchInput} class="form-control" placeholder='search'/>
        <button onClick={setSearchInput} class="btn btn-primary" style={{marginLeft:"10px"}}>search</button>
      </div>
      <Scrollbars>
      <div style={{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%"}}>
       {
        search.map((element)=>{
        return(
          <>
           <div style={{display:"grid",gridTemplateRows:"90% 10%"}}>
           <img src={element.urls.regular} style={{width:"100%",height:"100%",padding:"10px"}} hover={()=>{console.log('hello')}} onMouseOver={hoverEffect}/>
           {hover?<p style={{color:"blue"}} id={element.urls.regular}  onClick={captured}>Bookmark</p>:""}
           </div>
          </>
         )
        })
       }
      </div>
      </Scrollbars>
      </div>
    </div>
  );
}

export default App;
