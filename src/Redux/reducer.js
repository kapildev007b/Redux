import { combineReducers } from "redux"



const initialAddState = {
    result : 0
}
const addReducer = (state = initialAddState,action) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result:action.payload,
            }
            case 'REFRESH':
                return initialAddState
            default:
                return state
    }
}

const initialSubtractState = {

    
    result : 0
}
const subtractReducer = (state = initialSubtractState,action) =>{
    switch(action.type){
        case 'SUBTRACT':
            return{     
                ...state,
                result:action.payload ,
            }
            case 'REFRESH':
                return initialSubtractState
            default:
                return state
    }
}

const initialmultiplicationState = {
    result : 1,
}
const multiplicationReducer = (state = initialmultiplicationState,action) =>{
    switch(action.type){
        case 'MULTIPLICATION':
            return{
                ...state,
                result: action.payload ,
            }
            case 'REFRESH':
                return initialmultiplicationState
            default:
                return state
    }
}




const initialdivisionState = {
    result : 0
}
const divisonReducer = (state = initialdivisionState,action) =>{
    switch(action.type){                                       
        case 'DIVISION':  
            return{                              
                ...state,
                result:  action.payload,
            }
            case 'REFRESH':
                return initialdivisionState
            default:
                return state
    }
}


const initialmodulusState = {
    result : 0
}
const modulusReducer = (state = initialmodulusState,action) =>{
    switch(action.type){
        case 'MODULO':
            return{
                ...state,
                result: action.payload,
            }
            case 'REFRESH':
                return initialmodulusState
            default:
                return state
    }
}

const initialpowerState = {
    result : 0
}
const powerReducer = (state = initialpowerState,action) =>{
    switch(action.type){
        case 'POWER':
            return{
                ...state,
                result: action.payload,
            }
            case 'REFRESH':
                return initialpowerState
            default:
                return state
    }
}

// const initialrefreshState = {
//     result : 0
// }
// const refreshReducer = (state = initialrefreshState,action) =>{
//     switch(action.type){
//         case 'REFRESH':
//             return{
//                 ...state,
//                 result: action.payload * 0,
//             }
//             default:
//                 return state
//     }
// }

const rootReducer = combineReducers({
    add: addReducer,
    subtract: subtractReducer,
    multiplication: multiplicationReducer,
    division : divisonReducer,
    modulus: modulusReducer,
    power:powerReducer,
    // refresh:refreshReducer
})

export default rootReducer