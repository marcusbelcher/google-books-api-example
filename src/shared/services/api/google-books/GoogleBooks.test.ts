import GoogleBooks from './GoogleBooks';

/**
 * TODO:
 * Add a mock request file to run tests with fake data
 * E.g. https://jestjs.io/docs/en/tutorial-async
 */

describe('Google Books API Test', (): void => {
    it('Instantiate with key "foo"', (): void => {
        const api = new GoogleBooks('foo');
        expect(api.hasKey()).toBe(true);
        expect(api.getKey()).toBe('foo');
    });
    it('Instantiate without key', (): void => {
        const api = new GoogleBooks();
        expect(api.hasKey()).toBe(false);
        expect(api.getKey()).toBe(undefined);
    });
    it('Instantiates GoogleBooks without key and successfully search books API', async (): Promise<void> => {
        const api = new GoogleBooks();
        // Quite a poor test, expect always defined but ideally also JSON schema check, etc
        await expect(api.search('coding')).resolves.toBeDefined();
    });
    it('Instantiate GoogleBooks with a good key within .env, search books API, and responds with an error', async (): Promise<
        void
    > => {
        const api = new GoogleBooks(process.env.GOOGLE_BOOKS_API_KEY);
        // Quite a poor test, expect always defined but ideally also JSON schema check, etc
        await expect(api.search('coding')).resolves.toBeDefined();
    });
    it('Instantiate GoogleBooks with a bad key, search books API, and responds with an error', async (): Promise<
        void
    > => {
        const api = new GoogleBooks('foo');
        await expect(api.search('coding')).rejects.toBeTruthy();
    });
});
