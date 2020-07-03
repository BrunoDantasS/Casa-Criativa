// const express = require('express');
// const server = express();

// server.use(express.static('../frontend/src/assets/'));
// server.use(express.static('../frontend/src/pages/Home/'));
// server.use(express.static('../frontend/src/pages/Ideas/'));
// server.use(express.static('../frontend/src/pages/newIdea/'));


// const nunjucks = require('nunjucks');
// nunjucks.configure('../frontend/src/pages', {
//   express: server,
//   noCache: true,
// })


// const ideas = [
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//     title: '1',
//     category: 'Estudo',
//     description: 'Exemple Exemple Exemple',
//     url: 'https://brunodantass.github.io/'
//   },
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//     title: '2',
//     category: 'Estudo',
//     description: 'Exemple Exemple Exemple',
//     url: 'https://brunodantass.github.io/'
//   },{
//     img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//     title: '3',
//     category: 'Estudo',
//     description: 'Exemple Exemple Exemple',
//     url: 'https://brunodantass.github.io/'
//   },{
//     img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//     title: '4',
//     category: 'Estudo',
//     description: 'Exemple Exemple Exemple',
//     url: 'https://brunodantass.github.io/'
//   }
// ]


// server.get('/', (req, res) => {

//   const reversedIdeas = [...ideas].reverse()

//   let lastIdeas = []
//   for (const idea of reversedIdeas) {
    
//     if (lastIdeas.length < 2) {
//       lastIdeas.push(idea)
//     }
//   }

//   return res.render('Home/home.html', { ideas: lastIdeas })
// });

// server.get('/ideas', (req, res) => {
//   const reversedIdeas = [...ideas].reverse()
//   return res.render('Ideas/ideas.html', { ideas: reversedIdeas })
// });

// server.get('/newIdea', (req, res) => {
//   return res.render('NewIdea/newIdea.html')
// });



// server.listen(3000);
