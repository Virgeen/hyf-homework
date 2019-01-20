
   /*
   var Books = ['faster-than-speed-of-light',
    'genome', 
    'nature-in-contemporary-physics', 
    ' the-first-three-minutes-of-the-life-of-the-universe',
    'relativity-and-the-nature-of-space-time',
    'mind map',
    'physics-of-the-impossible',
    'the-brian',
    'other-worlds',
     'universe-from-nothig'  
    ];

console.log(books);

function bookList() {
    let x = document.createElement('ul');
    document.body.appendChild(x);
   for(let i = 0; i<books.length; i++)  {
       let a = document.createElement('li');
       a.innerHTML = books[i];
       x.appendChild(a);
   }
    
}
bookList();


ducument,getElementById("book-list").addEventListener("click" , function() {
  const ranValue = Math.floor(Math.random() * 10);
  console.log(ranValue)
  console.log(books[ranValue])
  document.getElementById().innerHTML = books[ranValue]

  */

//Make an object containing information for each book.

let myBooks = [ {
  title: ' Faster than speed of light',
  athor: ' Joao Maueijo',
  language: ' English' 
},
  {
    title: 'Genome ',
    athor: ' Matt Ridley',
    language: ' English' 
},
{
    title: 'Nature in contemporary physics',
    athor: ' Werner Heisnberg',
    language: ' German' 
},
  {
    title: 'The first three minutes of the life of the universe ',
    athor: 'Steven Weinberg',
    language: 'English, USA ' 
}, 
  {
    title: 'Relativity and the nature of space-time ',
    athor: ' Vesselin Petkov',
    language: ' English' 
},
  {
    title: 'Mind map ',
    athor: ' Tony Buzan',
    language: 'English ' 
},
  {
    title: 'Physics of the impossible',
    athor: ' Michio Kaku',
    language: ' English' 
},
  {
    title: 'The brian',
    athor: ' Doctor Norman Dodge',
    language: ' English' 
},
  {
    title: 'Other worlds ',
athor: 'Paul Davis ',
    language: 'English ' 
},
  {
    title: ' Universe frome nothing',
    athor: 'Lawrence M. Krauss',
    language: 'English ' 
  }
]


function booksInformatioon() {
  for (let i = 0; i < myBooks.length; i++) {
    let myTitle = document.createElement('h1');
    x.appenChild(myTitle);
    myTitle.innerHTML = myBooks[i].title;
    let x = document.querySelector('ul');
    let myAthor = document.createElement('li');
    x.appendChild(myAthor);
    myAthor.innerHTML = myBooks[i].athor;

    let bookLanguage = document.createElement('p');
    myAthor.appendChild('p');
    bookLanguage.innerHTML = myBookss[i].language;

  }
}

booksInformatioon();


//Object for book covers

let bookCovers = {
  'faster-than-speed-of-light': './image/faster-than-speed-of-light.jpg',
  'genome': './image/genome.jpg'
  'nature-in-contemporary-physics': './image/nature-in-contemporary-physics.jpg',
  ' the-first-three-minutes-of-the-life-of-the-universe': './image/the-first-three-minutes-of-the-life-of-the-universe.jpg',
  'relativity-and-the-nature-of-space-time': './image/relativity-and-the-nature-of-space-time.jpg',
  'mind map': './image/mind map.jpg',
  'physics-of-the-impossible': './image/physics-of-the-impossible.jpg',
  'the-brian': './image/the-brian.jpg',
  'other-worlds': './image/other-worlds.jpg',
  'universe-from-nothig': './image/universe-from-nothig.jpg'  

}


let foo = Object.values(bookCovers);
console.log(foo);

let loo = Object.keys(bookCovers);
console.log(loo);

//write a function which places an image at the corresponding li element

//it is difficult for me to do step 1.7