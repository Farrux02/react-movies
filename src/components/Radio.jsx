import React from "react";

class Radio extends React.Component {
    state = {
        categories: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {categories} = this.state

        return <form action="#" className="search-form">
        <p>
          <label>
            <input name="categories" type="radio" value='all' checked={categories === 'all'} onChange={this.handleChange} />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input name="categories" type="radio" value='movies' checked={categories === 'movies'} onChange={this.handleChange} />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input name="categories" type="radio" value='series' checked={categories === 'series'} onChange={this.handleChange} />
            <span>Series only</span>
          </label>
        </p>
      </form>
    }
}

export {Radio}