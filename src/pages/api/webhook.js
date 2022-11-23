import { buffer } from "micro"
import * as admin from "firebase-admin"

// Secure a connection to FIREBASE from the backend
const serviceAccount = require("../../../permissions.json")

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()


// Establish connction to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
    return app
    .firestore()
    .collection('users').doc(session.metadata.email)
    .collection("orders").doc(session.id)
}


export default async (req, res) => {

    if (req.method === "POST"){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event;
        // Verify that the event posted came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, edpointSecret)
        } catch (error) {
            console.log('ERROR', error.message)
            return res.status(400).send(`Webhook error: ${error.message}`)
        }

        if (event.type === "checkout.session.completed") {
            const session = event.data.object
        }

    }

}