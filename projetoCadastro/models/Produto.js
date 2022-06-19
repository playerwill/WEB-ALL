const mongoose = require('../db/conn') 
const { Schema } = mongoose 
const Produto = mongoose.model(  'Produtos',  new Schema({ 
    nome:      { type: String, required: true,  }, 
    valor:     { type: Number,  required: true,   }, 
    descricao: { type: String, required: true,   }, 
    imagem: {type: String,  required: true ,}, 
  }),) 

 

module.exports = Produto