const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("USers List");
});

router.get("/new", (req, res) => {
  res.send("USer New Form");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id ${req.params.id}`);
  });

const users = [{ name: "abel" }, { name: "the weeknd" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  console.log(id);
  next();
});

module.exports = router;
