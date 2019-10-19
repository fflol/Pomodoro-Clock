# Pomodoro Clock

A simple practice project from FCC.


## tech stack

* React, hooks, all functional components
* Redux, > not nesesary, just for fun
* PropTypes
* Moment.js
* Material UI


## Folder structure:

    .
    ├── > node_modules
    ├── > public    
    │       ├── index.html              
    │       └── robots.txt                            
    ├── > src
    │       ├── > actions             # Redux action creators
    │       ├── > components          # React components
    │       ├── > config              # configs, only has a beep sound URL
    │       ├── > hooks               # custom hooks, only has Dan Abramov's useInterval 
    │       ├── > reducers            # Redux reducers
    │       ├── > store               # Redux store
    │       ├── App.js                # putting components together
    │       ├── App.test.js                 
    │       ├── index.js              # renders App into index.html               
    │       └── serviceWorker.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md


## app logic

First of all, here's what's in the Redux store:

```
sessionLength(pin): "25"
breakLength(pin): "5"
timerIsSession(pin): true
running(pin): false
```

All logics are in **Timer** component.
Besides the states from Redux, Timer holds these data:

```
- timer, a state

- audio, an useRef for <audio> tag control

- handleReset, a func. 
    a: It fires an action creator, 
    b: set timer back to the initial value
    c: stop and reload the audio(seems audio only have a pause() method, not stop()).
```

here's how it acturally works:

```
- useInterval is a custom hook from Dan Abramov

    a: **running** state switches to **true**, the component refreshes, this hook receives new props and starts to decrease the value of **timer** by 1000, every 1000ms.

    b: **timer** state is updated, it causes the component to re-render. Diff algorithm checks, only **timer** is changed, only update the **h3** node, everything else stays the same. 

    c: when **running** switches to **false**, the hook stops decreasing

-----------------------------

- useEffect 1: 

    a: When timer is decreased to 0, fire action creator switchLable(), Redux changes **timerIsSession** to false. 

    b: play the beep sound.

    c: because **timerIsSession** is changed, component re-renders

-----------------------------

- useEffect 2:

    a: once **timerIsSession** is changed, **timer** is set to initial value, either it's session or break

    b: sessionLength and breakLength will cause **timer** to change as well. not sure if it's a good idea, user exp wise
```
