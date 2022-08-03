import React from 'react'
import InputItem from "./components/InputItem";
import TodoItem from "./components/TodoItem";

/**
 * Todo Items
 * @type {[{title: string, done: boolean, key: string}]}
//  */
// const todoItems = [
//     {
//         title: 'Learn Javascript',
//         done: false,
//         key: 'learn-javascript'
//     },
//     {
//         title: 'Learn React.js',
//         done: true,
//         key: 'learn-react-js'
//     },
// ]

function App() {
    const [todoItems, setTodoItems] = React.useState([
        {
            title: 'Learn Javascript',
            done: false,
            key: 'learn-javascript'
        },
        {
            title: 'Learn React.js',
            done: true,
            key: 'learn-react-js'
        },
    ])


    return (
        <div>
            <h1>TodoList</h1>
            <button onClick={() => {
                setTodoItems((state) => [
                    ...state,
                    {
                    title: 'learn how to code',
                    done: false,
                    key: 'exampleballbala'
                }])
            }}>Add todo example</button>

            <InputItem onInput={(algo) => console.log(algo)} />
            <ul>
                {
                    /**
                    ** https://reactjs.org/docs/lists-and-keys.html
                    **/
                }
                {todoItems.map((todoData) => (
                    <TodoItem
                        key={todoData.key}
                        title={todoData.title}
                        done={todoData.done}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
