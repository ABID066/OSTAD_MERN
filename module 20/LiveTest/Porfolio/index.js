const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({ path: "./.env" })

app.listen(process.env.RUNNING_PORT, function (){
    console.log("Running at "+process.env.RUNNING_PORT);
});
