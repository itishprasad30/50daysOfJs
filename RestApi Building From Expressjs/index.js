const express = require("express");

const app = express();

const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  //   console.log("HOME route");
  //   res.download("./index.js");
  //   res.send({ message: "Hello" });

  res.send("User List");
});

// Routing custom
const userRouter = require("./routes/user");
app.use("/users", userRouter);

app.get("/pintu", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "Medium",
  });
});

app.post("/pintu/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ message: "We need a logo |||" });
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID  is ${id}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server Starts at port ${PORT}`);
});
