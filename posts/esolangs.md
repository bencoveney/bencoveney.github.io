---
title: "Esolangs and BMProg"
github: https://github.com/bencoveney/BMProg
website: https://bencoveney.github.io/BMProg/
summary: "Adventures in esoteric programming languages"
preview: "./esolangs-bmprog-interpreter.png"
categories:
  - c-sharp
  - image
  - prog-lang
---

> An esoteric programming language (sometimes shortened to esolang) is a programming language designed to test the boundaries of computer programming language design, as a proof of concept, as software art, as a hacking interface to another language (particularly functional programming or procedural programming languages), or as a joke.
>
> _[Wikipedia: Esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language)_

Esolangs are a fun thing to explore as a programmer. My first experiment involved creating an [interpreter for the Brainfuck language](https://github.com/bencoveney/BFInterpreter) in C#.

> Brainfuck is an esoteric programming language created in 1993 by Urban Müller.
> Notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer.
>
> _[Wikipedia: Brainfuck](https://en.wikipedia.org/wiki/Brainfuck)_

Brainfuck is a great example esolang to start with, because the input and execution concepts are so simple that you can implement them in an afternoon.

When it came time to try and craft my own esolang, I decided to try and make something where the source files were images, and program execution involved instruction pointers moving around the image. This was partly inspired by Befunge, which is another well known esolang that allows the instruction pointer to roam in multiple dimensions through the code.

If you've seen a large Game of Life setup evaluate then perhaps you understand the satisfaction of seeing all the small parts of a complex machine whirring away as it operates on a larger goal. This was another reason I choose to design an image-based programming language, I hoped it would be visually interesting to be able to generate `.gif` files of program execution where you could track the pixels around the "code" as they run each instruction.

The design I ended up with was "BMProg". There's a full breakdown of the instructions and execution available in the [Github `README`](https://github.com/bencoveney/BMProg), but the best way to play around and get a feel for the language is to check out the [online interpreter](https://bencoveney.github.io/BMProg/).

![BMProg Interpreter](./esolangs-bmprog-interpreter.png "BMProg's (almost complete) Interpreter")

Like many esolangs, BMProg is an absolute pain to do anything useful in. In addition to being almost incomprehensible to anyone with colourblindness, even a simple AND gate can take around 17 "instructions". Many of the language's instruction colours will behave differently depending on whether they are occupied by 1 or multiple instruction pointers at one time, which leaves you needing to craft winding snakes to try and delay them, so that they align at the right time to trigger some conditional behaviour.

![BMProg AND Gate](./esolangs-bmprog-and-gate.png 'A "simple" AND gate in BMProg')

Despite the dubious nature of BMProg as a real programming language, it was a fun exercise to develop it and I'd love to refine my design in the future.
