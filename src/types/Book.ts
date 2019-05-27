export default interface Book {
    authors: string[];
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    image: string | undefined;
    link: string;
    rating: number;
}
