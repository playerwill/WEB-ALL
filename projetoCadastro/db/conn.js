const mongoose = require('mongoose') 
async function main() { 
  await mongoose.connect('mongodb://localhost:27017/DBCadastro') 
  console.log('Conectando ao DB do Mongo!') 
} 
main().catch((err) => console.log(err)) 
module.exports = mongoose