import React, {Component} from 'react'
import api from '../api/api.js'
import styled from 'styled-components'

const Title=styled.h1.attrs({
    className: 'h1',
})``
const Wrapper=styled.div.attrs({
    className: 'form-group',
})
` 
margin: 0 30px ;
`

const Label=styled.label`margin: 5px`

const InputText=styled.input.attrs({
    className: 'form-control',
})`margin:5px`

const Button= styled.button.attrs({
    className: `btn btn-primary`,
})`margin: 15px 15px 15px 5px`

const CancelButton=styled.a.attrs({
    className: `btn btn-danger`,
})`margin 15px 15px 15px 5px`



class MovieInsert extends Component{
    constructor(props){
        super(props)
        
        this.state={
            name:'',
            rating:'',
            time:'',
        }
    }
    handleChangeInputName= async (event)=>{
        const name=event.target.value
        this.setState({name})
    }
    handleChangeInputRating= async (event)=>{
        const rating=event.target.validity.valid?event.target.value:this.tate.rating
        this.setState({rating})
    }
    handleChangeInputTime= async(event)=>{
        const time=event.target.value
        this.setState({time})
    }

    handleIncludeMovie = async()=>{
        const{name, rating, time} = this.state
        const arrayTime = time.split('/')
        const payload = {name, rating, time: arrayTime}

        await api.insertMovie(payload).then((res)=>{
            window.alert(`Movie inserted successfully`)
            this.setState({
                name:'',
                rating:'',
                time:'',
            })
        })
    }

    render(){
        const{ name, rating, time}=this.state
        return(
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name:</Label>
                <InputText type="text" 
                            value={name} 
                            //size={30}
                           // placeholder="movie name"
                            onChange={this.handleChangeInputName}>
                </InputText>
                <br></br>

                <Label>Rating:</Label>
                <InputText type="number" 
                            //placeholder="0.0"
                            step="0.1" 
                            lang="en-US"
                            min="0"
                            max="10"
                            patter="[0-9]+([,\.][0-9]+)?"
                          
                            value={rating}
                            onChange={this.handleChangeInputRating}
                ></InputText>
                <br></br>

                <Label>Time:</Label>
                <InputText
                           // placeholder="current Time"
                            type="text"
                            value={time}
                            //size={30}
                            onChange={this.handleChangeInputTime}
                ></InputText>
                <br></br>

                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/allMovie'}>cancel</CancelButton>
            </Wrapper>
        )
    }
}
export default MovieInsert