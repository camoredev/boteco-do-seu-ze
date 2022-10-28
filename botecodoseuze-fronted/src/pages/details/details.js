import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';

export default class Produto extends Component {
    state = {
        produto: {
            name: "",
            price: 0,
            inStock: 0,
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);
        console.log(response)
        this.setState({ produto: response.data });
    }

    render() {
        const { produto } = this.state;

        return (
            <div className="produto-list">
                <article key={produto.id}>
                    <strong> {produto.name} </strong>
                    <p> <FaRegMoneyBillAlt /> {produto.price} </p>
                    <p> <MdProductionQuantityLimits /> {produto.inStock} </p>
                    <p> <Link to={`/`}> Voltar </Link> </p>
                    <p> <Link to={`/editarproduto/${produto.id}`}> Editar </Link> </p>
                    <p> <Link to={`/deletarproduto/${produto.id}`}> Deletar </Link> </p>
                </article>
            </div>
        );
    }
}