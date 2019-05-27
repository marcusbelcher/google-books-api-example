import axios, { AxiosResponse, AxiosError } from 'axios';
import GoogleBooksAPI from './GoogleBooksAPI';
import Book from 'types/Book';
import GoogleBook from './GoogleBook';
import GoogleBooksAPIResults from './GoogleBooksResults';

export default class GoogleBooks implements GoogleBooksAPI {
    public static ConvertGoogleBookToBook(book: GoogleBook): Book {
        return {
            authors: book.volumeInfo.authors,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.large : undefined,
            link: book.volumeInfo.infoLink,
            rating: book.volumeInfo.averageRating,
            thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.small : undefined,
        };
    }

    public static ConvertGoogleBooksToBooks(books: GoogleBook[]): Book[] {
        const convertedBooks: Book[] = [];

        for (const b of books) {
            convertedBooks.push(GoogleBooks.ConvertGoogleBookToBook(b));
        }

        return convertedBooks;
    }

    private readonly apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    private maxResults: number;
    private key: string | undefined;

    /**
     * @param key
     */
    public constructor(key?: string) {
        this.maxResults = 12;
        this.key = key;

        if (!this.hasKey()) {
            console.warn('Google Books API initiated without an API Key. Quota restrictions and errors may occur.');
        }
    }

    /**
     * @return {boolean}
     */
    public hasKey(): boolean {
        return typeof this.key === 'string';
    }

    /**
     * @return {string | undefined}
     */
    public getKey(): string | undefined {
        return this.key;
    }

    /**
     * @param query
     * @return {Promise<Book[] | never>}
     */
    public search(query: string): Promise<Book[] | never> {
        const url = `${this.apiUrl}?q=${encodeURI(query)}&maxResults=${this.maxResults}${
            this.hasKey() ? '&key=' + this.getKey() : ''
        }`;

        console.debug(`Google Books API request ${url} is starting`);

        return axios
            .get<GoogleBooksAPIResults>(url)
            .then(
                (res: AxiosResponse<GoogleBooksAPIResults>): Book[] => {
                    return GoogleBooks.ConvertGoogleBooksToBooks(res.data.items);
                },
            )
            .catch(
                (axiosError: AxiosError): Promise<never> => {
                    console.error(axiosError.name, axiosError.message);
                    return Promise.reject(axiosError);
                },
            )
            .finally(
                (): void => {
                    console.debug(`Google Books API request ${url} has finalised`);
                },
            );
    }
}
