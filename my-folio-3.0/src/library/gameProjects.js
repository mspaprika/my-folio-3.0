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
        description: `Snake Party 🐍 originally began as a skills project but soon evolved into a Half-Time Game featured during Wednesday Football Matches at Sheffield Arena (Season '24-'25). It also serves as a spiritual extension of Snake Pass (2017), bringing back Noodle for a brand-new adventure alongside a new companion—Spageth.

        The core gameplay is inspired by the classic Snake game that many grew up playing in the early 2000s: eat food, grow longer, and survive. However, Snake Party introduces a competitive twist—a second player and an attack/defend mode, where you can steal food from your opponent to shrink their snake and gain the upper hand!

        The game was developed by a talented team of apprentices at Sumo Digital Academy, using an in-house C++ framework. Snake movement is powered by a native physics engine, ensuring smooth and realistic wiggle.`,
        myCollab: `I was responsible for designing and implementing particle systems and visual effects, including food orbs, snake growth effects, bees, nature particles, and more. The primary goal was to replicate the visual style of Snake Pass as closely as possible, ensuring a consistent feel and atmosphere. To achieve this, I analyzed the original UE4 Blueprint-based effects and meticulously recreated them in pure C++.
        
        The particles were rendered using DirectX 11 billboarding, with additional techniques such as: Perlin Noise for natural leaf movement; Fresnel shading for color and opacity of food orbs.`,
        image: snekImage,
        gifs: [snek, snek2],
        mainFeatures: "3D, C++, Visual Studio, Premake5, Deffered Rendering, Procedural Mesh Generation, PostFX.",
        gitHub: "",
        live: "",
        lastUpdated: "08/2024",
        message: "Game is finished but there's no public release yet. GitHub repo is not available.",
        icons: ["cpp"],
        png: [""],
        scale: 1.3,
        offset: "60vw",
        emoji: `🐍`,
        inspiredPic: "SnakePass",
        inspiredMsg: "Snake Pass is available on Steam and other platforms -->",
        inspiredLink: "https://store.steampowered.com/app/544330/Snake_Pass/",
    },
    {
        id: 2,
        next: 3,
        type: "game",
        title: "Cat Cafe",
        description: `This is my first Unreal Engine game, currently in early development. Finding time to work on it has been challenging, but it's a project I'm deeply passionate about and high on my priority list.
        
        At first glance, it’s a Cat Café—but not the cozy, relaxing kind you might expect. Instead, it's a horror game, where the main protagonist is a cat struggling to survive against evil mushrooms. The goal is to find, reclaim, and rebuild the café with the help of friendly mushrooms, restoring a safe haven amidst the danger.
        
        The game world is set within a procedurally generated forest, created using a Wave Function Collapse (WFC) algorithm. This system dynamically spawns trees, flowers, bushes, and intricate spider-webbed paths, shaping the eerie atmosphere. Both hostile and friendly mushroom AI are already in the game, although not fully evolved yet.
        
        While core gameplay is still in development, my next steps include: Implementing a Quest Manager for structured progression; Designing the UI to enhance player interaction; Introducing a Day/Night cycle to deepen the atmosphere.

        The project initially started as Blueprint-only, but as development progressed, I began integrating C++ for better performance and flexibility. My goal is to strike a balance between C++ and Blueprints, leveraging the strengths of both for an optimized and scalable game.`,
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
        inspiredPic: "Bendy",
        inspiredMsg: "My favourite horror franchise - Bendy and the Ink Machine -->",
        inspiredLink: "https://store.steampowered.com/bundle/37767/Bendy_Studio_Collection/",
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Brightside",
        description: `This was my first attempt at creating a 3D game, developed as part of a skills project at Sumo Academy. I worked on this one entirely solo, and fully unleashed my creativity. Inspired by Darkside by Clockwork Pixels, the game is planet-based with orbital dynamics, where the player navigates around a planet while dodging incoming meteors or launching missiles to destroy them.

        Over the course of just three weeks, I managed to build a simple yet fully playable game featuring multiple levels, sound controls and various power-ups. Since time was limited, the game lacks a traditional UI, relying instead on debug text for displaying information.

        One of the most exciting mechanics is the UFO enemy ship, which reacts dynamically to player's visibility: if the player is hidden, the UFO’s light remains white; if the player is detected, the light shifts to red, triggering attack mode. To emphasize this shift, I integrated audio cues, randomly activated missile launches, as well as particle effects and camera shakes, adding to the tension and thrill.`,
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
        inspiredPic: "Darkside",
        inspiredMsg: "Check out original Darkside on Itch.io -->",
        inspiredLink: "https://clockworkpixels.itch.io/darkside",
    },
    {
        id: 4,
        next: 5,
        type: "game",
        title: "Pacman",
        description: `This was my attempt at recreating a classic arcade game, built in the Playbuffer framework before I formally began learning game development. While the entire game code resides in a single file—a reflection of my early coding style—I’m still proud of how it turned out.

        The game is implemented using a tile-based system, which serves as the foundation for both Pacman's movement and the Ghost AI. For Ghost behavior, I designed a simple AI where each of the four Ghosts has a unique chase target. Ghosts can exist in four different states and their pathfinding is currently based on Manhattan Distance calculations.

        Even Pacman’s movement incorporates a light AI system to ensure smoother navigation, despite being player-controlled. This small addition greatly improves movement feel and responsiveness.`,
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
        inspiredPic: "Pacman",
        inspiredMsg: "Original Pacman live page -->",
        inspiredLink: "https://pacman.live/",
    },
    {
        id: 5,
        next: 6,
        type: "game",
        title: "Sky High Spy",
        description: `I created this game during my game programming internship at Sumo Digital Academy, building it in C++ with the Playbuffer framework—all while having very little prior experience. Despite that, I successfully recreated the original Sky High Spy while also adding my own unique twists!

        I introduced several new mechanics, including a pink gem collectible that grants a special power shield; a rocket boost that the spyder can hop onto for extra speed; also sound and music controls. This project was an invaluable learning experience, allowing me to apply C++ fundamentals while experimenting with game mechanics, UI, and dynamic player interactions.`,
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
        inspiredPic: "Spy",
        inspiredMsg: "Spyder is available only on Apple Arcade. But you can visit its homepage! -->",
        inspiredLink: "https://www.spyderthegame.com/",
    },
    {
        id: 6,
        next: 7,
        type: "game",
        title: "Cat & Fleas",
        description: `This was my second skills project during my internship at Sumo Digital. It features a level editor for easier design, though collision resolution still needs improvement.
        
        At its core, this is a 2D platformer starring my favorite character—a Cat. The idea stemmed from a real-life struggle: at the time of development, I was dealing with a flea infestation at home with my own cat. This inspired the game’s main conflict—fleas as the cat’s greatest enemy. Fleas sense the cat and immediately jump onto it, but unlike real life, the cat can only endure a limited number of fleas before losing.

        The game draws inspiration from the classic NES title Nuts & Milk, which I played as a child. My main takeaway from that game was the ladder mechanic, allowing the player to climb between platforms. Implementing ladders turned out to be the hardest challenge, and they still need some improvements.

        In Nuts & Milk, there were helicopter hazard levels, where small helicopters moved in sinewave patterns to challenge the player. I adapted this mechanic by replacing helicopters with flies, but instead of being enemies, they serve as allies—catching a fly restores a life! 
        
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
        inspiredPic: "NutsMilk",
        inspiredMsg: "Nuts & Milk (NES) -->",
        inspiredLink: "https://www.retrogames.cz/play_086-NES.php",
    },
    {
        id: 7,
        next: 1,
        type: "game",
        title: "Gonquered",
        description: `This was my first solo skills project at Sumo Academy, built using the Playbuffer framework. The game is rendered in isometric view, utilizing an orthogonal projection matrix for visual perspective. The idea for the game was inspired by Mushrooms Wars (2009), with the goal of recreating the core mechanics and gameplay from the original. I think I got it pretty close to the original experience, capturing the same strategic, real-time combat.

        Alongside the recreated mechanics, I introduced some cool, original features, like ghost animations after the Gonks die in battle and gonks splitting in half when struck by missile. The game includes a full game loop and supports Xbox Controller. `,
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
        inspiredPic: "MushroomWar",
        inspiredMsg: "Mushroom Wars home page -->",
        inspiredLink: "https://mushroomwars2.com/",
    },
    {
        id: 8,
        next: 9,
        type: "game",
        title: "Escape Nuclear Mine",
        description: `This project is by far my favorite. I had so much fun creating it! Sometimes life can be tough, and we all need a little silly laugh to lighten the mood.

        The game is a simple text-based adventure, where you enter commands to progress through a mysterious cave system filled with strange creatures. 
        * Upon entering START, you find yourself in a series of caves, each with a new question to answer.
        * You have only three attempts to get each question right before facing a consequence.

        The combination of silly questions, mysterious creatures, and limited attempts makes for a fun experience, perfect for those moments when you just need a laugh!`,
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
        description: `Tic Tac Toe is a game built in React Native, marking my first project after completing the full-stack web bootcamp—and just after I fell in love with game development.

        I’ve always wanted to create a mobile app, and this project provided the perfect opportunity. Using Expo, I tested the app directly on my phone, and with Android Studio, I ran it on an emulator. The game’s state management is handled using React hooks—UseEffect and UseState.

        While it’s a simple game, creating it was a fantastic learning experience, and I gained valuable insights into mobile development. I’m excited to continue building more mobile apps in the future!`,
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