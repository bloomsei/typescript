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


