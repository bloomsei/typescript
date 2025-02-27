import { Movie, PrintMovieInfo, GetAllMovies, GetTitles } from './movie';
import { Favourites } from './utils';
import { Database } from 'sqlite3';

const db = new Database('::memory::');

db.exec('CREATE TABLE movies (title TEXT, director TEXT, year INT)');
db.exec('INSERT INTO movies (title, director, year) VALUES ("Seven Samurai", "Akira Kurosawa", 1954)');
db.exec('INSERT INTO movies (title, director, year) VALUES ("The Shawshank Redemption", "Frank Darabont", 1994)');
db.each('SELECT * FROM movies', (err, rows) => {
    if (err) {
        console.error(err);
    }
    console.log(rows);
});

function getMoviesByDirector(director: string): Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = GetTitles(director);
            if (titles.length > 0) {
                return resolve(titles);
            }
            reject('No movies found for that director');
        }, 2000);
    });
    return p;
}

async function logSearchResults(director: string) {
    let foundMovies = await getMoviesByDirector(director);
    console.log(foundMovies);
    
}

console.log('Getting movies...');
logSearchResults('Akira Kurosawa')
    .catch(err => console.log(err));
console.log('Got movies!');

let favouriteMovies = new Favourites<Movie>();
GetAllMovies().forEach(movie => favouriteMovies.add(movie));

