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
        description: `Snake Party 🐍 originally started as a skills project, but later was upgraded to a Half Time Game during Wednesday Football Matches at Sheffield arena (season '24 -'25). It's also an extension of Snake Pass (released in 2017), which means Noodle got into new endevour alongside new friend Spagett. 

        Main idea of the game is based on OG Snake Game that everyone played in early 2000: eat food and grow the snake. Except here you have a competition aspect - second player and attack/defend mode, when you can steal the food from opponent and make it shrink!  

        Game was built with a great team made of apprentices at Sumo Academy, using in-house C++ framework. Snake movement is controlled by native physics engine.`,
        myCollab: `Particle system and effects: Food orbs, snake grow effect, bees, nature particles and others. The main focus was on the replication of Snake Pass effects as much as possible, to have the same feel and atmosphere. To achieve this I analyzed effects made with blueprints in UE4 and converted them into pure C++.
        
        Particles rendered with DX11 using billboarding. Other techniques include: Perlin Noise for leaves movement; Fresnel for food orbs' colour and opacity.`,
        image: snekImage,
        gifs: [snek, snek2],
        mainFeatures: "3D, C++, Visual Studio, Premake5, Deffered Rendering, Procedural Mesh Generation, PostFX.",
        gitHub: "",
        live: "",
        lastUpdated: "08/2024",
        message: "Game is finished and released to the public. GitHub repo is not available.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
        offset: "60vw",
        emoji: `🐍`,
    },
    {
        id: 2,
        next: 3,
        type: "game",
        title: "Cat Cafe",
        description: `My first game on Unreal Engine and is still in its early stage of development. I struggle to find enough time recently to work on it, but it's very high on my list.
        
        Main idea: Cat Cafe, but a bit different from what you would imagine. It's a horror game where cat is the main protagonist and is threatened by evil shrooms. Cat needs to find, reclaim and rebuild the Cafe with the help and support of nice mushrooms. 
        
        There are already both types of mushrooms in the game with the basic AI. Main area is confined within a forest, generated using WFC algorithm. It spawns trees, flowers and bushes alongside spider-paths. 
        
        There is no gameplay yet, but I'm working on it. Next steps will include the implementation of a Quest Manager, UI and Day/Night cycle. I started this project as a Blueprint-Only, but later incorporated C++ as well. Final goal - balanced game with both C++ and Blueprints, as both are useful.`,
        image: cafeImage,
        gifs: [cafe, cafe2],
        mainFeatures: "Unreal Engine 5, C++, Visual Studio, Wave Function Collapse, Procedural Generation, Cat.",
        gitHub: "",
        live: "",
        lastUpdated: "03/2025",
        message: "Game is in active development. GitHub repo will be available soon.",
        icons: ["cpp"],
        png: ["UE"],
        scale: 1.3,
        emoji: `🐈‍⬛`,
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Brightside",
        description: `My first attempt to create a game in 3D space and was build as part of a skills project at Sumo Academy. I worked alone on this one and unleashed all creativity within. 
        
        Idea came from another game - 'Darkside' by Clockwork Pixels. It's planet-based game with orbital dynamics, where player navigates around the planet and must avoid meteors or shoot missiles to destroy them. 
        
        In as span of 3 weeks I managed to build a simple, but fully playable game with levels, sound controls and power-ups. It doesn't have real UI elements as I ran out of time, so it's simply displaying information in debug text format. 
        
        The coolest thing in my opinion is UFO enemy ship, that is emitting light based on perception of player. If player is invisible, light is white, But if player is detected, it becomes red and UFO goes into attack mode. I used sounds to emphasize this change and randomly activated missiles to add more tension. I also added some cool particle and camera shake effects for juicy juice. `,
        image: brightImage,
        gifs: [bright, bright2],
        mainFeatures: "3D, C++, Visual Studio, Premake5, Graphics.",
        gitHub: "",
        live: "",
        lastUpdated: "05/2024",
        message: "Game is finished and GitHub repo will be available soon.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
        emoji: `🪐`,
    },
    {
        id: 4,
        next: 5,
        type: "game",
        title: "Pacman",
        description: `My recreation of Pacman game in Playbuffer framework. It was made before I seriously started learning game development, so it might look silly with all the code sitting in single file. But nevertheless I am really happy about this game and how it works. 
        
        Game is implemented using tile system, which laid foundation for Ghost and Pacman movement. For Ghosts I created a simple AI, where all four ghosts have different chase targets and can be in four different states. Ghost paths are computed by Manhattan Distance only at the moment.

        Pacman also uses little AI for movement, even though it's controlled by a player - this way movement is much smoother.`,
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
        emoji: `👻`,
    },
    {
        id: 5,
        next: 6,
        type: "game",
        title: "Sky High Spy",
        description: `I created this game as part of game programming internship at Sumo Digital Academy. It's my very own version of Sky High Spy game! Built using C++ and Playbuffer, with very little knowledge.
        
        Not only I recreated the original, but also added some specialties: a pink gem collctable, that gives a special power shield and a rocket that spyder can hop onto and speed up. There's also sound and music controls, score UI and infinite amount of levels.`,
        image: spy,
        gifs: [spyGif, spyGif2],
        mainFeatures: "2D, C++, PlayBuffer, Visual Studio.",
        gitHub: "https://github.com/mspaprika/Sky-High-Spyder",
        live: "",
        lastUpdated: "28/09/2023",
        message: "",
        icons: ["cpp"],
        png: [""],
        scale: 1.0,
        emoji: `🕷️`,
    },
    {
        id: 6,
        next: 7,
        type: "game",
        title: "Cat & Fleas",
        description: `My second skills project during an internship at Sumo Digital. It uses the level editor for easier design, but needs improvements in resolving collisions.
        
        Main idea - 2D Platformer and I picked my favourite character: a Cat. I was going through some hardship with my own cat and flea infestation at home by the time of creation, and that's where I picked up a flea theme - they're in fact are the biggest enemies of cats. In this game they sense the cat and jumps on it straight away, but unlike in real life the cat can survive just limited amount of fleas. 
        
        Inspiration came from old NES game called Nuts & Milk that I used to play as a child. My main takeway is ladders - a way to climb the platforms, but this feature was hardest to implement and doesn't work perfectly yet. Milk & Nuts also featured a helicopter levels, where this little heli would fly in sinewaves and act as a hazard. I used flies instead, and made them the good guys. If cat catches one, it restores a life! 
        
        Fun Fact: 🐈 must eat 🍏 to pass the level; 
                when cat eats 🍏 it does 💩; 
                💩 atracts a 🪰!`,
        image: cat,
        gifs: [catGif, catGif2],
        mainFeatures: "2D, Platformer, C++, PlayBuffer, Visual Studio, Cat.",
        gitHub: "https://github.com/mspaprika/Bouncy-Game/tree/main/Tutorial%2003%20Solution/Tutorial03-A",
        live: "",
        lastUpdated: "19/12/2023",
        message: "I have BIG plans for improving this game 🐈",
        icons: ["cpp"],
        png: [""],
        scale: 1.0,
        emoji: `🐈`,
    },
    {
        id: 7,
        next: 1,
        type: "game",
        title: "Gonquered",
        description: `My first solo skills project at Sumo Academy, built using Playbuffer framework. Game is rendered in Isometric view, using orthogonal projection matrix. 
        
        Main idea came from another similar game called Mushrooms Wars (released in 2009). We had to recreate same mechanics and gameplay as in the original and I got it pretty close. 
        
        I also added some cool features of my own: a ghost animation after gonks die in the battle and gonks splitting in half when they're hit by missile. Game has a full game loop and supports XBox Controller. `,
        image: [gonkImage],
        gifs: [gonk, gonk2],
        mainFeatures: "2D, C++, PlayBuffer, Visual Studio, Isometric World.",
        gitHub: "",
        live: "",
        lastUpdated: "04/2024",
        message: "GitHub repo will be awailable soon.",
        icons: ["cpp"],
        png: [""],
        scale: 1.0,
        offset: 0,
        emoji: `🧙`,
    },
    {
        id: 8,
        next: 9,
        type: "game",
        title: "Escape Nuclear Mine",
        description: `This project is my favourite. I had so much fun while creating it! Sometimes life is harsh and we need some good silly laugh. 
        
        Main idea: a simple text game which works when you enter a right command. After entering START you'll find yourself in a cave system with lots of strange creatures. In each cave you'll be prompted to answer a question. And there's only 3 tries to get it right.`,
        image: cave,
        images: [cave2, cave3, cave4, cave5],
        gifs: [],
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        gitHub: "https://github.com/mspaprika/Text-Game",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
        icons: ["html", "css", "javascript"],
        emoji: `☢️`,
    },
    {
        id: 9,
        next: 8,
        type: "game",
        title: "Tic Tac Toe",
        description: `Tic Tac Toe is a game built in React Native. It's my first project after completing the full-stack web bootcamp, just after I fell in love with game development. 
        
        I always wanted to create a mobile app and this was a perfect opportunity. I used Expo to test it on my phone and Androis Studio to test it on an emulator. Interactions in the game state are handled by UseEffect and UseState hooks.
        
        It's a small game, but nevertheless creating it was a great experience and I learned a lot. I am looking forward to build more mobile apps!`,
        image: ttt,
        images: [ttt2, ttt1, ttt3, ttt4],
        gifs: [],
        mainFeatures: "React Native, Expo, JavaScript.",
        gitHub: "https://github.com/mspaprika/tic-tac-toe",
        live: "",
        lastUpdated: "",
        message: "",
        icons: ["react", "javascript"],
        emoji: `🐾`,
    },
]