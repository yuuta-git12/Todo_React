import { useState } from 'react'
import './App.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1","TODOです2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODOでした1","TODOでした2"]);
  

  // テキストフォームに値を入力した場合の処理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if(todoText === "") return; //テキストが空の時は追加の実行をしない
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);

  }

  return (
    <>
      <div className='input-area'>
        <input placeholder="TODOを入力?" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => ( 
              // keyを忘れないように
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  {/* 新しくアロー関数を定義する書き方にしないと読み込みのたびにonClickDeleteが実行される */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo) => (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </>
   
  )
};

