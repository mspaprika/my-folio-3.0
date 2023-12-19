/*
1. Sky High Spyder
2. Cat & Fleas
3. Escape Nuclear Mine
4. Tic Tac Toe
5. Animal Saga

*/

import cave from "../data/screens/cave103.png";
import cave2 from "../data/screens/cave12.png";
import cave3 from "../data/screens/cave102.png";
import cave4 from "../data/screens/cave101.png";
import cave5 from "../data/screens/cave1.png";

import ttt from "../data/screens/ttt11.png";
import ttt1 from "../data/screens/ttt102.png";
import ttt2 from "../data/images/ttt2.jpg";
import ttt3 from "../data/screens/ttt101.png";
import ttt4 from "../data/images/ttt3.jpg";

import spy from "../data/screens/spy12.png";
import cat from "../data/screens/cat&fleas.png";
import spyGif from "../data/gifs/spy101.gif";
import spyGif2 from "../data/gifs/spyder_in_space.gif";
import catGif from "../data/gifs/cat&fleasHome.gif";
import catGif2 from "../data/gifs/cat&fleasPlay3.gif";

import animalSaga from "../data/gifs/animalSaga3.gif";
import animalSaga2 from "../data/gifs/animalSaga4.gif";
import animalImage from "../data/screens/animalSaga.png";


export const gameProjects = [
    {
        id: 1,
        next: 2,
        type: "game",
        title: "Sky High Spyder",
        description: "I created this game as part of internship at Sumo Digital. It's my very own version of Sky High Spy game! Built using C++ and playbuffer.",
        image: spy,
        gifs: [spyGif, spyGif2],
        mainFeatures: "C++, PlayBuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Sky-High-Spyder",
        live: "",
        lastUpdated: "28/09/2023",
        message: "I continue to fix bugs and add new features.",
        icons: ["cpp"],
    },
    {
        id: 2,
        next: 1,
        type: "game",
        title: "Cat & Fleas",
        description: "My very first 2D platformer game created using Sumo Digital's PlayBuffer library. Finally finished (ish), although needs some work with bugs and levels. Noneless it's really fun! The cat must eat all the treats and flowers but must stay away from fleas - they're deadly and you only have 9 lives! Cat jumps, climbs on waffle and poops, and poo attracts a fly. There's also a special power to activate ( SHIFT ) and fly might restore a life. So far only 2 levels exist but in the future I'll add some more...",
        image: cat,
        gifs: [catGif, catGif2],
        mainFeatures: "C++, PlayBuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Bouncy-Game/tree/main/Tutorial%2003%20Solution/Tutorial03-A",
        live: "",
        lastUpdated: "19/12/2023",
        message: "",
        icons: ["cpp"],
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Escape Nuclear Mine",
        description: "This project is my favourite. I had so much fun while creating it! Sometimes life is harsh and we need some good silly laugh. This is a text game which works when you enter a right command. After entering START you'll find yourself in a cave system with lots of strange creatures. In each cave you'll be prompted to answer a question. And there's only 3 tries to get it right.",
        image: cave,
        images: [cave2, cave3, cave4, cave5],
        gifs: [],
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        gitHub: "https://github.com/mspaprika/Text-Game",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
        icons: ["html", "css", "javascript"],
    },
    {
        id: 4,
        next: 5,
        type: "game",
        title: "Tic Tac Toe",
        description: "Tic Tac Toe is a game built in React Native. It's my first project after completing the coding bootcamp. I always wanted to create a mobile app and this was a perfect opportunity. I used Expo to test it on my phone and Androis Studio to test it on an emulator. It was a great experience and I learned a lot. I am looking forward to build more mobile apps!",
        image: ttt,
        images: [ttt2, ttt1, ttt3, ttt4],
        gifs: [],
        mainFeatures: "React Native, Expo, JavaScript.",
        gitHub: "https://github.com/mspaprika/tic-tac-toe",
        live: "",
        lastUpdated: "",
        message: "",
        icons: ["react", "javascript"],
    },
    {
        id: 5,
        next: 1,
        type: "game",
        title: "Animal Saga",
        description: "My attempt to recreate one of my favourites games ( Candy Crush Soda ). It's not a fully game yet but has basic functionality. This project was rather a way to understand how it works than to create a fully working game. I might as well make it a full game one day, who knows :)",
        image: [animalImage],
        gifs: [animalSaga, animalSaga2],
        mainFeatures: "C++, PlayBuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Animal-Crush-Saga",
        live: "",
        lastUpdated: "18/12/2023",
        message: "",
        icons: ["cpp"],
    },

    /* {
        id: 5,
        next: 6,
        type: "game",
        title: "Animal Saga",
        description: "",
        image: ,
        images: [],
        gifs: [],
        mainFeatures: "",
        gitHub: "",
        live: "",
        lastUpdated: "",
        message: "",
        icons: ["react", "javascript"],
    },  */
]