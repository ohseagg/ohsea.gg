require('dotenv').config()
const express = require("express")
const gatsby = require("gatsby-plugin-nodejs")
const session = require("express-session")
const passport = require("passport")
const discordStrategy = require("../src/strategies/discordStrategy")

const app = express()

app.use(session({
    secret: 'some random secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

gatsby.prepare({ app, pathPrefix: "/gatsby" }, () => {
    app.get("/auth", passport.authenticate("discord"))
    app.get("/auth/redirect", passport.authenticate("discord", {
        failureRedirect: '/forbidden'
    }), (req, res) => {
        res.send(200)
    })
})

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})