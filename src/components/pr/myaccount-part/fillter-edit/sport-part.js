import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { getAllSports} from '../../../../store/actions/betActions';
import { getAllFilters} from '../../../../store/actions/adminActions';

class FilterSport extends Component {
    constructor() {
        super();
        this.state = {
            checked_id:"",
            filter_id:'',
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(evt) {
        const value=evt.target.value
        let sports_id_arr = this.state.checked_id.split(':');
        let flag=false;
        sports_id_arr.map((sport_id,key)=>{
            if(sport_id==value){
                flag=true;
                sports_id_arr.splice(key,1);
                return;
            }
        })
        if(flag===false){
            sports_id_arr.push(value);
        }
        let sport_check='';
        sports_id_arr.map(sport_id=>{
            if(sport_check==''){
                sport_check=sport_id;
            }
            else{
                sport_check+=":"+sport_id;
            }  
        })
        this.setState({
            checked_id:sport_check,
        });
        this.props.handleGetsports(sport_check,this.state.filter_id);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.filters !== prevProps.filters){
            const filters = this.props.filters;
            const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;
            let sports_id = '';
            filters.map(filter => {
                if(filter.user_id === user_id){
                    sports_id = filter.sports_id;
                    this.setState({
                        filter_id:filter.id,
                    });
                    return;
                }
            });
            this.setState({
                checked_id:sports_id,
            })
            this.props.handleGetsports(this.state.checked_id,this.state.filter_id);
        }
    }
    componentDidMount() {
        this.props.getAllSports();
        this.props.getAllFilters();
    }
    render(){
        const filters = this.props.filters;

        
        const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;

        let sports_id = '';
        filters.map(filter => {
            if(filter.user_id === user_id){
                sports_id = filter.sports_id;
                return;
            }
        });

        let sports_id_arr = sports_id.split(':');
        let flag=false;
        const sports=this.props.sports;

        const sport_content=sports.map(sport => 
            <div className="col-xs-6 col-md-3 order-item" data-order="10bet">
                <div className="checkbox text-left">
                    {
                        flag=false,
                         sports_id_arr.map(sport_id=>{
                            if(sport_id==sport.id){
                                flag=true;
                                return;
                            }
                        })
                    }
                    {
                        flag==true &&
                        <input name="sport{sport.id}" value={sport.id} id="bk_{sport.id}" type="checkbox" defaultChecked="true" onChange={this.handleToggle} data-indeterminate="true"/>
                    }
                    {
                        flag==false &&
                        <input name="sport{sport.id}" value={sport.id} id="bk_{sport.id}" type="checkbox"  onChange={this.handleToggle} data-indeterminate="true"/>
                    }
                    <label className="text-left" for="bk_{sport.id}">
                        <span className="custom_checkbox"></span>
                        <p>{sport.name}</p>
                    </label>
                </div>                                            
            </div>
        );
        return(
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="row">
                        <label className="control-label col-sm-2">
                            Desportos
                        </label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-xs-5 check_all_sports">
                                    {/* <div className="checkbox">
                                        <input id="check_all_sports" name="check_all_sports" className="check_all_group" type="checkbox" value="1"/>
                                        <label for="check_all_sports">
                                            <span className="custom_checkbox"></span>
                                            Check all
                                            <span className="help-block hidden"></span>
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row sports-list">
                                <div className="col-xs-12">
                                    <div className="sorted-list">
                                        <div className="row order-list">
                                            {sport_content}
                                            <div className="col-xs-6 col-md-3">
                                                <div className="checkbox">
                                                    <label>&nbsp;</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        sports: state.bets.sports,
        filters: state.admin.filters,
    }
}

export default connect(mapStateToProps, {getAllSports,getAllFilters})(FilterSport)