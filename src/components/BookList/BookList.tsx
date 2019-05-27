import React from 'react';
import Styles from './BookList.module.scss';
import { connect } from 'react-redux';
import { State } from 'reducers';
import Typography from '@material-ui/core/Typography';
import { getBooks, getQuery, hasData } from 'selectors/books';
import Book from 'types/Book';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
    data: Book[];
    query: string;
    hasData: boolean;
}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    function generateSubtitle(book: Book): JSX.Element {
        let subtitle = book.authors.join(', ');
        subtitle += subtitle.length > 0 ? `, ${book.publisher}` : book.publisher;
        return <span>{subtitle}</span>;
    }
    return (
        <section className={Styles.container}>
            {props.hasData && props.query.length > 0 ? (
                <GridList spacing={15} cellHeight={400}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Search results for: {props.query}</ListSubheader>
                    </GridListTile>
                    {props.data.map(
                        (book: Book, index: number): JSX.Element => {
                            return (
                                <GridListTile key={index}>
                                    <img src={book.image} alt={book.title} />
                                    <GridListTileBar
                                        title={book.title}
                                        subtitle={generateSubtitle(book)}
                                        actionIcon={
                                            <IconButton
                                                onClick={(): void => {
                                                    Object.assign(document.createElement('a'), {
                                                        target: '_blank',
                                                        href: book.link,
                                                    }).click();
                                                }}
                                            >
                                                <InfoIcon color="secondary" />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            );
                        },
                    )}
                </GridList>
            ) : (
                <Typography variant="body1" gutterBottom>
                    <span>No books found for&quot;{props.query}&quot;</span>
                </Typography>
            )}
        </section>
    );
};

const mapStateToProps = (state: State): Props => ({
    data: getBooks(state),
    hasData: hasData(state),
    query: getQuery(state),
});

export default connect(mapStateToProps)(Component);
