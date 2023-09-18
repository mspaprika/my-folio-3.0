/*
1. Sky High Spyder
2. Bouncy Game
3. Escape Nuclear Mine
4. Tic Tac Toe
5. X (in progress)

*/


import cave from "../data/screens/cave2.png";
import ttt from "../data/screens/ttt1.png";
import spy from "../data/screens/spy.png";
import bounce from "../data/screens/bounce11.png";
import spyGif from "../data/gifs/spy.gif";
import bounceGif from "../data/gifs/bounce.gif";

export const gameProjects = [
    {
        id: 1,
        title: "Sky High Spyder",
        description: "I created this game as part of internship at Sumo Digital. It's my very own version of Sky High Spy game! Built using C++ and playbuffer.",
        image: spy,
        gif: spyGif,
        mainFeatures: "C++, playbuffer.",
        gitHub: "https://github.com/mspaprika/Sky-High-Spyder",
        live: "",
        lastUpdated: "15/09/2023",
        message: "I continue to fix bugs and add new features.",
    },
    {
        id: 2,
        title: "Bouncy Game",
        description: "My very first game created using playbuffer and C++. Just bounce a ball and collect the coins. ",
        image: bounce,
        gif: bounceGif,
        mainFeatures: "",
        gitHub: "https://github.com/mspaprika/Bouncy-Game/tree/main/Tutorial%2003%20Solution/Tutorial03-A",
        live: "",
        lastUpdated: "10/09/2023",
        message: "Still having bugs with collisisons.",
    },
    {
        id: 3,
        title: "Escape Nuclear Mine",
        description: "This project is my favourite. You have no Idea how much fun I had while creating it! Sometimes life is harsh and we need some good silly laugh. This is a text game which works when you enter a right command. After entering START you'll find yourself in a cave system with lots of strange creatures. In each cave you'll be prompted to answer a question. And there's only 3 tries to get it right.",
        image: cave,
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        gitHub: "https://github.com/mspaprika/Text-Game",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
    },
    {
        id: 4,
        title: "Tic Tac toe",
        description: "Tic Tac Toe is a game built in React Native. It's my first project after completing the coding bootcamp. I always wanted to create a mobile app and this was a perfect opportunity. I used Expo to test it on my phone and Androis Studio to test it on an emulator. It was a great experience and I learned a lot. I am looking forward to build more mobile apps!",
        image: ttt,
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