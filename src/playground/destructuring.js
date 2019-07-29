const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name: firstName = 'Anonymous', age, } = person;

const { city} = person.location;
console.log(`${name} is ${age}. ${city}`)



const book = {
    title: "Eogogogo",
    author: 'Riahn',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)