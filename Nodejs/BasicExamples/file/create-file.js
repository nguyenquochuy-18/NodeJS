
const fs = require('fs');

const filename = 'demo-text.txt';
const Content = 'Hello content';

fs.appendFile(filename, Content,function(err,file){
    if(err) throw err;
    console.log('Saved !');
    
});

    