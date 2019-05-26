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

Scripts are ased off [create-create-app](https://github.com/facebook/create-react-app)

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

## Acknowledgements

-   [Geers Lottie Animation by Alexandr Ponomarev](https://lottiefiles.com/askoldovich)
-   [Checkmark Animation by Rodetyo Prast](https://lottiefiles.com/k13motion)

## License

MIT
