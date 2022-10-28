import React, { Component } from "react";
import './update.css';
import { Redirect, Link } from "react-router-dom";
import api from '../../services/services';

class EditarProduto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: {
                name: "",
                price: 0,
                inStock: 0,
            },
            redirect: false,
        };

    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        console.log(response.data)

        this.setState({ produto: response.data });
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            produto: { ...prevState.produto, [name]: value }
        }));
    };

    handleSubmit = async event => {
        try {
            event.preventDefault();
            const { id } = this.props.match.params;
            const { produto: { name, price, inStock } } = this.state;

            const response = await api.put(`/products/${id}`, { name, price, in_stock: inStock });

            console.log(response)

            if (response) {
                this.setState({ redirect: true });
            }
        } catch (error) {
            console.log(error.response.data);
            return;
        }
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Atualizar Pessoa Usuária</legend>
                        <div className="produto-update">
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
                        <div className="produto-update">
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
                                value={this.state.produto.price}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-update">
                            <label htmlFor="inStock">Em Estoque </label>
                            <br />
                            <input
                                type="number"
                                id="inStock"
                                name="inStock"
                                placeholder="Em estoque"
                                min="1"
                                max="200"
                                required
                                value={this.state.produto.inStock}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <button type="submit" className="btn btn-primary">
                                Atualizar
                            </button>
                            <Link to={`/`}> Voltar </Link>
                        </div>
                    </fieldset>
                </form>
            );
        }
    }
}

export default EditarProduto;
