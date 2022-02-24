export default {
    /*
    update data for events on landing page
    --

    GAMES:
    1: val
    2 : league 

    for other games, go to largeEvent.js
    or smallEvent.js and add in an option
    for this game with the icon too in an
    <img> tag, use existing ones as reference
    --

    prize pools in this format: "$___"
    OR
    if there's no prize pool, write "No"
    --

    (no quotes for either)
    max of 3 lines for detail text, each line
    short enough to stay on a single line

    if you have less than 3, make an empty
    string
    */
    LgEvent1: {
        game: 1,
        title: "EVENT 1 HEADER",
        prize: "$1000",
        detail1: "Detail line 1",
        detail2: "Detail line 2",
        detail3: "Detail line 3",
    },
    LgEvent2: {
        game: 2,
        title: "EVENT 2 HEADER",
        prize: "$5000",
        detail1: "Detail line X",
        detail2: "Detail line Y",
        detail3: "Detail line Z",
    },
}