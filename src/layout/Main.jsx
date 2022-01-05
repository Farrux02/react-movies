import React from "react"
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json()) // после получения через фетч, сначала приходит ответ респонс, который мы преобразуем в json
            .then(data => this.setState({movies: data.Search, loading: false})) // json элемент приходит в дата, и мы через сетстэйт меняем movies, получаем из дата элементы с коючом Search
    }

    movieSearch = (str, categorie = 'all') => { // задаем два параметра str, categorie
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${categorie !== 'all' ? `&type=${categorie}` : ''}`) // изначально фильтр стоит all, если пользователь сам задает то фильтр меняется
            .then(response => response.json()) // после получения через фетч, сначала приходит ответ респонс, который мы преобразуем в json
            .then(data => this.setState({movies: data.Search, loading: false})) // json элемент приходит в дата, и мы через сетстэйт меняем movies, получаем из дата элементы с коючом Search
    }

    render() {
        const {movies, loading} = this.state;

        return <main className="container content"> 
            <Search movieSearch={this.movieSearch}/> {/* передаем метод movieSearch в Search.jsx */}
            {
                loading ? <Preloader/> : (<Movies movies={movies}/>) // отправляем const movies в Movies.jsx
            }
        </main> 
    } 
}

export {Main}