import ProdutosModel from "../models/produtos.Model.js";

export const SalvarProduto = async (dados) => {
    const novoProduto = new ProdutosModel(dados);
    return await novoProduto.save();



};

export const ListarProdutos = async () => {
    return await ProdutosModel.findAll()
}

export const  excluirProduto = async (id)=>{

    return await ProdutosModel.destroy({
        where:{id:id}
    })


}