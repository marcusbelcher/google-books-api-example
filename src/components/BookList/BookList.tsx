import React from 'react';
import Styles from './BookList.module.scss';
import { connect } from 'react-redux';
import { State } from 'reducers';
import Typography from '@material-ui/core/Typography';
import { getBooks, getQuery } from 'selectors/books';
import Book from 'types/Book';

interface Props {
    data: Book[];
    query: string;
}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <section className={Styles.container}>
            {props.data.map(
                (book: Book, index: number): JSX.Element => {
                    return <div key={index}>{book.title}</div>;
                },
            )}
            {props.data.length === 0 && props.query.length > 0 && (
                <Typography variant="body1" gutterBottom>
                    <span>No books found for&quot;{props.query}&quot;</span>
                </Typography>
            )}
        </section>
    );
};

const mapStateToProps = (state: State): Props => ({
    data: getBooks(state),
    query: getQuery(state),
});

export default connect(mapStateToProps)(Component);
