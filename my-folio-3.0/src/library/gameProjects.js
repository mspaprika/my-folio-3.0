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

import HonseImage from "../data/screens/honseImg.png";
import honse from "../data/gifs/honse3.gif";
import honse2 from "../data/gifs/honse4.gif";


import UE from '../data/png/ue.png';
import Unity from '../data/png/unity.png';
import VS from '../data/png/vs.png';
import TC from '../data/png/tc.png';
import Git from '../data/png/ghub.png';
import P4 from '../data/png/p4.png';
import VsCode from '../data/png/vsCode.png';

export const pngs =  {
    "UE": UE,
    "Unity": Unity,
    "VS": VS,
    "TC": TC,
    "Git": Git,
    "P4": P4,
    "VsCode": VsCode
}

export const gameProjects = [
    {
        id: 1,
        next: 2,
        type: "game",
        title: "Snake Party",
        description: `Snake Party 🐍 originally began as a skills project but soon evolved into a Half-Time Game, featured during Wednesday Football Matches at their Sheffield Arena (Season '24-'25). It also serves as a spiritual extension of Snake Pass (2017), bringing back Noodle for a brand-new adventure alongside a new companion — Spageth!

        The core gameplay is inspired by the classic Snake game that many grew up playing in the early 2000s: 

        • Eat 
        • Grow  
        • Survive 
        
        However, Snake Party introduces a competitive twist—a second player and an attack/defend mode, where you can: 

        • Steal food from your opponent 
        • Shrink their snake 
        • Gain the upper hand!

        The game was developed by a talented team of apprentices at Sumo Digital Academy, using an in-house C++ framework. Snake movement is powered by a native physics engine, ensuring smooth and realistic wiggle.`,
        myCollab: `• Design particle systems and visual effects: food orbs, snake growth effects, bees, nature particles, and more 
        • Replicate visual style of Snake Pass as closely as possible, ensuring a similar feel and atmosphere
        • Analyze original UE4 Blueprint-based effects to recreate them in pure C++
        • Particles rendered using DirectX 11 billboarding
        • Perlin Noise for natural leaf movement
        • Fresnel shading for color and opacity of food orbs`,
        image: snekImage,
        gifs: [snek, snek2],
        mainFeatures: "3D, C++, Multiplayer(2), Visual Studio, Premake5, Perforce, Team City, Deffered Rendering, Procedural Mesh Generation, PostFX.",
        gitHub: "",
        live: "",
        lastUpdated: "08/2024",
        message: "Game is finished but there's no public release yet. GitHub repo is not available.",
        icons: ["cpp"],
        png: ["P4","TC", "VS"],
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
        description: `This is my first Unreal Engine game, currently in early development.
        
        At first glance, it’s a Cat Café—but not the cozy, relaxing kind you might expect. Instead, it's a horror game, where the main protagonist is a cat struggling to survive against evil mushrooms. The goal is to: 
        • Find, reclaim, and rebuild the café
        • Meet and tame friendly mushrooms
        • Survive evil shroom attacks and fight them back
        • Complete quests

        Other features:
        • World: Procedurally generated forest, created using a Wave Function Collapse algorithm
        • Both hostile and friendly mushroom AI are already in the game, although not fully evolved yet
        • Multiplayer 
        
        While core gameplay is still in development, my future plans include: 
        • Implementing a Quest Manager 
        • Designing the UI 
        • Introducing a Day/Night cycle`,
        image: cafeImage,
        gifs: [cafe, cafe2],
        mainFeatures: "Unreal Engine 5, Multiplayer, C++, Visual Studio, Wave Function Collapse, Procedural Generation, Cat.",
        gitHub: "https://github.com/mspaprika/CatCafe",
        live: "",
        lastUpdated: "04/2025",
        message: "Game is in active development and updated frequently.",
        icons: ["cpp"],
        png: ["UE", "VS", "Git"],
        scale: 1.3,
        emoji: `🐈‍`,
        inspiredPic: "Bendy",
        inspiredMsg: "My favourite horror franchise -->",
        inspiredLink: "https://www.joeydrewstudios.com/",
    },
    {
        id: 3,
        next: 4,
        type: "game",
        title: "Brightside",
        description: `This was my first attempt at creating a 3D game, developed as part of a skills project at Sumo Academy. Inspired by Darkside (Clockwork Pixels).
       
        • Navigate around a planet while dodging incoming meteors 
        • Launch missiles to destroy all asteroids 
        • Stay out of UFO's sight
        • Collect power-ups and unlock superpowers
        • Activate power blast for instant radial destruction
        • Control sound and music`,
        image: brightImage,
        gifs: [bright, bright2],
        mainFeatures: "3D, C++, Visual Studio, Premake5, Graphics.",
        gitHub: "https://github.com/mspaprika/Brightside",
        live: "",
        lastUpdated: "05/2024",
        message: "",
        icons: ["cpp"],
        png: ["VS", "Git"],
        scale: 1.3,
        emoji: `🪐`,
        inspiredPic: "Darkside",
        inspiredMsg: "Play original Darkside on Itch.io -->",
        inspiredLink: "https://clockworkpixels.itch.io/darkside",
    },
    {
        id: 4,
        next: 5,
        type: "game",
        title: "Pacman",
        description: `My recreation of a classic arcade game, built in Playbuffer with minimal coding expierence.

        • Tile-based system is the foundation for both Pacman's movement and the Ghost AI 
        • Ghost behavior designed as simple AI where each of the four Ghosts has a unique chase target
        • Ghosts can exist in four different states  
        • Pathfinding currently based on Manhattan Distance calculations
        • Pacman’s movement incorporates a light AI system for smoother navigation`,
        image: pacImage,
        gifs: [pacman, pacman2],
        mainFeatures: "C++, PlayBuffer, Visual Studio, Git.",
        gitHub: "https://github.com/mspaprika/Pac-Man-Paprika",
        live: "",
        lastUpdated: "01/2024",
        message: "Game is finished, but I plan on improving ghost AI movement algorithm.",
        icons: ["cpp"],
        png: ["VS", "Git"],
        scale: 1.3,
        emoji: `👻`,
        inspiredPic: "Pacman",
        inspiredMsg: "Qick Play Pacman Doodle from old Google archives -->",
        inspiredLink: "https://www.google.com/logos/2010/pacman10-i.html",
    },
    {
        id: 5,
        next: 6,
        type: "game",
        title: "Honse",
        description: `This game was created by Sumo Academy apprentices for Ludum Dare 55 (Theme == Summoning), marking my first experience with Unity—and with game engines in general. Due to my limited familiarity with the engine, my contribution was relatively small, but it was still an incredible learning opportunity. It's been a mreally fun couple of days of my life and I'm looking forward to more game jams!
        
        In HONSE:
        • Play as a boy trying to enjoy a new demon game
        • Your mum keeps summoning you to do chores 

        The challenge? 
        • Survive in HONSE without dying 
        • Manage household chores
        • Avoid making your mum angry 

        Balancing both tasks makes for a hilarious gameplay experience!`,
        image: [HonseImage],
        gifs: [honse, honse2],
        mainFeatures: "2D/3D, C#, Unity, Ludum Dare, Team Project",
        gitHub: "",
        live: " https://rickylee.itch.io/honse",
        lastUpdated: "03/2024",
        message: "",
        icons: ["cSharp"],
        png: ["Unity", "Git"],
        scale: 1.0,
        offset: 0,
        emoji: `🤖`,
        inspiredPic: "Honse",
        inspiredMsg: "Check me out at Ludum Dare --> ",
        inspiredLink: "https://ldjam.com/users/daspaprika/games",
    },
    {
        id: 6,
        next: 7,
        type: "game",
        title: "Sky High Spy",
        description: `I created this game during my game programming internship at Sumo Digital Academy with C++ and Playbuffer.
        
        Introduced several new mechanics, including:
        • Pink gem collectible that grants a special power shield
        • Rocket boost that the spyder can hop onto for extra speed
        • Sound and music controls`,
        image: spy,
        gifs: [spyGif, spyGif2],
        mainFeatures: "2D, C++, PlayBuffer, Visual Studio, Git.",
        gitHub: "https://github.com/mspaprika/Sky-High-Spyder",
        live: "",
        lastUpdated: "28/09/2023",
        message: "",
        icons: ["cpp"],
        png: ["VS", "Git"],
        scale: 1.0,
        emoji: `🕷️`,
        inspiredPic: "Spy",
        inspiredMsg: "Spyder is available only on Apple Arcade. But you can visit its homepage! -->",
        inspiredLink: "https://www.spyderthegame.com/",
    },
    {
        id: 7,
        next: 8,
        type: "game",
        title: "Cat & Fleas",
        description: `This was my second skills project during my internship at Sumo Digital. Main features include:

        • 2D platformer
        • Level editor 
        • Fleas are an ultimate enemy of a cat
        • Fleas sense the cat and immediately jump onto it
        • Cat can only endure a limited number of fleas before losing
        • Game inspired by a flea infestation at home with my own cat and classic NES title Nuts & Milk

        Fun Fact: 
        
        🐈 must eat 🍏 to pass the level
        when cat eats 🍏 it does 💩
            💩 atracts a 🦟
            🦟 restores a life!`,
        image: cat,
        gifs: [catGif, catGif2],
        mainFeatures: "2D, Platformer, C++, PlayBuffer, Visual Studio, Cat.",
        gitHub: "https://github.com/mspaprika/Bouncy-Game/tree/main/Tutorial%2003%20Solution/Tutorial03-A",
        live: "",
        lastUpdated: "19/12/2023",
        message: "I have BIG plans for improving this game 🐈",
        icons: ["cpp"],
        png: ["VS", "Git"],
        scale: 1.0,
        emoji: `🐈`,
        inspiredPic: "NutsMilk",
        inspiredMsg: "Find out more about Nuts & Milk -->",
        inspiredLink: "https://en.wikipedia.org/wiki/Nuts_%26_Milk",
    },
    {
        id: 8,
        next: 1,
        type: "game",
        title: "Gonquered",
        description: `This was my first solo skills project at Sumo Academy, built using the Playbuffer framework. 

        • Rendered in isometric view, utilizing an orthogonal projection matrix
        • Game inspired by Mushrooms Wars (2009), with the goal of recreating the core mechanics and gameplay from the original
        • Includes a full game loop and supports Xbox Controller

        Alongside the recreated mechanics, I introduced some cool features:
        • Ghost animations after the Gonks die in battle 
        • Gonks splitting in half when struck by missile`,
        image: [gonkImage],
        gifs: [gonk, gonk2],
        mainFeatures: "2D, C++, PlayBuffer, Visual Studio, Isometric World.",
        gitHub: "https://github.com/mspaprika/Gonquered",
        live: "",
        lastUpdated: "04/2024",
        message: "",
        icons: ["cpp"],
        png: ["VS", "Git"],
        scale: 1.0,
        offset: 0,
        emoji: `🧙`,
        inspiredPic: "MushroomWar",
        inspiredMsg: "Mushroom Wars home page -->",
        inspiredLink: "https://mushroomwars2.com/",
    },
    {
        id: 9,
        next: 10,
        type: "game",
        title: "Escape Nuclear Mine",
        description: `This project is by far my favorite. I had so much fun creating it! Sometimes life can be tough, and we all need a little silly laugh to lighten the mood.

        • Simple text-based adventure, where you enter commands 
        • Progress through a mysterious cave system filled with strange creatures 
        • Upon entering START, you find yourself in a series of caves, each with a new question to answer
        • You have only three attempts to get each question right before facing a consequence
        • Silly questions + mysterious creatures + limited attempts == fun experience`,
        image: cave,
        images: [cave2, cave3, cave4, cave5],
        gifs: [],
        mainFeatures: "HTML, CSS, JavaScript, Bootstrap, OOP.",
        gitHub: "https://github.com/mspaprika/Text-Game",
        live: "https://mspaprika.github.io/Text-Game/",
        lastUpdated: "",
        message: "Game is NOT mobile compatible yet (working on it...).",
        icons: ["html", "css", "javascript"],
        png: ["VsCode", "Git"],
        emoji: `☢️`,
    },
    {
        id: 10,
        next: 9,
        type: "game",
        title: "Tic Tac Toe",
        description: `• Built with React Native
        • Tested with Expo
        • Emulated in Android Studio
        • React Hooks used for state managements`,
        image: ttt,
        images: [ttt2, ttt1, ttt3, ttt4],
        gifs: [],
        mainFeatures: "React Native, Expo, JavaScript.",
        gitHub: "https://github.com/mspaprika/tic-tac-toe",
        live: "",
        lastUpdated: "",
        message: "",
        icons: ["react", "javascript"],
        png: ["VsCode", "Git"],
        emoji: `🐾`,
    },
]