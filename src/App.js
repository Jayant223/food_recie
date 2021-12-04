
import './App.css';
import axios from "axios"
import {React,useState} from "react"
import Recipes_tile from './components/Recipes_tile';

function App() {
  const [recipe,setRecipe]=useState("")
  const [recipes, setrecipes] = useState([])
  const [healthLabel,setHealthLabel]=useState("vegan")
  const YOUR_APP_ID="701b464e";
    const YOUR_APP_KEY="c069b85c1f7bc250923456da5ba2938a";
    var URL=`https://api.edamam.com/search?q=${recipe}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`
  const getApi=async()=>{
    
    const result= await axios.get(URL)
    setrecipes(result.data.hits)
    console.log(result.data.hits);
  }
  const onChangeRecipe=(events)=>{
    setRecipe(events.target.value)
    console.log(events.target.value);
  }
  const onSubmitHandler=(events)=>{
    events.preventDefault();
    getApi();
  }

  return (
    <div className="app" onSubmit={onSubmitHandler}>
    <h1>Enjoy Food Recipe App🌭🌭🍔</h1> 
    <form className="food_form">
      <input className="input_1" type="text" placeholder="enter recipe" value={recipe} onChange={onChangeRecipe}/>
      <button className="button_1" type="submit" value="Search">Search</button>
    <select className="app_healthLabels">
      <option value="vegan" onClick={()=>setHealthLabel("vegan")} >vegan</option>
      <option value="balanced" onClick={()=>setHealthLabel("balanced")}>balanced</option>
      <option value="high-protein" onClick={()=>setHealthLabel("high-protein")}>high-protein</option>
      <option value="low-carb" onClick={()=>setHealthLabel("low-carb")}>	low-carb</option>
      <option value="low-fat" onClick={()=>setHealthLabel("	low-fat")}>	low-fat</option>
      <option value="low-sodium" onClick={()=>setHealthLabel("low-sodium")} >low-sodium</option>
      <option value="alcohol-free" onClick={()=>setHealthLabel("alcohol-free")}>alcohol-free</option>
      <option value="dairy-free" onClick={()=>setHealthLabel("dairy-free")} >	dairy-free</option>
      <option value="egg-free" onClick={()=>setHealthLabel("egg-free")}>vegan</option>
      <option value="	low-sugar" onClick={()=>setHealthLabel("low-sugar")} >	low-sugar</option>
      <option value="	peanut-free" onClick={()=>setHealthLabel("peanut-free")}>	peanut-free</option>

    </select>
    </form>
    <div className="app_recipes">
    {recipes.map((reci1)=>
     <Recipes_tile  reci1={reci1} />
    )}
    </div>
    </div>
  );
}

export default App;
