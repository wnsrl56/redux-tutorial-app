import React, {useState} from 'react';

const TodoItem = (props) => {
    const {item, toggleItem, deleteItem, updateItem, toggleUpdateItem} = props;
    const {text, id, completed, update} = item;
    const [value, setValue] = useState('');

    return (<li>
        <input type={`checkbox`} checked={completed} onChange={() => toggleItem(id, !completed)} />
        <div
            style={{
                display: 'inline-block'
            }}
            onClick={() => toggleUpdateItem(id, true)}
        >
            <input style={{
                display: update ? 'inline-block' : 'none',
            }}
                onKeyUp={(e) => {
                    if(e.keyCode === 13) {
                        toggleUpdateItem(id, false);
                        updateItem(id, value);
                    }
                    setValue(e.target.value);
                }}
            />
            <span style={{
                display: update ?  'none' : 'inline-block',
                textDecoration: completed ? 'line-through': 'none',
                fontSize: '18px',
                padding: '3px 10px'
            }}

            >
                {text}
            </span>
            <button  onClick={() => deleteItem(id)}>{`delete`}</button>
        </div>
    </li>);
};

export default TodoItem;
