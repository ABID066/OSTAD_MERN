const app = require("./app")
const dovenv = require("dotenv")

dovenv.config({path: "./.env"})

app.listen(process.env.PORT, () => {
    console.log(`App listening on ${process.env.PORT}`)
})