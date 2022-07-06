let axios = require('axios');

async function getJSONAPI(){
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/2');
    return json.data;
}

getJSONAPI().then(result => {console.log(result)});