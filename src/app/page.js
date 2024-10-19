"use client"; // Indique que c'est un composant côté client

import { useState } from 'react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche de l'utilisateur
  const [movies, setMovies] = useState([]); // Stocke les films récupérés
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  // Fonction pour récupérer les films depuis l'API OMDb
  const fetchMovies = async () => {
    setLoading(true);
    try {
      // Get the API key from environment variables
      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search); // Enregistre les résultats dans le state
      } else {
        setMovies([]); // Pas de films trouvés
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des films:', error);
    }
    setLoading(false);
  };

  // Gestionnaire de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-100">
          Rechercher des films
        </h2>

        {/* Formulaire de recherche */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Entrez un titre de film..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600"
          />
          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Rechercher
          </button>
        </form>

        {/* Affichage des résultats de la recherche */}
        {loading ? (
          <p className="text-center text-gray-100">Chargement des films...</p>
        ) : (
          <div className="space-y-4">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="p-4 bg-gray-700 rounded-md shadow-sm flex items-center justify-between"
                >
                  <div className="text-gray-100">
                    <h3>{movie.Title} ({movie.Year})</h3>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'} alt={movie.Title} className="w-16" />
                  </div>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdbID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Voir sur IMDb
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-100">Aucun film trouvé</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
