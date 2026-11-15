/*
  Goa Trip - settings you can edit WITHOUT rebuilding the app.
  After changing this file, upload the folder to your host again.
*/
window.GOA_CONFIG = {
  // Your private trip code. All five of you use the same one.
  // Make it long and unguessable, e.g. "goa-gang-7x3k9q-2026". Letters, numbers and dashes only.
  tripCode: "goa-gang-change-me",

  // Paste your Firebase web config here to turn on live sync between everyone's phones.
  // Leave it as null to run in local demo mode (data stays only on this device).
  // Example:
  // firebase: {
  //   apiKey: "...", authDomain: "...", projectId: "...",
  //   storageBucket: "...", messagingSenderId: "...", appId: "..."
  // },
  firebase: {
   apiKey: "AIzaSyCQzcCZkrcRFjEbyaED7VuST_Ii04nFBtw",
  authDomain: "trip-planner-53a69.firebaseapp.com",
  projectId: "trip-planner-53a69",
  storageBucket: "trip-planner-53a69.firebasestorage.app",
  messagingSenderId: "743069342631",
  appId: "1:743069342631:web:2623e9285f2572c5d0f482"},

  // Optional: your own hero photo, e.g. "photos/hero.jpg" (put the file in the photos folder).
  heroImage: "",
};
