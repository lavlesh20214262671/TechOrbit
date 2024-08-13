const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    const dbURI = process.env.MONGODB_URL;

    // Check if the environment variable is correctly set
    if (!dbURI) {
        console.error("MONGODB_URL is not defined in the environment variables.");
        process.exit(1); // Exit the application if the URI is not set
    }

    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
        console.error("DB Connection Failed");
        console.error(error.message); // More specific error message
        process.exit(1); // Exit the application on connection failure
    });
};



// const mongoose = require("mongoose");
// require("dotenv").config();

// exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//         console.error(error);
//         process.exit(1);
//     } )
// };