import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        <a href="/add">add *router testing</a>
        <a href="/list">list *router testing</a>
    </div>
)

export default Footer
