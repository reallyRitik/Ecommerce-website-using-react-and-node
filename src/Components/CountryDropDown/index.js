import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const CountryDropDown = () => {
    const [isOpenModel, setisOpenModel] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch("https://countriesnow.space/api/v0.1/countries");
          const data = await response.json();
          if (data && !data.error && data.data) {
            setCountries(data.data);
            setFilteredCountries(data.data);
          } else {
            console.error("Invalid API response structure:", data);
          }
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      };
  
      fetchCountries();
    }, []);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
    
        const filtered = countries.filter((country) =>
          country.country.toLowerCase().includes(value)
        );
        setFilteredCountries(filtered);
      };
    
    return (
        <>
            <Button className="countryDrop" onClick={()=>setisOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>
            <Dialog  open={isOpenModel} onClose={()=>setisOpenModel(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="closeTab" onClick={()=>setisOpenModel(false)}><MdClose /></Button>

                <div className="headerSearch w-100">
                                    <input type="text" placeholder="Search your area..." value={searchTerm}
          onChange={handleSearch}/>  
                                    <Button><IoIosSearch/></Button>                              
                                </div>
                                <ul className="countryList mt-3">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <li key={index}>
              <Button onClick={() => console.log(country.country)}>
                {country.country}
              </Button>
            </li>
          ))
        ) : (
          <li>No countries found</li>
        )}
      </ul>
            </Dialog>
        </>
    )
}

export default CountryDropDown;