const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home.ejs', {name : "roshan"});
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact', {name: "Roshan"});
});
app.get('/signin', (req, res) => {
  res.render('signin', {name: "signin"});
});

// app.get('/', (req, res) => {
//   res.send('<h2>hello world</h2>');
// });
// app.get("/about", (req, res)=>{
// 	res.send("<h2>I'm roshan limbu</h2>");
// });
// app.get("/contact", (req, res)=>{
// 	res.send("<h2>I'm contact</h2>");
// });
app.listen(3000, function (){
	console.log("nodejs project has been started at port 3000");
	}
)
