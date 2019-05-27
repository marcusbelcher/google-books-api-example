import BookAPI from 'types/BookAPI';

export default interface GoogleBooksAPI extends BookAPI {
    getKey(): string | undefined;
    hasKey(): boolean;
}
