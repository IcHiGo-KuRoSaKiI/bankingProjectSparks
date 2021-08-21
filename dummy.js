const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/bankProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 


// First we have to create some dummy data



const dummyUsers = [
    {
        name: 'vedansh',
        email: 'vedanshkumar@gmail.com',
        credits: 10000
    },
    {
        name: 'rachel',
        email: 'rachel@gmail.com',
        credits: 7000
    },
    {
        name: 'lisa',
        email: 'lisa@gmail.com',
        credits: 4500
    },
    {
        name: 'helena',
        email: 'helena@yahoo.com',
        credits: 8600
    },
    {
        name: 'jack',
        email: 'jack@gmail.com',
        credits: 7500
    },
    {
        name: 'charlie',
        email: 'charlie@yahoo.com',
        credits: 6900
    },
    {
        name: 'james',
        email: 'james@gmail.com',
        credits: 3000
    },
    {
        name: 'john',
        email: 'john@yahoo.com',
        credits: 2100
    },
    {
        name: 'emily',
        email: 'emily@gmail.com',
        credits: 5300
	}
]

User.insertMany(dummyUsers)
    .then(res => console.log(res))
    .catch(err => console.log("We got ourselvs an error ladies and gentlemen" ,err))
