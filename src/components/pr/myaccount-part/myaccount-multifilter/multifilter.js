import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bet from '../fillter-edit/bets-part.js';
import Sport from '../fillter-edit/sport-part.js';
import Button from '../fillter-edit/button-part.js';
import jwt from 'jsonwebtoken';
import { UpdateFilter} from '../../../../store/actions/adminActions';


class MultiFilter extends Component {
    constructor() {
        super();
        this.state = {
          bookmarks: '',
          sports:'',
          filter_id:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetsports=this.handleGetsports.bind(this);
        this.handleGetBookmarks=this.handleGetBookmarks.bind(this);
    }
    handleGetBookmarks(data,index){
        console.log(data);
        console.log(index)
        this.setState({
            bookmarks:data,
            filter_id:index
        });
    };

    handleGetsports(data,index){
        console.log(data);
        console.log(index)
        this.setState({
            sports:data,
            filter_id:index
        });
    };

    handleSubmit(evt) {
        evt.preventDefault();
        const data={
            sports:this.state.sports,
            bookmarks:this.state.bookmarks,
            filter_id:this.state.filter_id,
            user_id:jwt.decode(localStorage.getItem('jwtToken')).id
        }
        this.props.UpdateFilter(data);
    };

  render() {
    return (
        <div className="fade tab-pane" id="multi_filters">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert hidden staticTop" role="alert"></div>
                    <div className="alert hidden flashAlert" role="alert"></div>
                </div>
                <div className="col-lg-10 col-md-9">
                    <div className="page-header title font">
                        <h1>Definições filtros</h1>
                    </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <div class="row">
                        <div className="filtersFormPage">
                            <div className="filterForms">
                                <form acceptCharset="UTF-8" onSubmit={this.handleSubmit} className="form-horizontal" id="new_user_multi_filter" method="post">
                                    <Bet handleGetBookmarks={this.handleGetBookmarks}/>
                                    <Sport handleGetsports={this.handleGetsports}/>
                                    <Button/>
                                </form>
                            </div>
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
        
    }
}

export default connect(mapStateToProps, {UpdateFilter})(MultiFilter)
