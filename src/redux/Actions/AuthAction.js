
export const Login=(nama)=>{
    return{
        type:'LOGIN',
        payload:nama
    }
}
export const Logout=()=>{
    return{
        type:'LOGOUT'
    }
}