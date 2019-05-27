import React from 'react';
import Gears from '../Gears';
import Styles from './Home.module.scss';
import BookList from '../BookList';
import BookSearch from '../BookSearch';
import { State } from 'reducers';
import { connect } from 'react-redux';
import { isFetching } from 'selectors/books';
import Typography from '@material-ui/core/Typography';

interface Props {
    fetching: boolean;
}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <section className={Styles.container}>
            <div>
                {props.fetching ? (
                    <div>
                        <Gears />{' '}
                        <Typography variant="body1" gutterBottom>
                            Searching ...
                        </Typography>
                    </div>
                ) : (
                    <div>
                        <BookSearch />
                        <BookList />
                    </div>
                )}
            </div>
        </section>
    );
};

const mapStateToProps = (state: State): Props => ({
    fetching: isFetching(state),
});

export default connect(mapStateToProps)(Component);
