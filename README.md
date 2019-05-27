# google-books-api-example

Create react app demo to show results from the Google books API

You can view the live demo [here](https://marcusbelcher.github.io/google-books-api-example/#/)

## Functionality

-   Search [Google Books API](https://developers.google.com/api-client-library/javascript/start/start-js)
-   View search results as a list of books. List items detail:
    -   Author
    -   Title
    -   Publishing Company
    -   Picture
-   View more information about a book

## Scripts

Scripts are based off [create-create-app](https://github.com/facebook/create-react-app)

-   yarn install
-   yarn start (serves on `localhost:3000`)
-   yarn build (output to `/build` folder)
-   yarn deploy (builds and deploys to https://marcusbelcher.github.io/google-books-api-example/#/)

Other scripts - to aid development - include:

-   yarn lint
-   yarn test:coverage
-   (optional) snyk monitor (post snyk auth) to check / report on 3rd parties for vulnerabilities

## Notes

### Google Books API

You can search [https://www.googleapis.com/books/v1/volumes?q="coding"](https://www.googleapis.com/books/v1/volumes?q="coding") without needing an API key. However for analytics, monitoring, full CRUD access such as writing book data, have a higher API usage qutoas, etc, you do need an API key. Also for security purposes and to stop bad actors using your key you should restrict it to certain domains via the project console [here](https://console.developers.google.com/apis/credentials/domainverification). Read more about the Google Books API and authentication [here](https://developers.google.com/books/docs/v1/using#auth).

To achieve this on GitHub you need to:

-   Add your domain as a property [here](https://www.google.com/webmasters/verification/home?hl=en). NB: 'https://marcusbelcher.github.io/google-books-api-example/' not 'https://marcusbelcher.github.io/'
-   Add the provided meta tag to `public/index.html`
-   Build and deploy changes (`yarn deploy`)
-   Click Verify (Should be a success!)

Then:

-   Add domain to https://console.developers.google.com/apis/credentials/domainverification to the required project

### CRA Test Coverage

Please see https://github.com/facebook/create-react-app/issues/6888 and https://github.com/facebook/jest/issues/8491. --watchAll=false is needed for TypeScript and Jest to output correct test coverage.

### Version methodology

Version structure: `<major>.<minor>.<revision>`
On major release minor and revision reset to zero.
On minor release revision gets reset to zero.

-   Major: Releases and breaking changes e.g. when Yarn deploy gets fired
-   Minor: New features, substantial changes e.g. new API
-   Revision: Hotfix, minor changes e.g. footer name

### Development methodology
- Do use feature/* branches. Once tested locally merge feature/* to develop.
- Do use VSCode with ESLint, Prettier formatter, SonarTS and SonarLint. The aim is for all code to be continuously tested, linted, and (complexity) analysed as development occurs to catch errors quickly. You can run `yarn test:coverage` during development. 
- Do write classes with tests first (e.g. GoogleBooks.test.ts) before writing the visual Components e.g. <BookSearch />
- Do abstract classes as much as you can. E.g. BookAPI.ts GoogleBooksAPI.ts interfaces and GoogleBooks.ts. It is expected to swap out the API in `actions/book.ts` to any other provider and the GUI, Store, etc, shouldn't require a refactor. 
- Keep everything strictly typed. In this example - due to timing - I broke this rule occasionally. However a big no no in the real world!

### Remaining wishlist
- Thoroughly comment the code and add in TSDocs 
- Remove areas where I override the any linter checks and correct the typing
- Add in snapshot and better component testing via [Enzyme](https://airbnb.io/enzyme/)
- Add in visual diff testing for components via [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- Add in a google-api offline mock for testing internal schema transformation from Google Book objects to Book objects. 
- Experiment with white box testing
- Add <url>/book/<id> route to show more information about a book and embed the google preview/reader widget
- Add CI and auto generated QA links for feature/*, develop, staging, and master branches
- Add branch rules to enforce PRs, and stop people (including myself) commiting to master!
- etc

## Acknowledgements

-   [Geers Lottie Animation by Alexandr Ponomarev](https://lottiefiles.com/askoldovich)

## License

MIT
