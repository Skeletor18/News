const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const port = 2000;

app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/categories.route"));

mongoose
  .connect(
    "mongodb+srv://skeletor:akhmed20020918@cluster0.bcycud5.mongodb.net/News?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Start  http://localhost:2000");
});
