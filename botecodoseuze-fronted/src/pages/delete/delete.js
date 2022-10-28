import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../../services/services';
import './delete.css';

class DeletarProduto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ produto: response.data });
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3040/products/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    //console.log(data)
                    this.setState({ redirect: true });
                }
            })

        event.preventDefault();
    };

    render() {
        const { redirect, produto } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <fieldset>
                    <legend>Deletar Usuário</legend>
                    <div className="produto-delete">
                        <article key={produto.id}>
                            <strong> {produto.name} </strong>
                            <p>Tem certeza que deseja deletar este registro?</p>
                            <button
                                onClick={this.handleClick}
                            >
                                Remover
                            </button>
                            <Link to={`/`}>Voltar</Link>
                        </article>
                    </div>
                </fieldset>
            );
        }
    }
}

export default DeletarProduto;
