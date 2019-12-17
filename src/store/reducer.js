const defaultState = {
    inputValue:'JSPang',
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type==='change_input'){
        console.log(state)
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='add_item'){
        console.log(state)
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}