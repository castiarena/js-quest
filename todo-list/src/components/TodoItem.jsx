function TodoItem(props){


    return(
        <li
            style={{
                textDecoration: props.done ? 'line-through' : 'none',
                color: props.done ? 'blue' : 'green'
            }}
        >
            {props.title}
        </li>
    )
}

export default TodoItem
