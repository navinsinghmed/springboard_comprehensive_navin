import React, { useState } from 'react';

const api = {
    key: "b09e5020d8a9304b48033ac16ed26d00",
    base: "https://openweathermap.org/api",
}

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }
    
    const dateMaker = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day} ${date} ${month} ${year}`
    }
    
    return (
            <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > -200) ? 'app tropical' : 'tropical') : 'app'}>
                <main>
                    <div className="search-box">
                        <input 
                            type="text"
                            className="search-bar"
                            placeholder="Search for any location!"
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyDown ={search}
                            />
                    </div>
                    {(typeof weather.main !="undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateMaker(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round((weather.main.temp)*1.8 + 32)}°F
                            </div>
                            <div className="weather">
                                {weather.weather[0].main}
                            </div>
                            <div className="weather-feels">
                                Feels like : {Math.round((weather.main.feels_like)*1.8 + 32)}°F
                            </div>
                            <div className="weather-humidity">
                                Humidity : {weather.main.humidity}%
                            </div>
                        </div>
                    </div>
                    ) : ('')}    
                </main>
            </div>    
        );
}

export default App;