import { useEffect, useState } from "react";

const CountryCard = ({name, flag, altText}) => {
    return(
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap:"4px",
            alignItems:"center",
            border:"1px solid black",
            borderRadius:"8px",
            height:"200px",
            width:"200px",
            margin: "10px",
            padding:"10px",
            textAlign:"center",
        }}>
        
        <img src={flag} 
        alt={altText}
        style={{
            width:"100px",
            height:"100px",
        }} 
        />
        <h2>{name}</h2>
        </div>
    )
}
const API_URL = "https://xcountries-backend.azurewebsites.net/all";
function Countries(){
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
      const fetchData = async () =>{
        try {
            const response = await fetch(API_URL);
        const jsonRes = await response.json();
        setCountries(jsonRes); 
        } catch (error) {
            console.error("Error fetching data: ",error);
        }
       
      }
      fetchData();
    },[])

    return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
    }}>
        {countries.map((country) =>
             <CountryCard key={country.abbr} name={country.name} flag={country.flag} altText={country.abbr} />
             )}
        </div>
    );
}

export default Countries;