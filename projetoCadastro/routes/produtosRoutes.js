const express = require('express') 
const router = express.Router() 
const ProdutoController = require('../controllers/ProdutoController') 

router.post('/edit', ProdutoController.editProdutoPost) 
router.get('/', ProdutoController.showProdutos) 
router.get('/produtos', ProdutoController.showProdutos) 
router.get('/create', ProdutoController.createProduto) 
router.post('/create', ProdutoController.createProdutoPost) 
router.get('/:id', ProdutoController.getProduto) 
router.post('/remove/:id', ProdutoController.removeProduto) 
router.get('/edit/:id', ProdutoController.editProduto) 

module.exports = router 