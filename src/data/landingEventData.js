const data = {
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
        game: 2,
        title: "AVGL x OHSEA LoL Spring Open",
        prize: "$300+",
        detail1: "March 14-15",
        detail2: "Double Elimination",
        detail3: "ON High School Students",
        link: "https://avgl.org/ohsea/39410/bracket",
    },
    LgEvent2: {
        game: 1,
        title: "AVGL x OHSEA VALORANT Spring Open",
        prize: "$300+",
        detail1: "March 16-17",
        detail2: "Double Elimination",
        detail3: "ON High School Students",
        link: "https://avgl.org/ohsea/39411/events/about",
    },
}

export default data