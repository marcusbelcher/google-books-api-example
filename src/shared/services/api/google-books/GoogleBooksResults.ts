import GoogleBook from './GoogleBook';

export default interface GoogleBooksAPIResults {
    kind: string;
    totalItems: number;
    items: GoogleBook[];
}
