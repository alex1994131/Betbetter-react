import * as actionTypes from './actionTypes';
import axios from 'axios';
import { history } from "../../history"
// import { useToasts } from 'react-toast-notifications'

const options = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL:'http://localhost:5000'
        //baseURL:'http://betbetter.fun'
    };
};

export const getAllUsers = () => {
    return dispatch => { 
        axios.post(`/api/admin/users`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            
            localStorage.setItem('users', JSON.stringify(res.users));
            dispatch({ type: actionTypes.GOT_ALL_USERS, users: res.users })
        });
    }
};

export const DeleteUser = (user_id) => {
    
    return dispatch => {
        console.log(user_id); 
        axios.post(`/api/admin/deluser`, JSON.stringify(user_id), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('users', JSON.stringify(res.users));
            dispatch({ type: actionTypes.GOT_ALL_USERS, users: res.users })
            history.push("/admin"); 
        });
    }
};

export const getClientdata = () => {
    return dispatch => { 
        axios.post(`/api/admin/getclient`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('clientData', JSON.stringify(res.clientData[0]));
            dispatch({ type: actionTypes.GOT_CLIENT, clientData: res.clientData})
        });
    }
};

export const GETPrice = () => {
    return dispatch => { 
        axios.post(`/api/admin/getprice`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('memberprice', JSON.stringify(res.price[0]));
            dispatch({ type: actionTypes.GOT_PRICE, price: res.price[0].price});
        });
    }
};

export const GETPay = (data) => {
    localStorage.setItem('totalprice',data)
    return dispatch=>{
        history.push("/paypal")
    }
};

export const GETClient = (data) => {
    return dispatch => { 
        console.log(data);
        axios.post(`/api/admin/client`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            if(res.data.status==="true"){
                history.push("/pricing");
            }
        });
    }
};

export const getAllPayments = () => {
    return dispatch => { 
        axios.post(`/api/admin/payments`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            console.log(res);
            localStorage.setItem('payments', JSON.stringify(res.payments));
            dispatch({ type: actionTypes.GOT_PAYMENTS, payments: res.payments })
        });
    }
};

export const getAllFilters= () => {
    return dispatch => { 
        axios.post(`/api/admin/filters`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            console.log(res);
            localStorage.setItem('filters', JSON.stringify(res.filters));
            dispatch({ type: actionTypes.GOT_FILTERS, filters: res.filters })
        });
    }
};

// export const SetFilter = (data) => {
//     return dispatch => { 
//         axios.post(`/api/admin/setfilter`, JSON.stringify(data), {
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             baseURL:'http://localhost:5000'
//             //baseURL:'http://betbetter.fun'
//         })
//         .then(res => {
//             res = res.data;
//             console.log(res);
//             localStorage.setItem('filters', JSON.stringify(res.filters));
//             dispatch({ type: actionTypes.GOT_FILTERS, filters: res.filters })
//             history.push("/admin");
//         });
//     }
// };

export const SetFilter = (data) => {
    return dispatch => { 
        axios.post(`/api/admin/setfilter`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('filters', JSON.stringify(res.filters));
            dispatch({ type: actionTypes.GOT_FILTERS, filters: res.filters })
            history.push("/admin");
        });
    }
};

export const FilterActive = (data) => {
    return dispatch => { 
        axios.post(`/api/admin/filteractive`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            console.log(res);
            localStorage.setItem('filters', JSON.stringify(res.filters));
            dispatch({ type: actionTypes.GOT_FILTERS, filters: res.filters })
            history.push("/admin");
        });
    }
};

export const UpdateFilter = (data) => {
    return dispatch => { 
        axios.post(`/api/admin/Updatefilter`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
           if(res.status==true){
            // useToasts.addToast("content", {
            //         appearance: 'warning',
            //         autoDismiss: true,
            //       });
            alert("Update Success!")
           }
        });
    }
};



export const DelFilter= (filter_id) => {
    return dispatch => { 
        axios.post(`/api/admin/delfilter`, JSON.stringify(filter_id), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('filters', JSON.stringify(res.filters));
            dispatch({ type: actionTypes.GOT_FILTERS, filters: res.filters })
            history.push('/admin');
        });
    }
};

export const SetPrice = (price) => {    
    console.log(price)    
    return dispatch => { 
        axios.post(`/api/admin/price`, JSON.stringify(price), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('memberprice', JSON.stringify(res.price[0]));
            console.log(res);
            history.push('/pricing');
        });
    }
};

export const adminGetToken = (tokendata) => {        
   return dispatch=>{
    localStorage.setItem('apitoken', tokendata);
    dispatch({ type: actionTypes.GET_APITOKEN, apitoken: tokendata })
    history.push("/bet");
   }
};

export const SetFreeze = (data) => { 
    console.log(data)       
    return dispatch => { 
        axios.post(`/api/admin/updatefreeze`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            console.log(res)
            alert("Freeze is success");           
        });
    }
 };