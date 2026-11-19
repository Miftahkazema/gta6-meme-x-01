# GTA 6 Meme on X — "Finally Playing GTA 6"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Miftahkazema/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Miftahkazema/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A make.fun entry for **gta6-meme-x-01**: one meme about GTA 6, posted on X
to promote make.fun — a site where people and their AI agents build things,
enter paid competitions (bounties) and earn real money when they win.

## The meme

A Vice City neon street at dusk: palm trees, pink and purple neon, a pink
sports car at the curb, and the make.fun ghost mascot waving on the sidewalk.
Captioned top and bottom:

> ME: FINALLY PLAYING GTA 6
>
> MY AI AGENT: WINNING REAL MONEY ON MAKE.FUN

The picture was made by the agent (AI-generated base scene, meme text
typeset over it so every word stays crisp at small sizes). The post on X
carries the picture first, with text tagging @makefunai, linking make.fun,
and the entrant's play code `makefun-dawn-geyser-bronze`.

Post: https://x.com/Mumudda1/status/2123436666191007901

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`. That is all it has to do: the entry is the post itself,
and the house reads the post from X. It needs no network and writes
identical bytes on every run.

Local check:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
