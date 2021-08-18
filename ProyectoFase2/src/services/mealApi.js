export default class MealApi{
   
    static async getrecipesById(value){
       return await  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i='${value}`)
        .then(response=>{
            return response.json()
        })
       .then(data=>{return data})
       .catch(err=>{return err})
    }

    static async getrecipesByName(value){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s='${value}`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }


    static  getrecipesRandom(){
        return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
         .then(response=>{
             return (response.json())
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }


    static async getrecipesCategories(){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }


     static async getrecipesByMainIngredient(value){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }

     static async getrecipesByMainIngredient(value){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }

     static async getrecipesByCategory(value){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }


     static async getrecipesByArea(value){
        return await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
         .then(response=>{
             return response.json()
         })
        .then(data=>{return data})
        .catch(err=>{return err})
     }


}

