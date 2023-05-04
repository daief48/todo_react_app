import React from 'react'

export default function ToDoList(props) {
    
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" onClick={() => {
                    props.onSelect(props.id)
                }}/>
                <li>{props.text}</li>
            </div>
        </>
    )
}
