# AnniversaryGift ❤️

A little interactive anniversary gift for my girlfriend — she answers questions about our relationship, unlocks a memory (with photo) after each correct answer, and finishes with a "days together" counter, a video, and some confetti.

The UI is in Traditional Chinese (zh-TW), written for her specifically.

## Features

- **Home screen** — animated intro with a live "we've been together for N days" counter, background music toggle.
- **Question flow** — multiple-choice questions about our relationship; a correct answer reveals a memory (photo + story) before moving to the next question, a wrong answer shows a random encouraging nudge and lets her retry.
- **Heart progress bar** — one heart per question, fills in as she answers correctly.
- **Ending scene** — confetti burst, a recap video, and a final "happy anniversary" card with a restart button.
- **Sound effects** — start / correct / wrong / next / complete cues, plus toggleable looping background music.
- **Photo lightbox** — click a memory photo to view it full-size.

## Tech stack

Plain HTML/CSS/JavaScript (ES modules) — no build step, no dependencies, no bundler. Just open it in a browser.

## Running locally

Because the app uses ES module imports (`<script type="module">`), it needs to be served over `http://`, not opened directly via `file://`. Any static file server works:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

or, with Node installed:

```bash
npx serve .
```

## Project structure

```
index.html                     Markup for all screens (home, question/memory, ending) + modal/lightbox/video overlays
css/style.css                  All styling, grouped by topic (layout, buttons, each scene, modal, etc.)
js/
  app.js                       Composition root — builds managers/scenes and wires them together
  sceneManager.js               Switches between registered top-level scenes
  scenes/
    BaseScene.js                 onEnter/onLeave lifecycle base class
    HomeScene.js                  Intro screen + days-together counter
    QuestionFlowScene.js          Question + memory reveal, toggled within one scene
    EndingScene.js                Confetti, recap video, restart
  managers/
    questionManager.js            Quiz state machine (current question, correct/wrong handling)
    heartManager.js                Renders/animates the heart progress bar
    animationManager.js            Correct/wrong button animation triggers
    soundManager.js                All audio playback, including BGM ducking for the video
    confettiManager.js             Ending-screen confetti burst
    modalManager.js                "Wrong answer" popup
    photoLightboxManager.js        Full-size photo viewer
  ui/
    questionUI.js                  Renders question/options into the DOM
  data/
    questions.js                   The quiz content — questions, options, correct answer, unlocked memory
    wrongMessages.js                Pool of random messages shown on a wrong answer
    config.js                       Relationship start date used for the days-together counter
assets/
  memories/                      Photos unlocked by correct answers
  audios/                        Sound effect + BGM files
  videos/                        Ending recap video
```

## Customizing for your own use

- **Questions & memories** — edit `js/data/questions.js`. Each entry needs `question`, `options`, the correct `answer` index, and a `memory` (`image`, `title`, `text`) shown after a correct answer.
- **Relationship start date** — edit `RELATIONSHIP_START_DATE` in `js/data/config.js` (`YYYY-MM-DD`).
- **Wrong-answer messages** — edit the pool in `js/data/wrongMessages.js`.
- **Media** — drop your own files into `assets/memories/`, `assets/audios/`, `assets/videos/` and update the paths referenced in `questions.js` / `soundManager.js` / `index.html` accordingly. Keep filename casing consistent with what you reference — this app runs on case-sensitive filesystems (Linux), so `memory_01.jpeg` and `memory_01.JPEG` are different files.

## Known issue

`assets/memories/memory_01.JPEG` (uppercase extension) doesn't match the `assets/memories/memory_01.jpeg` path referenced in `questions.js` — on a case-sensitive filesystem the memory photo will fail to load. Rename the file to lowercase `.jpeg` (or update the reference) to fix it.
