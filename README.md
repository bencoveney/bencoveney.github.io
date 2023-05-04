# bencoveney.github.io

[https://bencoveney.github.io/](https://bencoveney.github.io/)

## Design inspiration

- https://mxb.dev/
- https://css-irl.info/quick-tip-negative-animation-delay/
- https://daverupert.com/
- https://mattwynne.net/new-beginning

## Requirements

- Occasional blog post
  - Same capabilities as medium (to enable mirroring)
  - Rich text
  - Embed images, videos, tweets
- Write about the things I have made
  - Github Projects
  - Games (Servers, maps, standalone)
- CV
  - Past experience
  - Skills (as categories)
- Flex a bit
  - Best practices
  - Looks good, visual flair
  - Nerd cred

## Misc TODOs

- Consolidate css variables (in `css.ts`) with config (in `config.ts`).
- Improve image anchor/titles
- Improve a11y and aria attributes
- Permalink headers
- Categories
- Migrate icons to something new
- Add projects:
  - Music production
  - UKFT
  - Personal site (+ history, netmag review)
  - Superauto.pet
  - Gists (like regex fractals)
  - Internal talks?
  - YouTube videos (Csgo clips, linerider)
  - Voxels
  - RWF
  - Flesh out projects
  - https://bencoveney.com/doclooks/
  - https://github.com/bencoveney/light-switch-simulator-pro
  - GeneticAlgorithms
    - Dissertation
    - https://github.com/bencoveney/ChromosomeLibrary

## Decisions

### Embeds (tweets, YT vids)

OEmbed remark plugin not well maintained or working on client.

Prospect of writing own remark plugin unappealing.

- Maybe not the best idea to oembed initially.
- Extra technical challenge.
- Might want multiple tweets or to collapse thread - can see cases where it wouldn't be applicable.
- Embeds typically include tracking.
- Potentially just images are fine.

Twitter manual embed gets automatic tracking for full capability.

https://github.com/remark-embedder/transformer-oembed
https://www.ryanfiller.com/blog/remark-and-rehype-plugins

### SPA

Should I have run time JS as well as SSR pages?

- (-) Time to implement
- (+) Demo of tech capability
- (+) Opportunity for flair
- (-) Could add later
- (-) SSR is demo of good performance
- (+) Already started
- (-) Already started is creating hiccups
  - Dev reload not working
  - How to split content?
  - ~~OEmbed plugin not well maintained or working on client~~

Probably a nice-to-have for later.
