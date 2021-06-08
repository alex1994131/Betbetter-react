import React, { Component } from 'react';
import { Switch, Route,Redirect, Router } from 'react-router-dom';

import { connect } from 'react-redux'
import { history } from "./history"
import Admin from './components/admin'
import Public from './components/public';
import ValueBets from './components/valuebets';
import MainHome from './components/Home';
import Pricing from './components/pricing';
import Pay from './components/paypal';
import SureBet from './components/sureBet';
import SignIn from './components/SignIn';
import SignUp from './components/signup';
import Edit from './components/fillteredit';
import PT_MainHome from './components/pr/Home';
import PT_Pricing from './components/pr/pricing';
import PT_SureBet from './components/pr/sureBet';
import PT_Public from './components/pr/public';
import PT_Edit from './components/pr/fillteredit';
import {is_session} from './store/actions/usersActions';
import {pay_manage} from './store/actions/usersActions';
import {admin_manage} from './store/actions/usersActions';

const RoleAuth=(data)=>{
    if(admin_manage()){
        return data.children;
    }
    else{
        if(pay_manage()){
            console.log(data);
            if(data.location.pathname==="/admin"){
                return <Redirect to={'/bet'} />;
            }
            else{
                return data.children;
            }
        }
        else{
            if(is_session()){
                if(data.location.pathname==="/pricing"||data.location.pathname==="/pt_pricing"||data.location.pathname==="/paypal"){
                    return data.children;
                }
                else{
                    return  <Redirect to={'/pricing'} />;
                }  
            }
            else{
                return  <Redirect to={'/'} />;
            }
        }
    }
}
    
    


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route component={SignIn} path="/signin" />
                    <Route component={SignUp} path="/signup" />
                    <Route component={MainHome} path="/" exact/>
                    <Route component={PT_MainHome} path="/pt"/>
                    <RoleAuth>
                        <Route component={Pricing} path="/pricing"/>
                        <Route component={PT_Pricing} path="/pt_pricing"/>
                        <Route component={Pay} path="/paypal"/>
                        <Route component={Public} path="/public"/>
                        <Route component={PT_Public} path="/pt_public"/>
                        <Route component={PT_Edit} path="/pt_public_filter_edit"/>
                        <Route component={Edit} path="/public_filter_edit"/>
                        <Route component={SureBet} path="/bet"/>
                        <Route component={PT_SureBet} path="/pt_bet"/>
                        <Route component={ValueBets} path="/valuebets"/>
                            
                        <Route component={Admin} path="/admin"/>
                            
                    </RoleAuth>
                    {/* <PayAuth>
                        <Route component={Public} path="/public"/>
                        <Route component={PT_Public} path="/pt_public"/>
                        <Route component={PT_Edit} path="/pt_public_filter_edit"/>
                        <Route component={Edit} path="/public_filter_edit"/>
                        <Route component={SureBet} path="/bet"/>
                        <Route component={PT_SureBet} path="/pt_bet"/>
                        <Route component={ValueBets} path="/valuebets"/>
                        <Route component={Pricing} path="/pricing"/>
                        <Route component={PT_Pricing} path="/pt_pricing"/>
                    </PayAuth> */}
                    {/* <RequireAuth>
                        <Route component={Pricing} path="/pricing"/>
                        <Route component={PT_Pricing} path="/pt_pricing"/>
                    </RequireAuth> */}
                </Switch>
            </Router>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.users.isAuthenticated
})
export default connect(mapStateToProps)(App);
