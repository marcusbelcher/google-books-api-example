import Book from './Book';

export interface BookAPIConstructor {
    new (key?: string): BookAPI;
}

export default interface BookAPI {
    search(query: string): Promise<Book[]>;
}
