import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import inputstyle from "./input.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

function Input() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    function handleSearch(event) {
        const value = event.target.value;
        setSearch(value);
    }


    function gotoData() {
        navigate("/data", { state: { search: search } })

    }

    return (
        <div className={inputstyle.mainbox}>
            <div className={inputstyle.item} id={inputstyle.item1} >

                <div  ><button type="button" id={inputstyle.item1icon } title='See Weather' onClick={gotoData}><IoIosArrowRoundForward /></button></div>
                <div><p>Weather App</p></div>
            </div>

            <div className={inputstyle.item} id={inputstyle.item2}><input type='text' value={search} onChange={handleSearch} placeholder='Enter city name' ></input></div>
            <div className={inputstyle.item} id={inputstyle.item4}><p>or</p></div>
            <div className={inputstyle.item} id={inputstyle.item3 }> <button>Get Device Location</button></div>

        </div>
    )
}

export default Input
