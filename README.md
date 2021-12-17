# Fortune Cookie

> Take home Project from joinhoneycomb.com :)

_Sadly this was incomplete_

## Overview
<img src="https://user-images.githubusercontent.com/5723692/146503599-cbba9951-7158-4dcf-96c8-328b99f5b037.jpg" width="375" height="812"> 

<img src="https://user-images.githubusercontent.com/5723692/146503778-d6142bfc-f494-41d4-9b23-c2298a12530d.jpg" width="375" height="812">

<img src="https://user-images.githubusercontent.com/5723692/146503622-8465364e-d3e3-4335-8b5e-81260ed8c4aa.jpg" width="375" height="812">

## 🚀 Quick start

First, clone the repo:

```
git clone https://github.com/Mvrs/take-home-joinhoneycomb.com
```

Then install dependencies:

```
cd take-home-joinhoneycomb && yarn install or `npm`
```

Last but not least

```
yarn start
```

Requirements

```
- Expo SDK 43.0.0 >= 40.+
- React Native 0.64.0 >= 0.60+
```

## 🧐 What's Inside?

This Take Home was Built with React Native

> Technologies listed below

- React
- TypeScript
- AsyncAwait Library From React Native (this broke my 🙃)
- React Navigation +6
- Context Api

## Roadblocks

One of the things I've come to realize is don't try to integrank a blank React Native project with a time constraint for a take home project. I stumbled into alot of errors in the beginning like the rendering of `ExpoRootComponent` or duplicate keys rendering in the `<FlatList />` component. The interesting design (I admit) had me sweating which cause me to overlap some cards to achieve the design. Before getting there I spent 1hr and some change wondering why (I know I know the pressure got to me lol) my data was not coming in. Long story short my `<FlatList />` component was being called from the `reanimated 2` library. 

## Realizations

> Now Now Now... I got lost in the sauce. 
I would have went with Basic React and Framer Motion to replicate a mobile feel and look. 
Saving time is key, so going with TypeScript (although it's cool) slowed down my development process; this led to typing errors without no time to write a proper tsconfig file for rules. 
This should have been simple, but sometimes getting yourself off to a weak start can be hard to recoup from, but this was a fun project. Ah, forgot! Using `route.params.args` wasn't the best thing to do as React Navigation bewares of performance issues, but it got the job done for the time being 😅.  


## ✨ Acknowledgements

- Google and Happy Hour
- HoneyComb Team 
