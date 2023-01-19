// QUESTION AREA
class question{
  constructor(question,answer1,answer2,answer3,correctAnswer){
      this.question=question;
      this.answer1=answer1;
      this.answer2=answer2;
      this.answer3=answer3;
      this.correctAnswer=correctAnswer;

  }

}



// SERVER AREA
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static('public'));
app.set("view engine","ejs");



const q1 = new question("Gaziantep-Diyarbakır arası araçla kaç saat?", 2, 3, 6, 2);
app.get("/", (req, res) => {
  res.render("index", {data: q1});
});




app.listen(3000);


