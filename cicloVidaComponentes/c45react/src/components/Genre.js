import React from 'react';

/*Ya solo resta crear el componente /component/Genre.js. Podemos crearlo como un 
componente sin estado el cual recibirá las props enviadas desde el componente 
/component/GenresInDb.js y renderizar los datos: */

function Genre(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;