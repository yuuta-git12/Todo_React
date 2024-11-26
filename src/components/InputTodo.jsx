const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "45px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"  
}


export const InputTodo = (props) => {
    const {todoText,onChange,onClick} = props;
    return(
        <div style={style}>
            <input 
                placeholder="TODOを入力?" 
                value={todoText} 
                onChange={onChange}
            />
        <button onClick={onClick}>追加</button>
      </div>
    )
}