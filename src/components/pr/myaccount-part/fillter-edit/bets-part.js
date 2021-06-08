import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { getAllBookmarks} from '../../../../store/actions/betActions';
import { getAllFilters} from '../../../../store/actions/adminActions';

class FilterBet extends Component {
    constructor() {
        super();
        this.state = {
          checked_id: '',
          filter_id:'',
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(evt) {
        const value=evt.target.value
        let bets_id_arr = this.state.checked_id.split(':');
        let flag=false;
        bets_id_arr.map((bet_id,key)=>{
            if(bet_id==value){
                flag=true;
                bets_id_arr.splice(key,1);
                return;
            }
        })
        if(flag===false){
            bets_id_arr.push(value);
        }
        let bet_check='';
        bets_id_arr.map(bet_id=>{
            if(bet_check==''){
                bet_check=bet_id;
            }
            else{
                bet_check+=":"+bet_id;
            }  
        })
        this.setState({
            checked_id:bet_check,
        });
        this.props.handleGetBookmarks(bet_check,this.state.filter_id);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.filters !== prevProps.filters){
            const filters = this.props.filters;
            const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;
            let bet_id = '';
            filters.map(filter => {
                if(filter.user_id === user_id){
                    bet_id = filter.bookmark_id;
                    this.setState({
                        filter_id:filter.id,
                    });
                    return;
                }
            });
            this.setState({
                checked_id:bet_id,
            })
            this.props.handleGetBookmarks(this.state.checked_id,this.state.filter_id);
        }
    }


    componentDidMount() {
        this.props.getAllBookmarks();
        this.props.getAllFilters();
    }
    render(){
        const bookmarks=this.props.bookmarks;
        const filters = this.props.filters;

        
        const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;

        let bet_id = '';
        filters.map(filter => {
            if(filter.user_id === user_id){
                bet_id = filter.bookmark_id;
                return;
            }
        });
        let bets_id_arr = bet_id.split(':');
        let flag=false;
        
        const bookmark_content=bookmarks.map(bookmark => 
            <div className="col-xs-6 col-md-3 order-item" data-order="10bet">
                <div className="checkbox text-left">
                    {
                        flag=false,
                         bets_id_arr.map(bet_id=>{
                            if(bet_id==bookmark.id){
                                flag=true;
                                return;
                            }
                        })
                    }
                    {
                        flag==true&&
                        <input name="bookmark{bookmark.id}" value={bookmark.id} id="bk_{bookmark.id}" type="checkbox" defaultChecked="true" onChange={this.handleToggle} data-indeterminate="true"/>
                    }
                     {
                        flag==false&&
                        <input name="bookmark{bookmark.id}" value={bookmark.id} id="bk_{bookmark.id}" type="checkbox" onChange={this.handleToggle} data-indeterminate="true"/>
                    }
                    <label className="text-left" for="bk_{bookmark.id}">
                        <span className="custom_checkbox"></span>
                        <p>{bookmark.name}</p>
                    </label>
                </div>                                            
            </div>
        );
                            
        return(
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="row">

                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label col-xs-12 control-label pull-left labelBkTitle">
                            Casas de apostas
                        </label>
                        <div className="col-sm-10">
                            <div className="check_all_bk">
                                {/* <div className="sorted-list">
                                    <div className="checkbox checkAllInput">
                                        <input id="check_all_bookmakers_1" type="checkbox" name="check_all_bookmakers_1" value="1"/>
                                        <label for="check_all_bookmakers_1">
                                            <span className="custom_checkbox"></span>
                                            <p>Check all</p>
                                            <span className="help-block hidden"></span>
                                        </label>
                                    </div>
                                </div> */}
                            </div>
                            <div className="bookmakers1_list">
                                <div className="sorted-list">
                                    <div className="row order-list">
                                              {bookmark_content}           
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
        );
    }
}

const mapStateToProps = state => {
    return {
        bookmarks: state.bets.bookmarks,
        filters: state.admin.filters,
    }
}

export default connect(mapStateToProps, {getAllBookmarks,getAllFilters})(FilterBet)