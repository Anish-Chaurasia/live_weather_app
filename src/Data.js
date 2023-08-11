import datastyle from "./data.module.css"
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IoIosPin, IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';







function Data() {
    const [maindata, setMainData] = useState(null)
    const [countarydata, setCountrData] = useState(null)
    const [weatherdata, setWeatherData] = useState(null)
    const [timezonedata, setTimezonedata] = useState(null)
    const navigate = useNavigate();
    function gotoData() {
        navigate("/input")

    }


    const location = useLocation();
    const search = location.state.search;

    useEffect(() => {
        const fetchdata = async () => {
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c8c1564faf74847d6690688c78b00bdd`);

            const data = await resp.json();
            setMainData(data.main);
            setCountrData(data.sys);
            setWeatherData(data.weather)
            setTimezonedata(data.name)


        }

        fetchdata();

    }, [search])


    return (
        <div className={datastyle.mainbox}>
            {
                !maindata ? (
                    <div className={datastyle.notfound} >
                        <div className={datastyle.erritem} id={datastyle.erritem1}>
                            <div  ><button type="button" title="Go Back" id={datastyle.item1icon} onClick={gotoData}><IoIosArrowRoundBack /></button></div>
                            <div><p>Weather App</p></div>
                        </div>
                        <p > No Data Found Try Again !!! </p>
                        <p>Enter The correct City Name</p>
                    </div>) : (

                    <div className={datastyle.innerbox}>

                        <div className={datastyle.item} id={datastyle.item1} >

                            <div  ><button type="button" id={datastyle.item1icon} onClick={gotoData}><IoIosArrowRoundBack /></button></div>
                            <div><p>Weather App</p></div>
                        </div>


                        <div className={datastyle.item} id={datastyle.item2}>
                            {
                                weatherdata[0].description === "clear sky" ? <img src="./sun.png" /> :
                                    weatherdata[0].description === "haze" ? <img src="./haze.png" /> :
                                        weatherdata[0].description === "overcast clouds" ? <img src="./cloudy.png" /> :
                                            weatherdata[0].description === "broken clouds" ? <img src="./cloudy2.png" /> : <img src="./suncloud.png" />

                            }</div>

                        <div className={datastyle.item} id={datastyle.item3}><p>{maindata.temp} &deg; C</p></div>
                        <div className={datastyle.item} id={datastyle.item4}> <h1>{weatherdata[0].description}</h1></div>
                        <div className={datastyle.item} id={datastyle.item5}> <h1 id={datastyle.item5icon} ><IoIosPin /></h1 > <h1>{timezonedata}, {countarydata.country}</h1></div>

                        <div className={datastyle.item} id={datastyle.item6}>

                            <div className={datastyle.item6item} id={datastyle.item6itemdiv1}>

                                <div className={datastyle.inneritem6} id={datastyle.inner6item1} > <img src="./therma.png" alt="" /></div>
                                <div className={datastyle.inneritem6}> <p> {maindata.feels_like} &deg; C</p></div>
                                <div className={datastyle.inneritem6} id={datastyle.inner6item3}> <p>Feels Like</p></div>


                            </div>
                            <div className={datastyle.item6item}>
                                <div className={datastyle.inneritem6} id={datastyle.inner6item2}> <img src="./humidity.png" alt="" /></div>
                                <div className={datastyle.inneritem6}> <p>{maindata.humidity} %</p></div>
                                <div className={datastyle.inneritem6} id={datastyle.inner6item3} ><p>Humidity</p></div>



                            </div>
                        </div>


                    </div>
                )


            }

        </div>
    )
}

export default Data;





