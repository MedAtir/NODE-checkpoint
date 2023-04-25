var generator = require("generate-password");

var password = generator.generate({
    lenght: 10,
    numbers: true
});
//'eerfere'
console.log(password)