         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 


Instructions for building and running the project
Please follow the link to Github repository to run the project.

Project Description
The application allows to create vitamin and food profiles in order to represent the information on Vitamins and Minerals in Foods in a structured format.

Highlighted features:
- Modern dynamic interface 
- In the Foods form, the vitamins to choose from appear only when they are created with Food form
- Buttons hide and show the information about the vitamins

Instructions
First, with the form on the left, create at least one vitamin profile (several are recommended). 
Below, you will see Vitamin buttons appear. Click on them to see the information that you entered about the vitamins. 
Then, with another form on the right, create food profiles that contain these vitamins.
See the results - food profiles - belows.

References:
App.js line 29: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
App.js lines 75-78: https://stackoverflow.com/questions/66434403/how-to-get-multiple-checkbox-values-in-react-js

API Documentation
Endpoints and methods:
POST /api/v1/vitamins - post a vitamin to the vitamins collections
GET /api/v1/vitamins - get all vitamins from the vitamins collection
GET /api/v1/vitamins/:name - get a specific vitamin with its name from the vitamin collection
POST /api/v1/foods - post food to the foods collections
GET /api/v1/foods - get all foods from the foods collection
GET /api/v1/foods/:name - get a specific food with its name from the foods collection
Response format: res.json() sends newly created object.
Expected POST body format is json format.
Examples on how to use each endpoint:
POST /api/v1/vitamins - post a vitamin D3 to the vitamins collections
GET /api/v1/vitamins - get all vitamins from the vitamins collection
GET /api/v1/vitamins/C - get information about the vitamin C
POST /api/v1/foods - post Beans to the foods collections
GET /api/v1/foods - get all foods from the foods collection
GET /api/v1/foods/Oranges - get information about oranges from the foods collection
