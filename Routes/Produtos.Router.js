
import express from "express"

import { criarProdutos, MostrarProdutos, ApagarProdutos } from "../controllers/Produto.Controller.js"

const router = express.Router()


router.get("/produtos", MostrarProdutos )
router.post("/produtos/create", criarProdutos)
router.delete("/produtos/:id", ApagarProdutos)

export default router