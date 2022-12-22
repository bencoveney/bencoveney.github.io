# bencoveney.github.io

Personal Page

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

### SPA

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
