export const addNumber = (value) =>({
    type:"ADD",
    payload: value,
})


export const subtractNumber = (value) =>({
    type:"SUBTRACT",
    payload: value,
}) 

export const multiplicationNumber = (value) =>({
    type:"MULTIPLICATION",
    payload: value,
})      

export const divisionNumber = (value) =>({
    type:"DIVISION",
    payload: value,
})   

export const modulusNumber = (value) =>({
    type:"MODULO",
    payload: value,
})   

export const powerNumber = (value) =>({
    type:"POWER",
    payload: value,
})   
export const refreshNumber = (value) =>({
    type:"REFRESH",
})   