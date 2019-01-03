import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Switch, Route } from 'react-router-dom'

const App = () => (
    <div>
        <Switch>
            <Route exact path='/add' component={AddTodo}/>
            <Route path='/list' component={VisibleTodoList}/>
        </Switch>

        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
