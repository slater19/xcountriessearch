
  import React, { useEffect, useState } from "react";
  import './XCOUNTRIESSEARCH.css';

  function CountriesSearch() {

    const api="https://xcountries-backend.azurewebsites.net/all"
    const [countries,setCountries]=useState([])
    const [searchItem ,setSearchitem]=useState('')
    const [filteredCountries,setFilteredcountries]=useState([])
    
    useEffect(()=>{
      const fetchCountries = async() => {
      try {
        const res = await fetch(api)
        const data=await res.json(); 
        setCountries(data) 
        setFilteredcountries(data)
        // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
      } catch (error) {
          console.error("Error fetching data:",error);
      }
  
    };
    fetchCountries();
  },[]);

    const onChangeHandler=(e) =>{
      const searchText =e.target.value;
      setSearchitem(searchText);

      const filteredItems=countries.filter((country)=>
        country.name.toLowerCase().includes(searchText.toLowerCase())

      
    );
    setFilteredcountries(filteredItems)
    
    }
    


return (
  <>
  <header>


  <input type="text" id="search" name="search" size="60" value={searchItem} onChange={onChangeHandler} placeholder="Search for countries..." />
</header>
  
<div 
style={{
    display: "flex",
    flexWrap:"wrap",
  }} >
    {filteredCountries.map(({name,flag,abbr}) =>(
      <CountryCard name={name} flag={flag} abbr={abbr} />
    ))}
  </div>
  
  </>)}
  
  const CountryCard = ({name,flag,abbr}) => {

    return <div 
        className="countryCard"
        >
          <img src={flag} alt={`Flag of ${abbr}`} style={{ height: "100px", width: "100px",}}/>
         <h2>{name}</h2>
          </div>;
      
      
      
   };
  
  export default CountriesSearch;
  