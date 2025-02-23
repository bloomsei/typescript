import { Movie, PrintMovieInfo } from './movie';
import { CastMember, Performer } from './cast';
import { Video } from './video';


function GetAllMovies(): Movie[] {
    return [
        { title: 'The Godfather', director: 'Francis Ford Coppola', yearReleased: 1972, streaming: true },
        { title: 'The Shawshank Redemption', director: 'Frank Darabont', yearReleased: 1994, streaming: true },
        { title: 'The Dark Knight', director: 'Christopher Nolan', yearReleased: 2008, streaming: false },
        { title: 'The Godfather Part II', director: 'Francis Ford Coppola', yearReleased: 1974, streaming: true },
        { title: 'Kill Bill: Vol. 1', director: 'Quentin Tarantino', yearReleased: 2003, streaming: false },
        { title: 'Kill Bill: Vol. 2', director: 'Quentin Tarantino', yearReleased: 2004, streaming: false },
        { title: 'The Matrix', director: 'The Wachowskis', yearReleased: 1999, streaming: true },
        { title: 'The Matrix Reloaded', director: 'The Wachowskis', yearReleased: 2003, streaming: true },
        { title: 'The Matrix Revolutions', director: 'The Wachowskis', yearReleased: 2003, streaming: false },
    ];
}



const LogMessage = (message: string) => console.log(message);

function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
    const movies = GetAllMovies();
    const titles = movies
        .filter(movie => movie.director === director)
        .filter(movie => streaming === undefined || movie.streaming === streaming)
        .map(movie => movie.title);
    return titles;
}

console.log(GetTitles('The Wachowskis', true));

let myMovie = {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    yearReleased: 1994,
    streaming: true,
    genre: 'Crime',
    watched: true,
    logReview: LogMessage
}

PrintMovieInfo(myMovie);

let favPerformer: CastMember = new Performer();
favPerformer.name = 'Tom Hanks';
favPerformer.rehearse(1);



let Musical = class extends Video {
    printCredits(): void {
        console.log('MUSICAL');
        console.log(`Producer: ${this.producer}`);
    }
}

let musical = new Musical('The Sound of Music', 1965);
musical.producer = 'Robert Wise';
musical.printCredits();
