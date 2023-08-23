The title of this app is weather-app-4, it is deployed at:
https://github.com/navinsinghmed/springboard_comprehensive_navin/tree/main/weather-app-2

To see the app work and how it connects to code:
[Tampa Bay Storm Chaser App Page
](https://codesandbox.io/s/frosty-tdd-hw6r8s?file=/src/App.js)

This page contains Tampa Bay Storm Chaser Information with link to my youtube Channel with
over a thousand weather videos from storms and hurricanes in Tampa Bay, Florida since 2010. This youtube video page is updated every 3 days or whenever new storms impact Tampa Bay and St. Petersburg Florida. While it was tempting to place videos on the homepage, the volume, length, and size of videos make it more efficient to use youtube as a platform instead. 

This app allows you to enter a city and obtain weather data for that city including temperature,
feels like temperature, humidity, and windspeed.

The user simply enters a city and will see all the above features. The features include temperature, feels like temperature, humidity, windspeed, and a graphic of sky conditions. Temperature is included to provide the user with how it feels to be at that city. 

Humidity demonstrates how muggy or humid it feels. The feels like temperature takes into account humidity and expresses what it feels like to the human skin in terms of temperature, which is usually hotter than the air temperature. 

The windspeed illustrates how windy it is in a city. These feautures reveal what it feels like and looks like in terms of weather conditions at a given city that the user types in. 

The tests for this app are located in the App.test.js file under SRC folder.

The standard user flow consists of the homepage --> search box to enter a city name --> result page with sky conditions, temperature, humidity, feels like temperature. The user flow also consists of homepage --> youtube link with thousands of videos I have taken of storms and hurricanes in Tampa Bay since 2010. 

The api for this app uses openweathermap as a source which contains a database of thousands of cities worldwide. 

Some Additional Context:
The feels like temperature is also called heat index, wind chill in cold temperatures under 55 degrees Fahrenheit, real feel temperature, apparent temperature, or humidex in warm temperatures above 80 degrees Fahrenheit. 

Technology Stack: Front-End:
-HTML
-CSS 
-ReactJS

Back-End:
-Javascript
