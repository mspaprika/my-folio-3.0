/* 
1. Cats
2. Text Game
3. Fitness App
4. Quiz
5. Events App
6. Weather App
7. Caesar Cipher
8. Sunny Surfboards
9. My Folio 1.0
10. My Folio 2.0
*/

import cats5 from "../data/images/milka9.png";
import cats from "../data/images/baby-milka2.jpg";
import cats2 from "../data/images/cute.jpg";
import cats3 from "../data/images/milka.jpg";
import cats4 from "../data/images/garfie.jpeg";

import cave from "../data/screens/cave103.png";
import cave2 from "../data/screens/cave12.png";
import cave3 from "../data/screens/cave102.png";
import cave4 from "../data/screens/cave101.png";
import cave5 from "../data/screens/cave1.png";

import fitness from "../data/screens/fit33.png";
import fitness2 from "../data/screens/fit101.png";
import fitness3 from "../data/screens/fit11.png";
import fitness4 from "../data/screens/fit104.png";
import fitness5 from "../data/screens/fit103.png";

import weather from "../data/screens/clouds.png";
import weather2 from "../data/images/radar.jpg";
import weather3 from "../data/images/light.jpg";
import weather4 from "../data/images/hurry.jpg";
import weather5 from "../data/images/torn.jpg";

import quiz from "../data/screens/quiz1.png";
import quiz2 from "../data/screens/quiz101.png";
import quiz3 from "../data/screens/quiz102.png";
import quiz4 from "../data/screens/quiz103.png";
import quiz5 from "../data/screens/quiz104.png";

import cypher from "../data/screens/cypher11.png";
import cypher2 from "../data/screens/cypher2.png";
import cypher3 from "../data/screens/cypher.png";
import cypher4 from "../data/images/matrix.jpg";
import cypher5 from "../data/images/pc.jpg";

import event from "../data/screens/event33.png";
import event2 from "../data/screens/event101.png";
import event3 from "../data/screens/cat101.png";
import event4 from "../data/screens/event3.png";
import event5 from "../data/screens/event4.png";

import sunny from "../data/screens/sunny33.png";
import sunny2 from "../data/screens/sunny55.png";
import sunny3 from "../data/screens/sunny3.png";
import sunny4 from "../data/screens/sunny2.png";
import sunny5 from "../data/screens/sunny11.png";

import folio from "../data/screens/folio1.png";
import folio2 from "../data/screens/folio.png";
import folio3 from "../data/screens/folio101.png";
import folio4 from "../data/screens/folio102.png";
import folio5 from "../data/screens/folio103.png";


export const webProjects = [
    {
        id: 1,
        next: 2,
        title: "Cats",
        description: `Cats is a family website created using my own cat pictures. It is a very special project for me, because I really love cats! Moreover, it's the first website I have ever created with Bootstrap and the first one fully compatible on mobile screen.
        
        I plan to expand the website and include more cats, so if you like cats too, stay tuned!`,
        images: [cats, cats2, cats4, cats3],
        image: cats5,
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap.",
        myCollab: "",
        gitHub: "https://github.com/mspaprika/Cats.git",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/Cats/",
        lastUpdated: "23/03/2025",
        message: "More cats added!",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 2,
        next: 3,
        title: "Escape Nuclear Mine",
        description: `This project is by far my favorite. I had so much fun creating it! Sometimes life can be tough, and we all need a little silly laugh to lighten the mood.

        • Simple text-based adventure, where you enter commands 
        • Progress through a mysterious cave system filled with strange creatures 
        • Upon entering START, you find yourself in a series of caves, each with a new question to answer
        • You have only three attempts to get each question right before facing a consequence
        • Silly questions + mysterious creatures + limited attempts == fun experience`,
        images: [cave5, cave2, cave3, cave4],
        image: cave,
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        myCollab: "",
        gitHub: "https://github.com/mspaprika/Text-Game",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 3,
        next: 4,
        title: "Fitness App",
        description: `A collaborative 4 week full-stack project developed during a bootcamp. We worked in groups of 4 people and used GitHub version control and used Scrum for daily collaboration.
        
        App is about wellness, food and social interractions. The user is able to register and login, set prefferences and account settings. Innitially, temporary username is assigned but its possible to change it later (ONCE). Passwords are protected with one-way encryption utilizing bcrypt library. There is both authentification (express sessions) and authorization (cookies) services.
        
        Other features include: search for recipes and nutritional info; search for exercises and build workouts; create posts, write comments; search for users and add them to contacts list; send direct messages. The app is fully responsive and works on mobile devices as well. 

        Frontend is made out of React, backend implemented using node express, fetch requests are handled with axios and database used is No-SQL MongoDB. Both back and front is hosted through Render platform.
        `,
        images: [fitness4, fitness5, fitness2, fitness3],
        image: fitness,
        mainFeatures: "Express.js, Node.js, MongoDB, Mongoose, React, React Router, APIs, SASS, Bootstrap, bcrypt, Axios, Render.",
        myCollab: `[frontend] 
        Recipes - using free Restful API recipes are fetched and formated in the recipe cards.
        Community - a place for posts and reactions, similar to soacial media. It accepts posts, comments, likes and other reactions - these are synced directly with a database before are updated on screen. 
        Custom Workout - option to craft your own workout with custom duration, reps and exercises from API.

        [backend] 
        Login/ Logout functionality - Express Sessions to manage login requests, tokens and authorization.
        Internal / External API calls, database models, routes, controllers.`,
        gitHub: "https://github.com/mspaprika/fitness-app",
        gitHubFront: "https://github.com/mspaprika/fitness-app",
        gitHubBack: "https://github.com/mspaprika/fitness-backend",
        live: "https://fitness-app-gs9y.onrender.com/",
        lastUpdated: "06/04/2023",
        message: "",
        icons: ["html", "css", "javascript", "react", "sass", "mongo"],
    },
    {
        id: 4,
        next: 5,
        title: "Quiz",
        description: `A simple quiz that displays a question and 4 possible answers. There are no good or bad answers, it's just for fun. 
        
        Main theme of this quiz is 'Which Simpson's character you are?'. I love Simpsons and whatch it daily, so really enjoyed coding this quiz. I tried to add all favourite characters, but they didn't fit! That means, I'll need to find another ways to squeeze them...
        
        I created it very early on coding bootcamp when I didn't have much CSS skills. That's why layout is not responsive and might look funny if you use it on a mobile device. I plan to fix it in the future. `,
        images: [quiz2, quiz3, quiz4, quiz5],
        image: quiz,
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, DOM manipulation.",
        myCollab: "",
        gitHub: "https://github.com/mspaprika/Quiz",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/Quiz/",
        lastUpdated: "28/05/2023",
        message: "Updating this website is very high on my list. Until then, please use it on a desktop and adjust screen resolution if needed.",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 5,
        next: 6,
        title: "Events App",
        description: `A collaborative full-stack project, created during full-stack web bootcamp. 
        
        App is a platform for users to create an event post which then is displayed on the dashboard. It acts like a wall where all users can contribute.
        
        Frontend is built with React and backend with Node.js/ MongoDB. Only logged in users can see the dashboard and their upcoming events. Some good events added for a laugh.`,
        images: [event2, event3, event4, event5],
        image: event,
        mainFeatures: "React, Node.js, Express.js, MongoDB, Mongoose, Axios, React Router, React Bootstrap.",
        myCollab: "event page and event cards, date/ time convertion functions, actual events",
        gitHub: "https://github.com/mspaprika/events-app-frontend",
        gitHubFront: "https://github.com/mspaprika/events-app-frontend",
        gitHubBack: "https://github.com/mspaprika/events-app-backend",
        live: "https://events-app-sk5b.onrender.com/",
        lastUpdated: "15/03/2023",
        message: "Login credentials: [username]: Lucy ; [password]: IAmCat",
        icons: ["html", "css", "javascript", "react", "mongo"],
    },
    {
        id: 6,
        next: 7,
        title: "Weather App",
        description: "A collaborative weather app that displays the current weather and a 5-day forecast. Built on React and several APIs. The app uses the OpenWeather API to fetch the data. ",
        images: [weather3, weather2, weather4, weather5],
        image: weather,
        mainFeatures: "React, APIs, React Bootstrap, Axios, OOP.",
        myCollab: "Weather cards styling, city capitalization function, Carousel styling and show current city pictures from Unsplash API.",
        gitHub: "https://github.com/mspaprika/weather-api-new",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/weather-api-new/",
        lastUpdated: "",
        message: "",
        icons: ["html", "css", "javascript", "react", "sass"],
    },
    {
        id: 7,
        next: 8,
        title: "Caesar Cypher",
        description: "Encrypting application that encodes and decodes text for personal use. The encryption works by replacing each letter with another letter using unique key. In our version you can choose any string of letters/ numbers/ other characters as the encryption key. This Cipher uses ASCii values to encode and decode the text.",
        images: [cypher4, cypher3, cypher2, cypher5],
        image: cypher,
        mainFeatures: "HTML, CSS, JavaScript.",
        myCollab: "JavaScript Encoding / Decoding functions",
        gitHub: "https://github.com/mspaprika/caesar-cipher-test",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/caesar-cipher-test/",
        lastUpdated: "",
        message: "",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 8,
        next: 9,
        title: "Sunny Surfboards",
        description: "My very first website ever, built during a first bootcamp. This is complete beginner level project which is built using inline CSS and JavaScript, and items are aligned using float... It looks funny now, but back then it was nothing but awesome! It wasn't a requirement, but I had some fun with JavaScript and created few cool functions. One of them will calculate your wetsuit size according to weight/ height. Another will show/ hide descriptions of Surfboards. Just don't try it on mobile as it might look weird.",
        images: [sunny3, sunny2, sunny4, sunny5],
        image: sunny,
        mainFeatures: "HTML, CSS, JavaScript.",
        myCollab: "",
        gitHub: "https://github.com/mspaprika/sunny-surfboards",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/sunny-surfboards/",
        lastUpdated: "",
        message: "***Update*** Website was slightly updated recently and is now live on GitHub! You will notice it's missing .js and .css files, but I intentionally left it as it was, simply to remeber the progress I made since then 🙂 .",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 9,
        next: 1,
        title: "My Folio",
        description: "My Folio is a website that was created in 2 days. This just couldn't go well... And it didn't. Time was very scarse and my mind went wild. It supposed to be my portfolio. But I submitted my assignment and din't want to look back. Why? Because of all pssible mistakes I made during it and impossible maintenace. The stress while dealing with this layaut whas immense and pain was felt physically. I decided to leave all bad memories behind, together with this website. But visualy it's quite nice, so I decided to leave it here.",
        images: [folio2, folio3, folio4, folio5],
        image: folio,
        mainFeatures: "HTML, CSS, Bootstrap.",
        myCollab: "",
        gitHub: "https://github.com/mspaprika/my-folio",
        gitHubFront: "",
        gitHubBack: "",
        live: "https://mspaprika.github.io/my-folio/",
        lastUpdated: "never 😊",
        message: "",
        icons: ["html", "css"],
    },
    // {
    //     id: 10,
    //     title: "My Folio 2.0",
    //     description: "",
    //     image: "",
    //     mainFeatures: "",
    //     myCollab: "",
    //     gitHub: "",
    //     gitHubFront: "",
    //     gitHubBack: "",
    //     live: "",
    //     lastUpdated: "",
    //     message: "",
    // },
]