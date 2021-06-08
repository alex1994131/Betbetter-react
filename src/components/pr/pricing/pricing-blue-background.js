import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {getClientdata} from '../../../store/actions/adminActions';
import {GETPay} from '../../../store/actions/adminActions';
import {GETPrice} from '../../../store/actions/adminActions';
import { parseJSON } from 'jquery';
class PricingBlueBackground extends Component {
    constructor() {
        super();
        this.state = {
          day: '1',
        };
        this.handledayChange = this.handledayChange.bind(this);
        this.handlegetPayClick=this.handlegetPayClick.bind(this);
    }

    handlegetPayClick(evt) {
        const data=localStorage.getItem('clientData');
        const price=parseJSON(localStorage.getItem('memberprice')).price;
        const client_data=this.state.day*price
        this.props.GETPay(client_data);
      }
    
      handledayChange(evt) {
        this.setState({
          day: evt.target.value,
         
        });
      };
      componentDidMount(){
        this.props.getClientdata();
        this.props.GETPrice();
        console.log(this.props.clientData)
      }
  render() {
    const price=parseJSON(localStorage.getItem('memberprice')).price;
    return (
        <div className="blue-background">
            <div className="container" id="price-container">
                <div className="price-block">
                    <h2 className="secondary-title text-center">Ilimitado Surebets</h2>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="price-column" id="prematch">
                                <span className="price-column__label prematch-label">Prematch</span>
                                <div>
                                    <h4 className="price-column__title">prematch</h4>
                                    <div className="price-column__price">
                                        <div className="actual_price">
                                            <span className="currency">€</span>
                                            <span className="price">{this.state.day*price}</span>
                                        </div>
                                        <div className="old_price hidden"></div>
                                    </div>
                                    <div className="sale_details hidden"></div>
                                    <div className="price-column__day">
                                        Only
                                        <span className="currency">€</span>
                                        <span className="price-column__priceday">{price}/dia</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="prematch-tariff" onChange={this.handledayChange}>
                                            <option value="1" data-duration="1">1 dias</option>
                                            <option value="10" data-duration="7">10 dias</option>
                                            <option value="30" data-duration="30">30 dias</option>
                                            <option value="180" data-duration="180">180 dias</option>
                                            <option value="360" data-duration="360">360 dias</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Ilimitado Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Funcionalidade melhorada:</span>
                                        <ul className="green-list">
                                            <li>Surebets</li>
                                            <li>Serviço de comparação Prematch</li>
                                            <li>Middles</li>
                                            <li>Negativas surebets</li>
                                            <li>Contabilidade</li>
                                            <li>Filtrar por ROI</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn green-btn pay-form pay-form-prematch" onClick={this.handlegetPayClick}>
                                        Selecionar
                                        <img src="../../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>

                    </div>
                </div>
                <h2 className="secondary-title text-center">Incluído em todos os planos</h2>
                <div className="row">
                    <div className="col-md-3 col-md-offset-1">
                        <h5 className="small-title">Todos os mercados:</h5>
                        <ul className="green-list">
                            <li>
                                1X2
                            </li>
                            <li>
                                Handicaps
                            </li>
                            <li>
                                Totals
                            </li>
                            <li>
                                Individual totals
                            </li>
                            <li>
                                Statistics
                            </li>
                            <li>
                                Additionals
                            </li>
                            <li>
                                Game Winner
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <h5 className="small-title">Todos os desportos:</h5>
                        <ul className="green-list columns-list">
                            <li>
                                Basebol
                            </li>
                            <li>
                                Basquetebol
                            </li>
                            <li>
                                Futsal
                            </li>
                            <li>
                                Andebol
                            </li>
                            <li>
                                Hóquei
                            </li>
                            <li>
                                Futebol
                            </li>
                            <li>
                                Ténis
                            </li>
                            <li>
                                Voleibol
                            </li>
                            <li>
                                Futebol americano
                            </li>
                            <li>
                                Bilhar
                            </li>
                            <li>
                                Dados
                            </li>
                            <li>
                                Ténis de mesa
                            </li>
                            <li>
                                Badminton
                            </li>
                            <li>
                                Râguebi
                            </li>
                            <li>
                                Polo aquático
                            </li>
                            <li>
                                Bandy
                            </li>
                            <li>
                                Artes marciais
                            </li>
                            <li>
                                Hóquei de campo
                            </li>
                            <li>
                                AFL
                            </li>
                            <li>
                                E-Sports
                            </li>
                            <li>
                                Xadrez
                            </li>
                            <li>
                                Futebol gaélico
                            </li>
                            <li>
                                Criquete
                            </li>
                            <li>
                                Fórmula 1
                            </li>
                            <li>
                                Voleibol de praia
                            </li>
                            <li>
                                Corrida de cavalos
                            </li>
                            <li>
                                Biatlo
                            </li>
                            <li>
                                Ondulação
                            </li>
                            <li>
                                Abóbora
                            </li>
                            <li>
                                Netball
                            </li>
                            <li>
                                Futebol de areia
                            </li>
                            <li>
                                Floorball
                            </li>
                            <li>
                                Hurling
                            </li>
                            <li>
                                Kung Volleyball
                            </li>
                            <li>
                                E-Soccer
                            </li>
                            <li>
                                E-Hockey
                            </li>
                            <li>
                                E-Basketball
                            </li>
                            <li>
                                E-Tennis
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        clientData: state.admin.clientData,
    }
}
export default connect(mapStateToProps, {getClientdata,GETPay,GETPrice})(PricingBlueBackground);
