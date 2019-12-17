import React, { Component } from 'react';
// import store from './store'
import {connect} from 'react-redux'

const TodoList = (props)=>{
    let {inputValue,inputChange,clickBtn,list} = props
        return (
            <div>
                <div>
                    <input 
                    value={inputValue} 
                    onChange={inputChange}/>
                    <button onClick={clickBtn}>Submit</button>
                </div>
                <ul>
                    {
                        list.map((item,index)=>{
                            return (
                            <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
    );
}

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = store.getState()
//     }
    
//     render() { 
//         let {inputValue,inputChange,clickBtn} = this.props
//         return (
//             <div>
//                 <div>
//                     <input 
//                     value={inputValue} 
//                     onChange={inputChange}/>
//                     <button onClick={clickBtn}>Submit</button>
//                 </div>
//                 <ul>
//                     {
//                         this.props.list.map((item,index)=>{
//                             return (
//                             <li key={index}>{item}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
//     // inputChange(e){
//     //     console.log(123)
//     // }
// }
//从provider拿到的state映射到本组件的props有哪些
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            //console.log(e.target.value)
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickBtn(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);