import React, { Component } from 'react';
import { connect, connectAdvanced } from 'react-redux';

import PropTypes from 'prop-types';
import {getAllFilters} from '../../../store/actions/adminActions';
import {SetFilter} from '../../../store/actions/adminActions';
import {DelFilter} from '../../../store/actions/adminActions';
import { render } from 'react-dom';
class Filter extends Component {
    constructor() {
        super();
        this.state = {
          fliter_id: '',
          filter_name:'',
          button_value:'',
          button_values:[],
          index: 1,
          list_item: 0,
          filters: [],
          last_press: 10,
          last_press_same: 0,
        };
        this.handleFilterIDChange = this.handleFilterIDChange.bind(this);
        this.handleFilterNameChange = this.handleFilterNameChange.bind(this);
        this.handeFIlterDelClick=this.handeFIlterDelClick.bind(this);
        this.handeFilterActive=this.handeFilterActive.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAddButtonValue=this.setAddButtonValue.bind(this);
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
        for (const [index, value] of this.state.button_values.entries()) {
            if(index == evt.target.id - 1)
            {
                this.state.button_values[index] = this.state.button_values[index + 1];
                console.log(this.state.button_values);
            }
        }
        const filter_id={
            id:evt.target.id,
        }
        this.props.DelFilter(filter_id);    
    }

    

    handeFilterActive(evt){
        this.state.index = 2;
                
        if(this.state.index != 1) {
            for (const [index, value] of this.state.button_values.entries()) {
                this.state.button_values[index] = "Active";
            }
        }
        if(this.state.last_press != evt.target.id - 1 || this.state.last_press_same % 2 == 0)
        {
            this.state.button_values[evt.target.id - 1] = "Deactive";
            this.state.last_press = evt.target.id - 1;
            this.state.last_press_same = 0;
        }
        if(this.state.last_press == evt.target.id - 1)
        {
            this.state.last_press_same++;
        }
        this.setState({
            value:this.state.button_values[evt.target.id - 1],
        });
    }
    setAddButtonValue(id){
        console.log("rrr"+id);
        if(this.state.index == 1) {
            let aa = 0;
            while(aa < id) {
                this.state.button_values[aa] = "Active";
                aa++;
            }
        }
        console.log(this.state.button_values);
    }
    componentDidMount() {
        this.props.getAllFilters();
    }
    
  render() {
    this.state.filters = this.props.filters;
/*
    console.log(this.state.filters.length - 1);
    let last_item = this.state.filters.length - 1;
    console.log(this.state.filters[last_item].id);
    */
//    {this.setAddButtonValue(this.state.filters[this.state.filters.length - 1].value.id)} 
    const tablecontent=this.state.filters.map((value,index) =>
        <tr key={value.id}>
            <td style={{textAlign:"center"}}>
                {value.id}
            </td>
            {this.setAddButtonValue(value.id)}
            <td style={{textAlign:"center"}}>
                {value.filter_name}
            </td>
            <td style={{textAlign:"center"}}>
                {value.filter_id}
            </td>
            <td style={{textAlign:"center"}}>
                <input type="submit" className={`btn ${this.state.button_values[value.id - 1] == 'Active' ? 'green' : 'danger'}`} name={"name"+value.id} id={value.id} value={this.state.button_values[value.id - 1]} onClick={this.handeFilterActive}/>
                &nbsp;
                <input type="submit" className="btn danger" name="api" id={value.id} value="Delete" onClick={this.handeFIlterDelClick}/>
            </td>
        </tr>
    );
    return (
        <div className="tab-pane fade" id="2filter_tab">
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

