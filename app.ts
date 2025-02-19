function GetAllMovies() {
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

function GetReview(title: string): string | number {
    if (title === 'The Godfather') {
        return 9.5;
    } else if (title === 'The Dark Knight') {
        return 9;
    } else {
        return 'No review found';
    }
}

function PrintMovieInfo(title: string, year: number, ...cast: string[]): void {
    console.log(`Title: ${title}`);
    console.log(`Year: ${year}`);
    for (const actor of cast) {
        console.log(`  Actor: ${actor}`);
    }
}

const LogMessage = (message: string) => console.log(message);

PrintMovieInfo('The Godfather', 1972, 'Marlon Brando', 'Al Pacino');
PrintMovieInfo('The Dark Knight', 2008);

LogMessage('Hello, World!');

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
