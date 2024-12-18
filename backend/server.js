import mongoose from "mongoose";
import app from "./app.js";

const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/hotelsdb")
  .then(() => console.log("Connected database"))
  .catch(() => console.log("Failed database"));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
