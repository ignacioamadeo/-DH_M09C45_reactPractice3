import React from 'react';

/*Hacer que el componente /component/MoviesList.js, el cual podemos crear como un componente 
sin estado, reciba las props enviadas desde el componente /component/Movies.js y se encargue 
de renderizar los datos recibidos: */

function MovieList(props) {
    return (
        <React.Fragment>

            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.rating}</td>
                <td>{props.awards}</td>
                <td>{props.length}</td>
            </tr>

        </React.Fragment>
    )
}
export default MovieList;