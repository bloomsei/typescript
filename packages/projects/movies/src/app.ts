import { Movie, PrintMovieInfo, GetAllMovies, GetTitles } from './movie';
import { Favourites } from './utils';
import { Documentary } from './video';

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

let documentary = new Documentary('The Civil War', 1990, 'American Civil War');
documentary.printItem();

