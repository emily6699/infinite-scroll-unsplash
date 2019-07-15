# React & Unsplash Infinite Scroll

### Use unsplash API to fetch images continously with an infinite scrolling.

Part of the challenge is from https://scotch.io/bar-talk/code-challenge-16-infinite-scroll-unsplash-gallery

## Quick Start

```
# Install Node  dependencies
npm i
# Install React dependencies
cd client
npm i
# Start client and server
npm run dev
```

### Issues-solved

#### 1 For the first time adding proxy to this project, proxy is not working. Need to restart the server in order to have proxy to work

#### 2 client/component/Images Be careful of using React methods and property,fetchImages=()=>{} can’t be written as fetchImages(){}

#### 3 If no new pictures are loaded, may need to check dataLength
