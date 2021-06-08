import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {getAllFilters} from '../../../store/actions/adminActions';
import {SetFilter} from '../../../store/actions/adminActions';
import {DelFilter} from '../../../store/actions/adminActions';
class Filter extends Component {
    constructor() {
        super();
        this.state = {
          fliter_id: '',
          filter_name:'',
        };
        this.handleFilterIDChange = this.handleFilterIDChange.bind(this);
        this.handleFilterNameChange = this.handleFilterNameChange.bind(this);
        this.handeFIlterDelClick=this.handeFIlterDelClick.bind(this);
        this.handeFilterActive=this.handeFilterActive.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.filter_id) {
          return this.setState({ error: ' is required' });
        } 
        if (!this.state.filter_name) {
            return this.setState({ error: ' is required' });
          }
        const filter_data={
            filter_id:this.state.filter_id,
            filter_name:this.state.filter_name
        }
        this.props.SetFilter(filter_data);
      }
    
      handleFilterIDChange(evt) {
        this.setState({
          filter_id: evt.target.value,
        });
      };
      handleFilterNameChange(evt) {
        this.setState({
            filter_name: evt.target.value,
        });
      };

      handeFIlterDelClick(evt){
        const filter_id={
            id:evt.target.id,
        }
        this.props.DelFilter(filter_id);    
    }

    handeFilterActive(evt){
        console.log(this.state.button_value);
        console.log(evt.target.id);
        console.log(this.state.button_value[evt.target.id % 2])
        this.setState({
            
        });
    }
   
    componentDidMount() {
        this.props.getAllFilters();
    }
    
  render() {
    const filters = this.props.filters;
    const tablecontent=filters.map(value =>
        <tr>
            <td style={{textAlign:"center"}}>
                {value.id}
            </td>
            <td style={{textAlign:"center"}}>
                {value.filter_name}
            </td>
            <td style={{textAlign:"center"}}>
                {value.filter_id}
            </td>
            <td style={{textAlign:"center"}}>
                <input type="submit" className="btn danger" name="api" id={value.id} value="" onClick={this.handeFilterActive}/>
                &nbsp;
                <input type="submit" className="btn danger" name="api" id={value.id} value="Delete" onClick={this.handeFIlterDelClick}/>
            </td>
        </tr>
    );
    return (
        <div className="tab-pane fade" id="1filter_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>Filter</h1>
                    </div>
                    <form id="form_api_token" role="form"  onSubmit={this.handleSubmit} method="post">
                        <div className="row" style={{marginTop:"10px",alignItems:"center", display:"flex"}}>
                            <div className="col-md-5 col-xs-12">
                                <input className="form-control"  type="text" name="filter_id" id="filter_id" value={this.state.filter_name} onChange={this.handleFilterNameChange} placeholder="input filter name"/>
                            </div>
                            <div className="col-md-5 col-xs-12">
                                <input className="form-control"  type="text" name="filter_name" id="filter_name" value={this.state.filter_id} onChange={this.handleFilterIDChange} placeholder="input filter id"/>
                            </div>
                            <div className="col-md-2 col-xs-12 text-left">
                                <input type="submit" className="btn blue" name="filter" value="Add" />
                            </div>
                        </div>
                    </form>
                    <div style={{marginTop:'50px'}}>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>ID</th>
                                    <th style={{textAlign:"center"}}>FilterName</th>
                                    <th style={{textAlign:"center"}}>FilterID</th>
                                    <th style={{textAlign:"center"}} >Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tbody>
                                    {tablecontent}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        filters: state.admin.filters
    }
}

export default connect(mapStateToProps, {getAllFilters,SetFilter,DelFilter})(Filter)

