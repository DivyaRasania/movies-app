import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Zootopia", release_date: "2025"},
        {id: 2, title: "Hoppers", release_date: "2026"},
        {id: 3, title: "Dhurandhar", release_date: "2026"}
    ]

    const handleSearch = (e) => {
        e.preventDefault();

        alert(`Searching for ${searchQuery}`);

        setSearchQuery("");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {
                movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
        </div>
    </div>
}

export default Home;