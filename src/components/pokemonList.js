import React, {Component} from 'react'
import PokemonList from '../components/List'


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonData: [],
      pokemonDetails : [],
      offset : 0,
    }
  }

  componentDidMount() {
    this.getMorePokemon();
  }


  getMorePokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.state.offset * 10}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {
          this.state.pokemons.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              if (data) {
                var temp = this.state.pokemonDetails
                temp.push(data)
                this.setState({pokemonDetails: temp})
              }            
            })
            .catch(console.log)
          })
        })        
      }
    })
    .catch(console.log)
    
  }

  
  
  render() {
    const {pokemonDetails} = this.state;
    
    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokemonList pokemon={pokemon} />);
    });

    return (
      <div className="container">
        <div className="card-columns">
          {renderedPokemonList}

        </div>
      </div>
    );
  }
}
 
export default List;


