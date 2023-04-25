const fs = require('fs/promises')

async function example(){
    try{
const data = await fs.readFile('C:/Users/Admin/Desktop/GoMycode/node/welcome.txt', {encoding : 'utf8'} );
        console.log(data);
    }catch(err){
    console.log(err);
}
}
example();