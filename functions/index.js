const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe");
("sk_test_51IlsnnBkbQXuHGzhbAI70oagTl4aXsHgTwYNUcZB5zV7oiHwtSTFW9wzRqJQrSobppjNRaSMjmHqL4w5OAiKlkht00O7JWRdM0");

//API

//- APP CONFIG
const app = express();
//- MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

//- API ROUTES
app.get("/", (request, response) => response.status(200).send("HELLO WORLD"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received, ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  // creation - ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//- LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//EXAMPLE ENDPOINT
//http://localhost:5001/clone-cfc7a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
