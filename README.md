# Weather Journal 

Weather Journal is an asynchronous weather App that allows you to get the current temperature of any city according to its ZIP code. It depends on the API of OpenWeatherMap website. 

![Screenshot](preview.png) 

## Demo
 
![weather-journal-get-your-city-we](https://user-images.githubusercontent.com/69651552/98997281-f09cb780-253c-11eb-91af-87cb76c1267c.gif)

## Instructions, Building & Get Started

    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the Node.js environment in your machine.
    - 3- Open your terminal and be sure that you are inside the correct destination of the App, while you must be in the same path of the server.js file.
    - 4- inside your terminal run these commands:-
    
        * to install dependencies.
        ```
        npm install
        ```
        * to start the server.
        ```
        node server.js
        ```
    - 5- Once the App server is running, visit (localhost:8000) in the browser to view the App and now you can treat with it as shown above in the Demo.
    
## What happened behind the scenes  

- Send a GET request to OpenWeatherMap API to get the location's temperature.
- Post a data object to the Express Server.
- This data object is the end-user's input which returns the specific OpenWeatherMap API data with a dynamically-generated date.
- Get data from the Express Server and update the UI dynamically.

## Built With

* HTML
* CSS
* Vanilla JS 

## Frameworks 

* [Bootstrap 4](https://getbootstrap.com/)
* [FastHelpers Framework [FHF]](https://github.com/Mohamed-Elhawary/fasthelpers-framework-fhf)  

## API

* [OpenWeatherMap](https://www.OpenWeatherMap.com)   

## Dependencies 

* [Body Parser](https://www.npmjs.com/package/body-parser)
* [CORS](https://www.npmjs.com/package/cors)

## Environment  

* Node JS with Express Framework to create server-side for storing the retrieved data

## Author

* [Mohamed Elhawary](https://www.linkedin.com/in/mohamed-elhawary14/)

## Contact me through my social accounts

* Email: mohamed.k.elhawary@gmail.com
* [LinkedIn](https://www.linkedin.com/in/mohamed-elhawary14/)
* [Github](https://github.com/Mohamed-Elhawary)  
* [Behance](https://www.behance.net/mohamed-elhawary14)
* [Codepen](https://codepen.io/Mohamed-ElHawary) 

## Notices

- This App is a practical project from Udacity Course [Nanodegree Program - Web Development Professional Track](https://www.udacity.com/course/intro-to-programming-nanodegree--nd000)

## Certificate

[Course Certificate](Certificate.pdf)

## License

Licensed under the [MIT License](LICENSE)
