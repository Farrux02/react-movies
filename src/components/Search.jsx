import React from "react";

class Search extends React.Component {
  state = {
    search: "", // стейт для проверки инпута для поиска, изначально пустой
    categories: "all", // стейт для проверки фильтра, изначально стоит all
  };

  handleKey = (event) => { 
    if (event.key === "Enter") { 
      this.props.movieSearch(this.state.search, this.state.categories); // получаем метод из Main.jsx, для параметра str задаем то, что вводилось в инпуте
    } // для параметра categorie задаем тот фильтр который выбрал юзер. Параметры задаются после нажатия на enter
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ categories: event.target.dataset.type }), // берем dataset с именем type для отслеживания инпута и задаем в стейт
      () => {
        this.props.movieSearch(this.state.search, this.state.categories);
      }
    );
  };

  render() {
    const { categories, search } = this.state;

    return (
      <div className="row">
        <div classNameName="col s12">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={search} // в value берем набранный текст юзером, который передается в стейт
              onChange={(event) =>
                this.setState({ search: event.target.value }) // передаем набранный текст юзером в стейт
              }
              onKeyDown={this.handleKey} // при нажатии на клавишу срабатывает функция handleKey
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.movieSearch(search, categories) // при клике передаем нужные параметры в функцию movieSearch
              }
            >
              Search
            </button>
          </div>
        </div>
        <form action="#" className="search-form">
          <p>
            <label>
              <input
                name="categories"
                type="radio"
                value="all"
                checked={categories === "all"} // если стейт categories совпадает с value, выбирается этот инпут
                onChange={this.handleFilter} // применяется функция которая в стейт берет радио инпут который выбрал юзер
                data-type="all" // задаем дата тайп для отслеживания radio input 
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="categories"
                type="radio"
                value="movies"
                checked={categories === "movie"}
                onChange={this.handleFilter}
                data-type="movie"
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="categories"
                type="radio"
                value="series"
                checked={categories === "series"}
                onChange={this.handleFilter}
                data-type="series"
              />
              <span>Series only</span>
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export { Search };
