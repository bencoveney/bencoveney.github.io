---
title: "Quadrilactic"
itch: https://bencoveney.itch.io/quadrilactic
github: https://github.com/bencoveney/Quadrilactic
summary: "A browser-based game about a square jumping and bouncing through space."
preview: "./quadrilactic.png"
categories:
  - canvas
  - ts
  - gaming
---

Quadrilactic is a simple browser based game about a quadrilateral that has gone intergalactic. You control a little square trying to jump through space (upwards on the screen), bouncing and jumping off a little platform that flies up towards you as you climb.

Looking through my Github repositories I can see a load of haf-finished projects, where I had big ideas but not enough patience and commitment to see the development through to the end. Quadrilactic was my attempt to see the development of a game project through from start to finish. To make this achievable I scaled the scope way back.

![Quadrilactic gameplay](./quadrilactic.png "Quadrilactic's main character falling to his doom")

The gameplay is programmed in TypeScript and renders to a HTML canvas element. I created the (very simple) graphics myself in Paint.NET, and I pulled sound assets from [BFXR](http://www.bfxr.net/) and [OpenGameArt](https://opengameart.org/).

The gameplay was partly inspired by doodle-jump. The portrait orientation lends itself to the vertical gameplay, and I had plans to implement tilt controls for mobile, although these never materialised.

The gameplay is really challenging, as the [comments on itch.io](https://bencoveney.itch.io/quadrilactic) confirm. Part of the difficulty of the game is that the platform (which you need to bounce on) disappears off-screen, only to return at increasingly high speeds. This gives you smaller and smaller windows of time to make a corrective jump and keep climbing.

Despite the incredible simple design, its nice to have seen a game through from start to a complete finished state. In particular, I'm pleased with some of the "juicy" details I managed to include:

- Parallax scrolling stars in the background.
- The happy little face on the player, that changes as it bounces.
- The transparent trails on the player and platform.
- Inclusion of sounds for audio feedback.
