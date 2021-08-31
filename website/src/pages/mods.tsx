import React from 'react';
import { Props as ModProps } from '../components/ShowcaseItem';

const list: ModProps[] = [
  {
    banner: "https://github.com/Abbysssal/RogueLibs/blob/main/img/RogueLibs.png?raw=true",
    title: "RogueLibs",
    description: "A really important library that is required for almost all mods. A must-have.",
    buttons: [
      {type:"github", link:"https://github.com/Abbysssal/RogueLibs"},
      {type:"website", link:"https://abbysssal.github.io/RogueLibs"},
      {type:"direct", link:"https://github.com/Abbysssal/RogueLibs/releases/latest"},
      {type:"gamebanana", link:"https://gamebanana.com/mods/54650"},
      {type:"moddb", link:"https://www.moddb.com/mods/roguelibs-v211"},
    ],
    tags: ["library"],
  },
  {
    title: "RogueLibs Test Module",
    description: (
      <span>
        {"Adds 3 abilities, 9 items, 2 traits and 1 effect."}
        <br/>
        {"For testing purposes."}
      </span>
    ),
    buttons: [
      {type:"github", link:"https://github.com/Abbysssal/SpritePackLoader"},
      {type:"direct", link:"https://github.com/Abbysssal/SpritePackLoader/releases/download/v0.3.0/SpritePackLoader.dll"},
    ],
    tags: ["mod", "items", "abilities", "traits", "effects"],
  },
  {
    banner: "https://github.com/zTBBz/TBB/blob/main/images/Logo.png?raw=true",
    title: "Traveler's Bag Build",
    description: (
      <span>
        {"Adds a lot of items and traits that greatly complement Streets of Rogue's sometimes boring gameplay. With cool sound effects."}
        <br/>
        {"Successor of "}
        <a href="https://github.com/Abbysssal/aToI">aToI</a>
        {", "}
        <a href="https://github.com/zTBBz/SMaD">SMaD</a>
        {" and "}
        <a href="https://github.com/zTBBz/MTP">MTP</a>
        {"."}
      </span>
    ),
    buttons: [
      {type:"github", link:"https://github.com/zTBBz/TBB"},
      {type:"website", link:"https://zTBBz.github.io/TBB"},
      {type:"direct", link:"https://github.com/zTBBz/TBB/releases/download/0.0.1/TBB.dll"},
    ],
    tags: ["mod", "items", "traits", "sounds"],
  },
  {
    title: "SpritePackLoader",
    description: "Allows you to create and load custom spritepacks to replace vanilla textures.",
    buttons: [
      {type:"github", link:"https://github.com/Abbysssal/SpritePackLoader"},
      {type:"direct", link:"https://github.com/Abbysssal/SpritePackLoader/releases/download/v0.3.0/SpritePackLoader.dll"},
    ],
    tags: ["mod", "spritepack", "sprites", "ui"],
  },
  {
    banner: "https://cdn.discordapp.com/attachments/766890919768621058/852479372656640000/SRP.png",
    title: "Sidi's Resprite Project",
    description: "Replaces vanilla sprites (so far only item sprites) with more bulky and prettier ones.",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/766890919768621058/852479368776384522/Sidis_resprite_project.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
  {
    title: "Sprites of Bune",
    description: "Replaces only four sprites. Scary guns!",
    buttons: [
      {type:"direct", link:"https://cdn.discordapp.com/attachments/453259227797127188/876516669814616104/SpritesOfBune.spritepack"},
    ],
    tags: ["spritepack", "items", "sprites"],
  },
];

const listV2: ModProps[] = [

];

export default list;
export const old = listV2;
