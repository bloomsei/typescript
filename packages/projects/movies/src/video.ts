export abstract class Video {
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

export class Documentary extends Video {
    constructor(title: string, year: number, public subject: string) {
        super(title, year);
    }

    @logMethodInfo
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

function logMethodInfo(original: any, _context: ClassMethodDecoratorContext) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log(`The method ${_context.name as string} was called`);
        console.log(`The construct: ${_context.kind}`);
        return original.call(this, ...args);
    }
    return replacementMethod;
}
