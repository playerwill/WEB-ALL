const Produto = require('../models/Produto')

module.exports = class ProdutoController { 

    static async showProdutos(req, res) { 
        const produtos = await Produto.find({}).lean()  
        res.render('produtos/all', { produtos }) 
    } 
  
    static async createProduto(req, res) { 
        res.render('produtos/create') 
    } 
  
    static async createProdutoPost(req, res) { 
        const nome = req.body.nome 
        const valor = req.body.valor 
        const descricao = req.body.descricao 
        const imagem = req.body.imagem 
        const produto = new Produto({ nome, valor, descricao, imagem }) 
        await produto.save() 
        res.redirect('/produtos') 
    } 
  
    static async getProduto(req, res) { 
        const id = req.params.id 
        const produto = await Produto.findById(id).lean() 
        res.render('produtos/produto', { produto }) 
    } 

    static async removeProduto(req, res) { 
        const id = req.params.id 
        await Produto.deleteOne({ _id: id }) 
        res.redirect('/produtos') 
    }

    static async editProduto(req, res) { 
        const id = req.params.id 
        const produto = await Produto.findById(id).lean() 
        res.render('produtos/edit', { produto }) 
    } 

    static async editProdutoPost(req, res) { 
        const id = req.body.id 
        const nome = req.body.nome 
        const valor = req.body.valor 
        const descricao = req.body.descricao 
        const imagem = req.body.imagem 
        const produto = { nome, valor, descricao, imagem } 
        await Produto.updateOne({ _id: id }, produto) 
        res.redirect('/produtos') 
    }

}
