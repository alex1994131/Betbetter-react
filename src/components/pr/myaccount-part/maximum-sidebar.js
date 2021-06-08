import React, { Component } from 'react';


class MaxmumSidebar extends Component {
  render() {
    return (
        <div className="col-lg-2 col-md-3 col-sm-10 col-xs-12" id="sidebar1">
            <div className="bs-docs-sidebar sidebar-content hidden-xs hidden-sm">
                <ul className="nav nav-list sidebar bs-docs-sidenav affix-top">
                    <li className="active">
                        <a style={{marginRight:'0px'}} className="dashboard" data-toggle="pill" 
                        href="https://www.betburger.com/profile#main">Painel</a>
                    </li>
                    
                    
                    <li>
                        <a style={{marginRight:'0px'}} className="payments" data-toggle="pill"
                           href="https://www.betburger.com/profile#payments">Pagamentos</a>
                    </li>
                    
                    <li>
                        <a style={{marginRight:'0px'}} className="password" data-toggle="pill"
                           href="https://www.betburger.com/profile#settings_tab">Definições</a>
                    </li>

                    <li>
                        <a style={{marginRight:'0px'}} className="multi" data-toggle="pill"
                           href="https://www.betburger.com/profile#multi_filters">Filtros</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
  }
}

export default MaxmumSidebar;
