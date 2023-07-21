Schema Idea for Capstone:
NWS National Weather Service API:

1. Location Table
   - location_id (Primary Key)
   - city_name
   - state
   - country
   - latitude
   - longitude
  


2. Weather Data Table:
     - weather_id (primary key)
     - location_id (Foriegn Key to reference location table)
     - date_time
     - temperature
     - humidity
     - wind_speed
     - weather_description
     - precipitation
     - pressure
     - visibility
     - dewpoint
     - sunrise_time
     - sunset_time

3. User Table:
     - user_id (primary key)
     - username
     - email
     - password_hash


4. User Favorites Table:
     - user_favorite_id (primary key)
     - user_id (foreign key to refer to user table)
     - location_id (foreign key to refer to location table)

Users store locations with weather data that updates with API real time.
