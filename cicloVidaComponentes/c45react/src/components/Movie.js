import MovieList from './MovieList';
import React, { Component } from 'react';

class Movie extends Component {


	constructor(props) {
		super(props);
		this.state = {
			moviesList: []
		}
	}

	componentDidMount() {
		fetch('/api/movies')
			.then(respuesta => {
				return respuesta.json()
			})
			.then(movies => {
				this.setState({ moviesList: movies.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<React.Fragment>
				{/*<!-- TITULOS TABLA: -->*/}
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tbody>
									{/*<!-- IMPORTAR DATOS TABLA: -->*/}
									{this.state.moviesList.map((title, index) => { return <MovieList {...title} key={index} /> })}
								</tbody>
							</table>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}
}


export default Movie;