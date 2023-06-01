import express from 'express'
import cors from 'cors'


// Create a new express app instance
const app = express();
// Setup cors
app.use(cors());
// Setup json body parsing
app.use(express.json());

// Setup chance for random data
import Chance from 'chance'
const chance = new Chance();

// Setup our animal array. This will be our "database"
// Use Array.keys to generate 250 values
// Use Array.map to generate an object for each value
// Use chance to generate random data
const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        name: chance.name(),
        age: chance.age(),
    }
});

// Since our endpoint is blank we can just use '/'
app.get('/', (req, res) => {

    // The req object has a query property that contains all the query parameters, this is what goes after the ? in the search bar
    const q = req.query.q?.toLowerCase() || '';
    // Filter the animals array to only include animals that have a type that includes the query parameter
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));
    // Send the results back to the client
    res.send(results);
});

// Begin listening on port 3000 and log a message to the console
app.listen(3000, () => console.log('Server ready'));