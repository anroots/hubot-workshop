# Botshop 2.0 - Build your own chat bot

## Workshop description

Ever wanted to build a chatbot? A robot, that would listen to conversations and be able to respond to keywords and commands?

With Hubot, building a robot is easy - all you need to do is script it's behavior through simple JavaScript.

- Want a sarcastic response when someone uses fancy business words?
- Want to trigger deploys with ChatOps commands in team chat?
- Want to have a bot respond to common questions, such as how to change AD password?
- Want a SecurityBot, that would automatically poke people who issued sensitive commands in productions?

All of this and more is possible. We will introduce Hubot, a simple framework for building Fleep and Hipchat chatbots. Participants will have roughly 90 minutes to build their robot and teach it to do their bidding. You can participate alone, but a team of two to three people with pre-existing idea for a bot is recommended.

### Equipment, software

- Participants with own laptop
- Wall screen or projector for instructor screen-sharing (HDMI)

### Software

- Linux or Mac development environment in laptops. NPM installed, Node 6+ installed
- Basic JavaScript programming skills from at least one person in the group - language in use will be JS
- IDE / code editor
- Want to verify your environment beforehand? Try to get https://github.com/hubotio/hubot running locally with a shell adapter.

### Target audience

Engineers who write code for the bot will be the main target for this botshop. But there is more in building a good bot than writing Javascript! A good bot has well thought out UX, so interaction designers will find work here. The best bots also communicate concisely and have personality, so copywriters are needed to write funny, engaging, succinct and snarky responses. And of course, an effective bot will also solve some kind of business need, which can only come from an (internal) customer ("Bot Owner").

## Getting started

You'll need to [create a new Hubot bot](https://hubot.github.com/docs/). Two options for that:

### Clone this sample repository

- Clone this repository
- Rename all occurances of "improbot" to your bot name
- Write your own scripts under `scripts/`

### Generate a new Hubot from scratch

- See [Hubot docs](https://hubot.github.com/docs/) on how to create a new instance of Hubot
- See example of commands below. Make sure to use the correct Chat driver (`fleep`).

```bash
$ npm install -g yo generator-hubot
$ mkdir snarky-marketing-bot
$ cd snarky-marketing-bot
$ yo hubot
                     _____________________________  
                    /                             \ 
   //\              |      Extracting input for    |
  ////\    _____    |   self-replication process   |
 //////\  /_____\   \                             / 
 ======= |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|                            

? Owner Ando Roots <ando@sqroot.eu>
? Bot name snarky-marketing-bot
? Description This bot gives you snarky marketing pitches
? Bot adapter fleep
   create bin/hubot
   create bin/hubot.cmd
   create Procfile
   create README.md
   create external-scripts.json
   create hubot-scripts.json
   create .gitignore
   create package.json
   create scripts/example.coffee
   create .editorconfig
                     _____________________________  
 _____              /                             \ 
 \    \             |   Self-replication process   |
 |    |    _____    |          complete...         |
 |__\\|   /_____\   \     Good luck with that.    / 
   |//+  |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|
```

### Scripting

Start creating your awesome bot scripts into files in `scripts/`.

### Building your bots

Use official Hubot documentation as a guide on what you can do.

