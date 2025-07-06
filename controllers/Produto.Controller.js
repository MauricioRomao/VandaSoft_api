import { SalvarProduto, ListarProdutos, excluirProduto } from "../services/Service.Produtos.js";



export const MostrarProdutos = async (req, res) => {
    try {
        const Produtos = await ListarProdutos()
        res.status(200).json(Produtos)
    } catch (Erros) {
        res.status(500).json({ message: Erros })

    }
}

export const criarProdutos = async (req, res) => {
    try {
        const novoProduto = await SalvarProduto(req.body);
        res.status(201).json({ mensagem: "Produto criado com sucesso", produto: novoProduto });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro na criação de produto", erro: error.message });
    }
};



export const ApagarProdutos = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await excluirProduto(id);

    if (resultado === 0) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    return res.json({ mensagem: "Produto apagado com sucesso" });
    
  } catch (erros) {
    return res.status(500).json({ mensagem: "Erro interno no servidor", erro: erros.message });
  }
};
