const INITIAL_STATE={
    nama:'',
    islogin:false
}


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,islogin:true,nama:action.payload}
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}