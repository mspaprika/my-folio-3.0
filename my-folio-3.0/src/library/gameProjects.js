/*
1. Sky High Spyder
2. Bouncy Game
3. Escape Nuclear Mine
4. Tic Tac Toe
5. X (in progress)

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
import cat from "../data/screens/cat_game.png";
import spyGif from "../data/gifs/spyder3.gif";
import spyGif2 from "../data/gifs/spyder4.gif";
import catGif from "../data/gifs/cat1.gif";

export const gameProjects = [
    {
        id: 1,
        next: 2,
        type: "game",
        title: "Sky High Spyder",
        description: "I created this game as part of internship at Sumo Digital. It's my very own version of Sky High Spy game! Built using C++ and playbuffer.",
        image: spy,
        gifs: [spyGif, spyGif2],
        mainFeatures: "C++, playbuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Sky-High-Spyder",
        live: "",
        lastUpdated: "15/09/2023",
        message: "I continue to fix bugs and add new features.",
    },
    {
        id: 2,
        next: 1,
        type: "game",
        title: "Cat and Fleas",
        description: "My very first platform game created using playbuffer and C++. More info soon! ",
        image: cat,
        gifs: [catGif],
        mainFeatures: "C++, playbuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Bouncy-Game/tree/main/Tutorial%2003%20Solution/Tutorial03-A",
        live: "",
        lastUpdated: "",
        message: "",
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Escape Nuclear Mine",
        description: "This project is my favourite. You have no Idea how much fun I had while creating it! Sometimes life is harsh and we need some good silly laugh. This is a text game which works when you enter a right command. After entering START you'll find yourself in a cave system with lots of strange creatures. In each cave you'll be prompted to answer a question. And there's only 3 tries to get it right.",
        image: cave,
        images: [cave2, cave3, cave4, cave5],
        gifs: [],
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        gitHub: "https://github.com/mspaprika/Text-Game",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
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
    },
    /* {
        id: 5,
        title: "X",
        description: "",
        image: "",
        mainFeatures: "",
        gitHub: "",
        live: "",
        lastUpdated: "",
        message: "",
    }, */
]