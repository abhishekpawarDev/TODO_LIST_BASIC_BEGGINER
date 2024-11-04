import React, { useState } from "react";

const TodoList = ()=>{
    const[data, setData] = useState();
    const [todoList , setTodoList] = useState([{}]);

    const addTodoList = ()=>{
        setTodoList([...todoList, { name: data}]);
        setData("");
    }
    return(
        <div style={styles.main}>
            <h1 style={{ fontFamily: 'Segoe Script', }}>Custom Todo List Creat </h1>
            <input 
            type="text"
            placeholder="Enter Todo Name"
                onChange={(e) => setData(e.target.value)}
                value={data}
                style={styles.placeholder}
            />
            <button onClick={addTodoList} style={styles.button}>Enter</button>
            {todoList.map((data , index)=>(<div>
                <p style={styles.liststyle}>{data.index} {data.name}</p>
            </div>
            ))}
        </div>
    );
}

const styles = {
    main:{
        flex: 1,
        marginTop: 100,
        marginLeft: 300,

    },
    liststyle:{
        fontFamily: 'Segoe Script',
        fontSize: 25,
    },
    placeholder:{
        width:500,
        height:30,
        borderWidth:2 ,
        fontSize:20,
        fontFamily: 'Segoe Script',
    },
    button:{
        width:80,
        height:35,
        marginLeft:10,
    }

    // *{
    //     fontFamily: 'Segoe Script',
    // }
}
export default TodoList;