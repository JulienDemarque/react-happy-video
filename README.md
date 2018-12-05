# react-happy-video [![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

Welcome to react-happy-player, a low-config react component for a stylish video player. Intended to provide easy control on the video playback.
See a [demo][1].

### Install

```
$ npm i react-happy-video
```

### Usage

```
import VideoPlayer from "react-happy-video";
```

```
const YourComponent = () => {
  return (
    <VideoPlayer
        width="600px"
        color:"#3b3346"
        source="[your url]"
    />
  )
}
```

### How to contribute:

- install a react app somewhere on your machine (we will call demo/ the folder), Be sure to have hot-reloading.
- clone the react-happy-player somewhere else (we will call library/ the folder)
- `npm link` in library/
- `npm link react-happy-video` in demo/
- import and use the VideoPlayer in demo/ **WHITHOUT** `npm i react-happy-video`
- start your demo/ react app
- `npm run build:watch` in library/
- Edit the react-happy-player library

The MIT License (MIT) Copyright (c) 2018 Julien Demarque

[1]: https://distracted-shaw-6cfb30.netlify.com/
