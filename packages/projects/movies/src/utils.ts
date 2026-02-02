export function Purge<T>(inventory: T[]): T[] {
    return inventory.splice(3, inventory.length);
}

interface Favourite {
    title: string;
}

export class Favourites<T extends Favourite> {
    _items: T[] = [];

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}
