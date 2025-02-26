export interface Movie {
    title: string;
    director: string;
    yearReleased: number;
    streaming: boolean;
    logReview?: ReviewLogger;
}

function GetReview(title: string): string | number {
    if (title === 'The Godfather') {
        return 9.5;
    } else if (title === 'The Dark Knight') {
        return 9;
    } else {
        return 'No review found';
    }
}

export function PrintMovieInfo(movie: Movie): void {
    console.log(`Title: ${movie.title}`);
    console.log(`Year: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
    if (movie.logReview) {
        movie.logReview(`Review: ${GetReview(movie.title)}`);
    }
}

interface ReviewLogger {
    (review: string): void;
}

export function GetTitles(director: string): string[];
export function GetTitles(director: string, streaming: boolean): string[];
export function GetTitles(director: string, streaming?: boolean): string[] {
    const movies = GetAllMovies();
    const titles = movies
        .filter(movie => movie.director === director)
        .filter(movie => streaming === undefined || movie.streaming === streaming)
        .map(movie => movie.title);
    return titles;
}

export function GetAllMovies(): Movie[] {
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


