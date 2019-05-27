export default interface Book {
    authors: string[];
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    thumbnail: string | undefined;
    image: string | undefined;
    link: string;
    rating: number;
}
