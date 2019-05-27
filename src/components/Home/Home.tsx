import React from 'react';
import Styles from './Home.module.scss';
import BookList from '../BookList';
import BookSearch from '../BookSearch';
import { State } from 'reducers';
import { connect } from 'react-redux';
import { isFetching, hasData, getQuery } from 'selectors/books';

interface Props {
    isFetching: boolean;
    hasData: boolean;
    query: string;
}

const NoItemsComponent: React.FC = (): JSX.Element => {
    return (
        <div className={Styles.noItemsContainer}>
            <BookSearch />
        </div>
    );
};

const HasItemsComponent: React.FC = (): JSX.Element => {
    return (
        <div className={Styles.hasItemsContainer}>
            <BookSearch />
            <BookList />
        </div>
    );
};

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <section className={Styles.container}>
            {!props.hasData && props.query.length === 0 ? <NoItemsComponent /> : <HasItemsComponent />}
        </section>
    );
};

const mapStateToProps = (state: State): Props => ({
    isFetching: isFetching(state),
    hasData: hasData(state),
    query: getQuery(state),
});

export default connect(mapStateToProps)(Component);
