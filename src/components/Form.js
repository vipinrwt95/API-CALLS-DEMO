import React,{useState} from "react";


const Form=()=>
{
 const[formData,setFormData]=useState({});   
const DataHandler=(event)=>
{   
    event.preventDefault();
    console.log(formData);
    
}
const getData=(key)=>
{
    return formData.hasOwnProperty(key)?formData[key]:'';
};
const setData=(key,value)=>
{  
   return setFormData({...formData,[key]:value}); 
   
}

return(
 <section>
  <form> 
  <label>Title</label><br />
  <input type="text" value={getData('name')}onChange={(e)=>setData('name',e.target.value)} /><br />
  <label>Opening Text</label><br />
  <input type="text" value={getData('openingtext')}onChange={(e)=>setData('openingtext',e.target.value)} /><br />
  <label>Release Date</label><br />
  <input type="date" value={getData('date')}onChange={(e)=>setData('date',e.target.value)}/> <br />
  <button onClick={DataHandler}>Add Movie</button> 
  </form> 
</section>

)



}
export default Form;