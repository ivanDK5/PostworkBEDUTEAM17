import MealApi from "../services/mealApi.js";
import {cardComponent} from "./components.js"
import  "./components.js"

let filterButton =document.querySelector("#filter") 
filterButton.addEventListener("click",(e)=>{
  //let card=document.createElement(cardComponent)
  document.querySelector('#router').innerHTML=cardComponent('Carne Asada','Mexico','Carnes','lorem  ipsum','')
  console.log("entro ",cardComponent.innerHTML);
})