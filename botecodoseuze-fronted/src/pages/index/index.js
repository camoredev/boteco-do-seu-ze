import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';
import './index.css';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';

export default class Produtos extends Component {
    state = {
        produtos: [],
    };

    componentDidMount() {
        this.loadProdutos();
    }

    loadProdutos = async () => { 
        const response = await api.get(`/products`);
        console.log(response)
        const produtos = response.data;

        this.setState({ produtos });
    };

    render() {
        const { produtos } = this.state;
        return (
            <div className="produto-list">
                <p>
                    <Link to={`/criarproduto`}> Criar Produto </Link>
                </p>
                {produtos.map(produto => (
                    <article key={produto.id}>
                        <strong> {produto.name} </strong>
                        <p> <FaRegMoneyBillAlt /> {produto.price} </p>
                        <p> <MdProductionQuantityLimits /> {produto.in_stock} </p>
                        <br/>

                        <p> <Link to={`/produto/${produto.id}`}> Acessar </Link> </p>
                    </article>
                ))}
            </div>
        )
    }
}