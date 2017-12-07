const { db, Campus, Student } = require('./server/models')
// const Campus = require('./server/models/campus')
// const Student = require('./server/models/student')

const campuses = [
  { name: 'Mercury', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum malesuada purus vitae mollis. Vestibulum id viverra enim, tempor bibendum mauris.' },
  { name: 'Venus', description: 'Quisque elit arcu, vulputate eget pharetra id, pharetra vitae magna. Suspendisse potenti. Integer eleifend lorem eget egestas dictum.' },
  { name: 'Earth', description: 'Quisque eget diam et magna placerat consectetur. Nulla facilisi.' },
  { name: 'Mars', description: 'Nunc ut nulla tincidunt quam vehicula porttitor. Praesent maximus quam lobortis tristique dictum.' },
  { name: 'Jupiter', description: 'Ut lobortis efficitur lectus, vel porta nibh pharetra in. Suspendisse ac dapibus quam.' },
  { name: 'Saturn', description: 'Fusce sit amet ipsum feugiat, pellentesque purus nec, suscipit lorem.' },
  { name: 'Uranus', description: 'Praesent at pellentesque metus, ac finibus neque. Ut pellentesque eget risus id fringilla.' },
  { name: 'Neptune', description: 'Suspendisse sagittis lorem eget sapien dapibus, et vestibulum turpis auctor.' },
  { name: 'Pluto', description: 'Cras lacinia dapibus urna, in bibendum nulla semper facilisis.' },
  { name: 'Stars', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' }
]

const students = [{
  firstName: 'Jacquelyn',
  lastName: 'Wax',
  email: 'jw12@gmail.com',
  gpa: 3.0,
  campusId: 1
}, {
  firstName: 'Jasmina',
  lastName: 'Jacquelina',
  email: 'jj23@gmail.com',
  gpa: 3.1,
  campusId: 1
}, {
  firstName: 'Ko-Hsin',
  lastName: 'Chu',
  email: 'kc34@gmail.com',
  gpa: 3.2,
  campusId: 2
}, {
  firstName: 'Emily',
  lastName: 'Lin',
  email: 'el45@gmail.com',
  gpa: 3.3,
  campusId: 2
}, {
  firstName: 'Rekha',
  lastName: 'Mundada',
  email: 'rm56@gmail.com',
  gpa: 3.4,
  campusId: 3
}, {
  firstName: 'Ann',
  lastName: 'Layman',
  email: 'al67@gmail.com',
  gpa: 3.5,
  campusId: 3
}, {
  firstName: 'Annabel',
  lastName: 'Lau',
  email: 'al78@gmail.com',
  gpa: 3.6,
  campusId: 4
}, {
  firstName: 'Claudia',
  lastName: 'Baik',
  email: 'cb89@gmail.com',
  gpa: 3.7,
  campusId: 4
}, {
  firstName: 'Oczane',
  lastName: 'Rivera',
  email: 'or91@gmail.com',
  gpa: 3.8,
  campusId: 5
}, {
  firstName: 'Sara Rose',
  lastName: 'Gallagher',
  email: 'sg12@gmail.com',
  gpa: 3.9,
  campusId: 5
}];
//
// const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;
//
// const messages = [
//   { authorId: id(), content: 'I like React!', channelId: 1 },
//   { authorId: id(), content: 'I like Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like writing web apps!', channelId: 2 },
//   { authorId: id(), content: 'You should learn JavaScript!', channelId: 2 },
//   { authorId: id(), content: 'JavaScript is pretty great!', channelId: 2 },
//   { authorId: id(), content: 'Dogs are great!', channelId: 3 },
//   { authorId: id(), content: 'Cats are also great!', channelId: 3 },
//   { authorId: id(), content: 'Why must we fight so?', channelId: 3 },
//   { authorId: id(), content: 'I want to get tacos!', channelId: 4 },
//   { authorId: id(), content: 'I want to get salad!', channelId: 4 },
//   { authorId: id(), content: 'I want a taco salad!', channelId: 4 }
// ];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(channel =>
    Student.create(channel))
  ))
//   .then(() =>
//   Promise.all(messages.map(message =>
//     Message.create(message))
//   )
// );

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
