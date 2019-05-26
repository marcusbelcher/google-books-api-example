import BookAPI from 'interfaces/BookAPI';

export default interface GoogleBooksAPI extends BookAPI {
    getKey(): string | undefined;
    hasKey(): boolean;
}
