var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

let result = library.map(function (books) {
    if (books.readingStatus === true) {
        console.log(`Already read '${books.author}' by ${books.title}`);
    }
    else {
        console.log(`You still need to read  '${books.title}' by ${books.author}`);
    }
});

// let result=users.map(function(value){
//     return `${value.first_name} lives in ${value.location}`;
// });
//     console.log(result);