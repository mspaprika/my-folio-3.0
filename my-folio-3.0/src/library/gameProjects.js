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

import pacImage from "../data/screens/pac.png";
import pacman from "../data/gifs/pacman.gif";
import pacman2 from "../data/gifs/pacman2.gif";

import cafeImage from "../data/screens/cat&shroomsm.png";
import cafe from "../data/gifs/saveTheCat.gif";
import cafe2 from "../data/gifs/catshroom.gif";

import brightImage from "../data/screens/bright.png";
import bright from "../data/gifs/brightsidePlay.gif";
import bright2 from "../data/gifs/brightsidePlay2.gif";

import snekImage from "../data/screens/snake.png";
import snek from "../data/gifs/snakeParty.gif";
import snek2 from "../data/gifs/snakeParty2.gif";

import gonkImage from "../data/screens/gonk.png";
import gonk from "../data/gifs/gonkMissile.gif";
import gonk2 from "../data/gifs/gonkDie.gif";


export const gameProjects = [
    {
        id: 1,
        next: 2,
        type: "game",
        title: "Snake Party",
        description: "Originally started as a skills project, but later was upgraded to a Half Time Game during Wednesday Football Matches at Sheffield arena (season '24 -'25). Snake Party is an extension to the Snake Pass (released in 2017) and uses it's assets. Build with a great team of apprentices in Sumo Academy. Main idea of the game is based on OG Snake Game that everyone played in early 2000: eat food and grow the snake. Except here you have a competition aspect - second player and attack/defend mode, when you can steal the food from opponent and make it shrink! Game is implemented using in-house C++ framework and snake movement is controlled by physics engine.",
        myCollab: "Particle system and effects: Food orbs, snake grow effect, bees, nature particles and more. Particles rendered with DX11 using billboarding, other techniques include: Perlin Noise for leaves movement; Fresnel for food orbs.",
        image: snekImage,
        gifs: [snek, snek2],
        mainFeatures: "C++, Visual Studio.",
        gitHub: "",
        live: "",
        lastUpdated: "08/2024",
        message: "Game is finished and released to the public. GitHub repo is not available.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
    },
    {
        id: 2,
        next: 3,
        type: "game",
        title: "Cat Cafe",
        description: "My first game on Unreal Engine and is still in its early stage of development. Main idea is a cat cafe, but a bit different than you would imagine. It's a horror game where cat is main protagonist and is threatened by evil shrooms. cat needs to find, reclaim and rebuild cafe with the help of nice mushrooms. There are already both types of mushrooms in the game with basic AI. The area of the game will be the a forest - generated using WFC algorithm. It spawns trees, flowers and bushes alongside spider-paths. There is no gameplay yet, but I'm working on it - next step is implementing quest system, probably by utilizing GAS system. I started this project as a Blueprint-Only, but later incorporated some C++ as well. I am planning it to be 50/50 (Blueprint/C++) in the end.",
        image: cafeImage,
        gifs: [cafe, cafe2],
        mainFeatures: "Unreal Engine 5, C++, Visual Studio.",
        gitHub: "",
        live: "",
        lastUpdated: "03/2025",
        message: "Game is in active development. GitHub repo will be available soon.",
        icons: ["cpp"],
        png: ["UE"],
        scale: 1.3,
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Brightside",
        description: "My first project in 3D space and was build as part of a skills project in Sumo Academy. I worked alone on this one and unleashed all creativity within. Idea came from another game ('Darkside' by Clockwork Pixels) - a planet-based game with orbital dynamics. In as span of 3 weeks I managed to build a simple, but fully playable game with levels, sound controls and power-ups. It doesn't have UI elements as I ran out of time - but I might add it later. The coolest thing in my opinion is UFO enemy ship, that is emitting light based on perception of player. If player is invisible, light is white, But if player is detected, it becomes red and UFO goes into attack mode. I also added some cool particle and camera shake effects to add some juice. ",
        image: brightImage,
        gifs: [bright, bright2],
        mainFeatures: "C++, Visual Studio.",
        gitHub: "",
        live: "",
        lastUpdated: "05/2024",
        message: "Game is finished and GitHub repo will be available soon.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
    },
    {
        id: 4,
        next: 5,
        type: "game",
        title: "Pacman",
        description: "My recreation of Pacman game in Playbuffer. Ghost behavior is controlled by my first ever AI and movement is based on tile system.",
        image: pacImage,
        gifs: [pacman, pacman2],
        mainFeatures: "C++, PlayBuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Pac-Man-Paprika",
        live: "",
        lastUpdated: "01/2024",
        message: "Game is finished, but I plan on improving ghost AI movement algorithm soon.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
    },
    {
        id: 5,
        next: 6,
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
        png: [""],
        scale: 1.0,
    },
    {
        id: 6,
        next: 7,
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
        png: [""],
        scale: 1.0,
    },
    {
        id: 7,
        next: 1,
        type: "game",
        title: "Gonquered",
        description: "My first solo skills project, built using Playbuffer framework. Game is rendered in Isometric view, using orthogonal projection matrix. If it looks familiar - that's because  it's based on Mushrooms Wars (released in 2009).",
        image: [gonkImage],
        gifs: [gonk, gonk2],
        mainFeatures: "C++, PlayBuffer, Visual Studio.",
        gitHub: "",
        live: "",
        lastUpdated: "04/2024",
        message: "GitHub repo will be awailable soon.",
        icons: ["cpp"],
        png: [""],
        scale: 1.0,
    },
    {
        id: 8,
        next: 9,
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
        id: 9,
        next: 8,
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
]