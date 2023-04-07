import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
function defaultInitOptions() {
  const firebaseConfig = {
    // paste your config here!
  };

  const defaultProject = initializeApp(firebaseConfig);

  console.log(defaultProject.name);

  const db = getDatabase();
  // If you want to use the local emulators, uncomment the line below (don't forget to comment it back out/remove when not using anymore!)
  // connectDatabaseEmulator(db, "localhost", 9000);
  return db;
}

export default defaultInitOptions();
