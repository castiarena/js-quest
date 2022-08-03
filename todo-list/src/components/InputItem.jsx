function InputItem(props) {

    const handleOnSubmit = function(event) {
        event.preventDefault()
        props.onInput('aca')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="type a new Item"/>
            <button type="submit">Load</button>
        </form>
    )
}

export default InputItem
