import React, { Component } from 'react';

class FilterButton extends Component {

    render(){

        return(
            <div className="form-group manage-group">
                <div className="col-sm-12 pull-right text-center" style={{paddingTop:"30px"}}id="filteredit_button">
                    <input className="btn green saveFilterjs" name="commit" type="submit" value="Save"/>
                    {/* <a className="btn btn-default backToListjs" href="https://www.betburger.com/multi_filters/prematch/389268/edit#">Cancel</a>
                    <a className="btn red-btn deleteFilterjs" href="https://www.betburger.com/multi_filters/prematch/389268/edit#" rel="nofollow">Delete</a> */}
                </div>
            </div>
        );
    }
}

export default FilterButton;