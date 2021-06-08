import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import {getAllFilters} from '../../../store/actions/adminActions'
class PageContainer extends Component {
    constructor() {
        super();

        this.state = {
            filter_name:''
        };
    }
    componentDidMount(){
        this.props.getAllFilters();
    }
  render() {
      const filters=this.props.filters;
      let filter_name='';
      const user_id = jwt.decode(localStorage.getItem('jwtToken')).id;
      filters.map(filter=>{
        if(filter.user_id==user_id && filter.active==1){
            filter_name=filter.filter_name;
        }
      });
        if(filter_name==''){
            filter_name="Demo";
        }
        console.log(filter_name);
    return (
        <div id="sidebar-wrapper" className=" fullHeight " style={{min_height: "650px"}}>
            <div className="subContainer height100">
                <div className="top-header"></div>
                <div className="col-xs-12 padding10">
                    <div className="filterPanel">
                        <span className="filterHeader arbsTypeSettings">Arbs type:</span>
                        <div className="list arbsType">
                            <ul>
                                <li>
                                    <div className="radio">
                                        <label htmlFor="isPrematchArb">
                                            <input type="radio" id="isPrematchArb" name="is_live" value="true"
                                                    checked="true"/>
                                            Prematch
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <span className="filterHeader zoomSettings">Zoom:</span>
                        <div className="list zoomSettingsList">
                            <ul className="zooming">
                                <div className="selectContainer">
                                    <select name="per_page" className="zoomOption">
                                        <option value="100" selected="selected">100%</option>
                                        <option value="110">110%</option>
                                        <option value="120">120%</option>
                                    </select>
                                </div>
                            </ul>
                        </div>

                        <span className="filterHeader sortedFilter">Definições:</span>
                        
                        <span className="bookiesInArb">Tipo de cotas:</span>
                        <div className="list zoomSettingsList">
                            <ul className="zooming">
                                <div className="selectContainer">
                                    <select name="per_page" className="zoomOption">
                                        <option value="decimal" selected="selected">Decimal</option>
                                        <option value="hongkong">Hong Kong</option>
                                    </select>
                                </div>
                            </ul>
                        </div>

                       
                        <span className="filterHeader">Filtros:</span>
                        <div className="filtersList list">
                            <a href="/pt_bet" className="filter-error-popup" data-toggle="popover" data-trigger="focus" data-content="Maximum %s active filters"></a>
                            <ul>
                                <li><input type="checkbox" value="28783" id="sidebar_filter28783" name="demo"
                                            checked="true"/>
                                    <label title="demo" data-id="sidebar_filter28783" className="editLinkLabel">
                                        <span className="checkbox"></span>
                                        <p>{filter_name}</p>
                                    </label>
                                    <a href="#" data-id="28783"
                                        target="_blank">
                                        <span className="editLink"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <span className="filterHeader">Ocultas:</span>
                        <div>
                            <ul style={{textDecoration:"none",paddingInlineStart:"0px"}}>
                                <li style={{lineHeight:"1"}}>
                                    <a style={{color:"#3C92C5",fontSize:"12px"}} href="#">0</a><span style={{color:"#3C92C5",fontSize:"12px"}}> surebets</span>
                                </li>
                                <li style={{color:"#3C92C5",fontSize:"12px"}} style={{lineHeight:"1"}}>
                                    <a href="#">0</a><span style={{color:"#3C92C5",fontSize:"12px"}}> eventos</span>
                                </li>
                                <li style={{lineHeight:"1"}}>
                                    <a style={{color:"#3C92C5",fontSize:"12px"}} href="#">0</a><span /><span style={{color:"#3C92C5",fontSize:"12px"}}> resultados</span>
                                </li>
                                <li style={{lineHeight:"1"}}>
                                    <span><a style={{color:"#3C92C5",fontSize:"12px"}} href="#">1</a></span><span style={{color:"#3C92C5",fontSize:"12px",lineHeight:"0.5"}}> eventos da casa de apostas</span>
                                </li>
                            </ul>
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
        filters: state.admin.filters,
    }
}
export default connect(mapStateToProps, {getAllFilters})(PageContainer)

