import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1"
  });
});

app.use("/graphql",
graphqlHTTP({
  schema: schema,
  graphiql: true
}))

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
