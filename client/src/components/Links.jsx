import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``
const Item = styled.div.attrs({
    className: 'collapase navbar-collapse',
})``

class Links extends Component{
    render(){
        return(
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My First Mern Application
                </Link>
                <Collapse>   
                    <List>
                        <Item>
                            <Link to="/allMovie" className="nav-link">
                               All Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/createMovie" className="nav-link">
                            Create Movie
                            </Link>
                            <Link to="/" className="nav-link">
                                ok
                            </Link>
                        </Item> 
                    </List> 
                </Collapse>
            </React.Fragment>
        )
    }
}
export default Links