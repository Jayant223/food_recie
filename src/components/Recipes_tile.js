import "./recipes_tile.css"
import React from "react"

const Recipes_tile=({reci1})=>{
return(
    reci1["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null&&
<div className="recipeTile" onClick={()=>{
    window.open(reci1["recipe"]["url"])
}}>
    <img className="recipeTile_image" src={reci1["recipe"]["image"]} alt="error" />
    <p className="recipeTile_name">{reci1["recipe"]["label"]}</p>
</div>
)
    
}
export default Recipes_tile;