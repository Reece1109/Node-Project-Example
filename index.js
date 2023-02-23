// - Import express and cors
JavaScript
const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when
// working locally

//  Configure the express server
JavaScript
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON
requests
app.use(cors()); // Don't let local development give errors


//  Create '/' (home) route
//  This is where we check URLs and Request methods to create
// functionality

 //  GET '/' is always what will be displayed on the home page of
// your application
JavaScript
app.get("/", (req, res) => {
res.json({ msg: "Welcome" });
});


//  Set up app listening for API calls
JavaScript
app.listen(app.get("port"), () => {
console.log(`Listening for calls on port ${app.get("port")}`);
console.log("Press Ctrl+C to exit server");
});



