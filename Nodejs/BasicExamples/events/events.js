const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');

rs.on('open', function() {
    console.log("Mo file thanh cong!")
    fs.readFile('./demofile.txt', 'utf-8', function(error, data) {
        if (error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
});