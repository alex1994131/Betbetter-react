import React, { Component } from 'react';
import Bet from './bets-part.js';
import Sport from './sport-part.js';
import Button from './button-part.js';

class FilterEdit extends Component {
    constructor() {
        super();
        this.state = {
          token: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(evt);
        console.log("dfdf");
    }


    render(){

        return(
            <div className="filtersFormPage container">
                <div>
                    <div className="page-header">
                        <h1>
                            Editing Multi Filter
                        </h1>
                    </div>
                    <div className="filterForms">
                        <form acceptCharset="UTF-8" onSubmit={this.handleSubmit} className="form-horizontal" id="filter_edit" method="post">
                            <Bet/>
                            <Sport/>
                            <Button/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterEdit;