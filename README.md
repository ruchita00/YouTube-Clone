# YouTube-Clone

# install tailwind
- npm i -D tailwindcss
- need config 

# Debouncing:
- typing slow =200ms
- typing fast = 30ms

# Performance
- iphone pro max = 14 letter = 1000 = 140000
- with debouncing = 3 api calls * 1000 =3000

Debouncing with 20ms
- if difference between 2 key strokes is <200ms - DECLINE API call
- >200ms make an API Call

#  Cache
- time complexity tro search in array =0(n)
- time complexity tro search in Object = 0(1)
- array.indexof()

# Comment section 
- used recursion

# Live Chat

# web socket : 
- it is handshake between ui and server
- it is bidirectional live data
- not regluar interval
- example: trading, whatsapp

# API Polling: 
- ui request the server and data flows from server to ui
- after interval it is one way connection
- example: gmail, cricbuzz

# Infinite Scroll

# useMeno:
- useMemo is react hook that lets you cache the result of a calculation between re-renders
- memoizing the heavy operation