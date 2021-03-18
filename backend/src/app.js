const express = require('express');
const app = express();

const db = require('./database/db')


app.use(express.static('../frontend/src/assets/'));
app.use(express.static('../frontend/src/pages/Home/'));
app.use(express.static('../frontend/src/pages/Ideas/'));
app.use(express.static('../frontend/src/pages/newIdea/'));

app.use(express.urlencoded({ extended: true }))


const nunjucks = require('nunjucks');
nunjucks.configure('../frontend/src/pages', {
  express: app,
  noCache: true,
})



app.get('/', (req, res) => {

  db.all(`SELECT * FROM ideas`, (err, rows) => {
    if (err) {
      console.log(err)
      return res.send ('Database Error')

    }

    const reversedIdeas = [...rows].reverse()

    let lastIdeas = []
    for (const idea of reversedIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea)
      }
    }

    return res.render('Home/home.html', { ideas: lastIdeas })


  })

});

app.post('/', (req, res) => {

  const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      link
    ) VALUES (?,?,?,?,?);
  `
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
  ]

  db.run(query, values, (err) => {
    if (err) {
      console.log(err)
      return res.send ('Database Error')
    }

    return res.redirect('/ideas')
  })

});

app.get('/ideas', (req, res) => {

  db.all(`SELECT * FROM ideas`, (err, rows) => {
    if (err) {
      console.log(err)
      return res.send ('Database Error')

    }

    const reversedIdeas = [...rows].reverse()
    return res.render('Ideas/ideas.html', { ideas: reversedIdeas })

  })
});

app.get('/new-idea', (req, res) => {

  return res.render('NewIdea/newIdea.html')
});



module.exports = app;
