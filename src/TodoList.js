import React, {Component} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }

    addTodo(val){
        this.setState({
            todos: [...this.state.todos, val]
        })
    }
    deleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(el => el.id !== id)
        })
    }
    update(id, updated){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return {...todo, task: updated}
            }

            return todo;
        })

        this.setState({todos: updatedTodos})
    }
    toggleCompleted(id){
        const updatedTodos = this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }

            return todo;
        })

        this.setState({todos: updatedTodos})
    }
    render(){
        const todos = this.state.todos.map(todo =>(
            <Todo task={todo.task}
             id={todo.id}
              key={todo.id} 
              completed={todo.completed}
              deleteTodo = {this.deleteTodo}
              updateTodo={this.update}
              toggleCompleted={this.toggleCompleted}
              />
        ))
        return(
            <div className='TodoList'>
                <h1>Todo List! <span>A simple React Todo List App</span></h1>
                 <ul>{todos}</ul>
                 <TodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;