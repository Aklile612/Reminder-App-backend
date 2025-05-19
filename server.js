import dotenv from 'dotenv'
dotenv.config()

import dbconnect from "./db/dbConnection.js"
import app from "./app.js"

// Use dynamic port
const PORT = process.env.PORT || 5000;

dbconnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to DB', err);
  });
