const express = require("express");
const morgan = require("morgan");

const previewRouter = require("./routes/preview/index.js");
const { makeResponse } = require('./utills');

const app = express();
app.set("port", process.env.PORT || 5000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/preview", previewRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} There is no router.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  res.status(status).send(makeResponse({
    resultCode: -1,
    resultMessage: message,
  }));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중!");
});
