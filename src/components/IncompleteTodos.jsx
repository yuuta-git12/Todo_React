export const IncompleteTodos = (props) => {
    const {todos,onClickComplete,onClickDelete} = props;
    return (
        <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => ( 
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
    )
}