require('dotenv').config();
const fs = require('fs');
const fsa = require('fs/promises');
const users = require('./users.js');

//console.log(process.env.USER);

const data = `All the world's a stage, and all the men and women merely players.`;
const data2 = 'We are such stuff as dreams are made on.'
const data3 = 'We know what we are, but know not what we may be'

/*
Writes into a file and creates a new one if the file doesnt exist
----------------------------------------------------------------

fs.writeFile('/Users/dawso/OdinProject/Memory/memory/src/node/newFile.txt', data, {flag: 'a+'}, err => {
    if(err) console.log(err);
})

----------------------------------------------------------------
*/
/*
This does the same thing as the previous example but using promises instead
----------------------------------------------------------------

async function addToFile(content) {
    try {
        await fsa.writeFile('/Users/dawso/OdinProject/Memory/memory/src/node/newFile.txt', content, {flag: 'a+'});
    }catch(err) {
        console.log(err);
    }
}
addToFile(data);

----------------------------------------------------------------
*/
/*
This add some new data only to an existing file
----------------------------------------------------------------

fs.appendFile('/Users/dawso/OdinProject/Memory/memory/src/node/newFile.txt', data3 + '\n', (err) => {
    if(err) console.log(err);
})

----------------------------------------------------------------
*/
/*
This reads a file in utf8 format , then uses a callback with err and content as args then we just use the ternary operator to return the content or err
----------------------------------------------------------------

fs.readFile('/Users/dawso/OdinProject/Memory/memory/src/node/newFile.txt', 'utf8', (err, content) => {
    return err ? console.log(err) : console.log(content)
})

----------------------------------------------------------------
*/

console.log(users.users)