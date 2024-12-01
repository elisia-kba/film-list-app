import React from 'react';
import styles from './Film.module.css';


interface Props { }


interface FilmState {
  films: string[]; //Tableau pour stocker les noms des films
  newFilm: string; //variable pour ajouter un film
}

export default class BeerList extends React.Component<Props, FilmState> {
  state: FilmState = {
    films: [],
    newFilm: ''
  };

  //Permet de mettre à jour la variable newFilm
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ newFilm: event.target.value });
  };

  //Méthode pour ajouter un nouveau film dans la liste
  add = (): void => {
    const { newFilm, films } = this.state;
    if (newFilm.trim() === "") return;
    this.setState({
      films: [newFilm,...films], // On ajoute le film en première position
      newFilm: ""
    });
  };
  //Méthode pour supprimer un film
  remove(index: number): void {
    this.setState((prevState) => ({
      films: prevState.films.filter((_, i) => i !== index)
    }));
  }

  //Méthode du rendu du composant
  render() {
    return (
      <div className={styles.container}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter Film name"
              value={this.state.newFilm}
              onChange={this.handleInputChange}
              style={{ marginRight: "10px" }}
            />

            <button onClick={this.add}>Add Film</button>
          </div>
          <ul>
            {this.state.films.map((Film, index) => (
              <li key={index}>
                {Film}
                <div className={styles.imageButton}>
                  <button onClick={() => this.remove(index)}>
                    <img src="/corbeille.png" alt="Delete" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>

    );
  }
}
