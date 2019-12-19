import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api/api.js'

import styled from 'styled-components'
import 'react-table/react-table.css'

const Wrapper = styled.div `padding: 0  40px 40px 40px`

const Delete = styled.div `color: #ef9bof; cursor: pointer`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class DeleteMovie extends Component{
    deleteUser = (e)=>{
        e.preventDefault()
        if(window.confirm(`are you sure want to delete ${this.props.id} permanently ?`)){
            api.deleteMovieById(this.props.id) 

            window.location.reload()
        }
    }
    render(){
        return(
            <Delete onClick={this.deleteUser}>Delete</Delete>
        )
    }
}

class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/updatemovie/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state={
            movies: [],
            columns: [],
            isLoading: false,
        }
    }
    componentDidMount = async()=>{
        this.setState({isLoading: true})

        await api.getAllMovies().then(movies=>{
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }
    render() {
        const { movies, isLoading} = this.state
        console.log('TCL: MovieList->render->movies',movies)
        console.log('successfull')
        
        const columns=[
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
            Cell: props=> <span>{props.value.join(' / ')}</span>,
            },
            {
                Header:'Delete row',
                accessor: '',
                Cell: function(props){
                    return(
                        <span>
                            <DeleteMovie id={props.original._id}></DeleteMovie>
                        </span>
                    )
                }
            },
            {
                Header:'',
                accessor:'',
                Cell: function(props){
                    return(
                    <span>
                        <UpdateMovie id={props.original._id} />
                    </span>
                    )
                   
                }
            }

        ]

        var showTable = true
        if(!movies.length){
            showTable = false
            return(
                <h4>No data row added till now</h4>
            )
        }
        return (
            <Wrapper>
                {
                    showTable &&(
                        <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                    )
                }
                
            </Wrapper>
        )
    }
}

export default MoviesList
