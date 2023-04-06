import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
function defaultInitOptions() {
  const firebaseConfig = {
    apiKey: "AIzaSyARvUaVnimhmvQZx14owRCpYTXXhfBWFTk",
    authDomain: "abode-takehome.firebaseapp.com",
    databaseURL: "https://abode-takehome-default-rtdb.firebaseio.com",
    projectId: "abode-takehome",
    storageBucket: "abode-takehome.appspot.com",
    messagingSenderId: "234075775261",
    appId: "1:234075775261:web:a7eb1cc238d8f4e80101f4",
  };

  const defaultProject = initializeApp(firebaseConfig);

  console.log(defaultProject.name);

  const db = getDatabase();
  connectDatabaseEmulator(db, "localhost", 9000);
  return db;
}

export default defaultInitOptions();
