import React, { Component } from "react";
import './insert.css';
import { Redirect, Link } from "react-router-dom";
import api from '../../services/services';

class CriarProduto extends Component {
    constructor() {
        super();

        this.state = {
            produto: {
                name: "",
                price: 0,
                in_stock: 0,
            },
            redirect: false,
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            produto: { ...prevState.produto, [name]: value }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        const { produto: { name, price, in_stock } } = this.state;

        api.post('/products', {
           name, price, in_stock
        }).then(response => {
            console.log(response)
            if (response) {
                this.setState({ redirect: true });
            }
        }).catch(function (error) {
            console.log(error.message);
        });
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Produto</legend>
                       
                        <div className="produto-insert">
                            <label htmlFor="name">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome"
                                maxLength="100"
                                required
                                value={this.state.produto.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-insert">
                            <label htmlFor="price"> Preço </label>
                            <br />
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Preço"
                                min="1"
                                max="200"
                                required
                                value={this.state.produto.age}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-insert">
                            <label htmlFor="in_stock">Em Estoque </label>
                            <br />
                            <input
                                type="number"
                                id="in_stock"
                                name="in_stock"
                                placeholder="Em estoque"
                                min="1"
                                max="200"
                                required
                                value={this.state.produto.in_stock}
                                onChange={this.handleInputChange}
                            />
                        </div>
                       
                        <div className="produto-insert">
                            <button type="submit" className="btn btn-primary">
                                Cadastrar
                            </button>
                            <Link to={`/`}> Voltar </Link>
                        </div>
                    </fieldset>
                </form>
            );
        }
    }
}

export default CriarProduto;
