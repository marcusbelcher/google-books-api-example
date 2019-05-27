import React from 'react';
import Styles from './Home.module.scss';
import BookList from '../BookList';
import BookSearch from '../BookSearch';
import Gears from '../Gears';
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

const ItemsLoadingComponent: React.FC = (): JSX.Element => {
    return (
        <div className={Styles.noItemsContainer}>
            <Gears />
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
    let c;
    if (props.isFetching && props.query.length > 0) {
        c = <ItemsLoadingComponent />;
    } else if (props.hasData && props.query.length) {
        c = <HasItemsComponent />;
    } else {
        c = <NoItemsComponent />;
    }
    return <section className={Styles.container}>{c}</section>;
};

const mapStateToProps = (state: State): Props => ({
    isFetching: isFetching(state),
    hasData: hasData(state),
    query: getQuery(state),
});

export default connect(mapStateToProps)(Component);
