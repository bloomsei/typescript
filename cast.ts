interface Person {
    name: string;
    email: string;
}

interface Director extends Person {
    numMoviesDirected: number;
}

export interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void;
}

export class Performer implements CastMember {
    name: string = '';
    email: string = '';
    role: string = '';

    rehearse(sceneNumber: number): void {
        console.log(`${this.name} is rehearsing scene ${sceneNumber}`);
    }
}
