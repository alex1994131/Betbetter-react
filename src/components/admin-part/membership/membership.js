import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { SetPrice } from '../../../store/actions/adminActions';


class Membership extends Component {

    constructor() {
        super();
        this.state = {
          price: 0,
        };
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.price) {
          return this.setState({ error: 'apitoken is required' });
        }
        const price={
            price:this.state.price
        }
        this.props.SetPrice(price);
      }
    
      handlePriceChange(evt) {
        this.setState({
          price: evt.target.value,
        });
      };


  render() {
    return (
        <div className="tab-pane fade" id="membership_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px"}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>Membership Settings</h1>
                    </div>
                    <form className="row" id="form_api_token" role="form"  onSubmit={this.handleSubmit} method="post">
                        <div className="info-holder form-group col-sm-6 col-md-12 required">
                            <div className="row" style={{alignItems:"center", display:"flex"}}>
                                <div className="col-md-1 col-xs-12">
                                    <label>Price (day):</label>  
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input className="form-control"  type="number" name="price" id="price" value={this.state.price} onChange={this.handlePriceChange}/>
                                </div>
                                <div className="col-md-2 col-xs-12">
                                    <input type="submit" className="btn blue" name="api" value="Save" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

// Payments.propTypes = {
//     userLoginRequest: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {SetPrice})(Membership)

