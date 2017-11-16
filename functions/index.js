const functions = require('firebase-functions');
console.log(process.env.TESTENV);

exports.sendEnvironment = functions.https.onRequest((request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    console.log(process.env.SOME);
    const enviro = process.env.TESTENV;
    response.end(enviro);
})