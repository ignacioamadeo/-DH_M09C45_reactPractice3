import Genre from './Genre';
import React, { Component } from 'react';

/*PARTE1: Hacer que el componente /components/GenresInDb.js sea ahora un componente stateful para poder 
conectarse con nuestro back-end a través de una API, la cual ya está armada y su endpoint es: 
/api/genres. Esta debe exponer de forma dinámica los géneros de las películas: */

class GenresInDb extends Component {

/*PARTE 2: Ahora, debemos ingresar al componente /components/GenresInDb.js y crear un método 
que maneje el evento onMouseOver de forma tal que al pasar el mouse sobre el elemento <h6>:
El card-body (el cual encierra a los géneros de las películas) debe cambiar el fondo, 
aplicando la siguiente clase de bootstrap: bg-secondary. */

    cambiarFondoOn(){
        document.querySelector("h6").classList.add('bg-secondary')
    }

    cambiarFondoOff(){
        document.querySelector("h6").classList.remove('bg-secondary')
    }


    constructor(props) {
        super(props);
        this.state = {
            genresList: []
        }
    }

    /*PARTE1: FETCH: Ahora debemos establecer la conexión con nuestro back-end con React, 
    podemos usar cualquier biblioteca AJAX, recomendamos utilizar
    windows.fetch. Esto lo debemos programar en el momento en que el componente se monte, 
    valiéndonos del método componentDidMount(): */
    componentDidMount() {
        fetch('/api/genres')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                //console.log(genres)
                this.setState({ genresList: genres.data })
            })
            .catch(error => console.log(error))
    }

    /*PARTE1: RENDER: Ahora debemos proceder a renderizar lo que se le mostrará al usuario de forma dinámica: */
    render() {
        return (
            <React.Fragment>

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" 
                            /*PARTE 2: Cambio de colores titulo con mouseover: */
                            onMouseOver={this.cambiarFondoOn} onMouseOut={this.cambiarFondoOff} >Genres in Data Base</h6>
                        </div>
                        <div className="card-body fondoCaja"> <div className="row">
                            {this.state.genresList.map((genre, index) => { return <Genre {...genre} key={index} /> })}
                        </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
            )
    }


} /*EXPORTO COMPONENTE: */
export default GenresInDb;