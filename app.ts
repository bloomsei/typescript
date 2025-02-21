interface Movie {
    title: string;
    director: string;
    yearReleased: number;
    streaming: boolean;
    logReview?: ReviewLogger;
}

interface ReviewLogger {
    (review: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Director extends Person {
    numMoviesDirected: number;
}

interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void;
}

class Performer implements CastMember {
    name: string = '';
    email: string = '';
    role: string = '';

    rehearse(sceneNumber: number): void {
        console.log(`${this.name} is rehearsing scene ${sceneNumber}`);
    }
}


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

function GetReview(title: string): string | number {
    if (title === 'The Godfather') {
        return 9.5;
    } else if (title === 'The Dark Knight') {
        return 9;
    } else {
        return 'No review found';
    }
}

function PrintMovieInfo(movie: Movie): void {
    console.log(`Title: ${movie.title}`);
    console.log(`Year: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
    if (movie.logReview) {
        movie.logReview(`Review: ${GetReview(movie.title)}`);
    }
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

interface StringGenerator {
    (chars: string, nums: number): string;
}

function CreateMovieId(title: string, id: number): string {
    return title + id;
}

let idGenerator: StringGenerator = CreateMovieId;

let favPerformer: CastMember = new Performer();
favPerformer.name = 'Tom Hanks';
favPerformer.rehearse(1);

abstract class Video {
    private title: string;
    protected year: number;
    static medium: string = 'Digital';

    constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
        console.log('Video created');
    }

    printItem(): void {
        console.log(`${this.title} was created in ${this.year} and produced by ${this.producer}`);
    }

    private _producer: string = '';
    get producer(): string {
        return this._producer.toUpperCase();
    }

    set producer(producer: string) {
        this._producer = producer;
    }

    abstract printCredits(): void;
}

class Documentary extends Video {
    constructor(title: string, year: number, public subject: string) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Documentary subject: ${this.subject} (${this.year})`);
    }

    printCredits(): void {
        console.log('Credits: ...');
    }
}

let Musical = class extends Video {
    printCredits(): void {
        console.log('MUSICAL');
        console.log(`Producer: ${this.producer}`);
    }
}

let musical = new Musical('The Sound of Music', 1965);
musical.producer = 'Robert Wise';
musical.printCredits();
