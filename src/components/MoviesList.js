import React, { Component } from 'react'
import {movies$} from '../Helpers/movies'

export class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            listFilms : []
        }
    }

    componentDidMount() {
        movies$.then(movies =>{
            this.setState({listFilms : movies})
        })

        console.log(movies$, this.state.listFilms)
    }
    

    render() {
        return (
            <h1>
                liste des films : {this.state.listFilms.length}
            </h1>
        )
    }
}

export default MoviesList
