const admin = require("firebase-admin");

const firbaseJson = {
  type: "service_account",
  project_id: "novatask2",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY
    ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
    : undefined,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oxi6b%40novatask2.iam.gserviceaccount.com",
};

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firbaseJson),
  storageBucket: "gs://novatask2.appspot.com",
});

// Cloud storage
const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
