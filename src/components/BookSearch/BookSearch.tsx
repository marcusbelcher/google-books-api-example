import React from 'react';
import TextField from '@material-ui/core/TextField';
import Styles from './BookSearch.module.scss';
import { connect } from 'react-redux';
import { fetch } from 'actions/books';
import { State } from 'reducers';
import { getQuery } from 'selectors/books';

interface StateToProps {
    query: string;
}

interface DispatchToProps {
    fetch: (query: string) => void;
}

interface Props extends StateToProps, DispatchToProps {}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    const minUserInteractionMS = 500;
    let intervalId: NodeJS.Timeout;

    const onTyping = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const query = event.currentTarget.value;
        clearTimeout(intervalId);
        intervalId = setTimeout((): void => {
            // done typing
            props.fetch(query);
        }, minUserInteractionMS);
    };

    return (
        <section className={Styles.container}>
            {/**
             * We use defaultValue not value as we want the component to
             * update to props.query and also manage its own value state
             */}
            <TextField
                label="Search library for..."
                defaultValue={props.query}
                onChange={onTyping}
                margin="normal"
                fullWidth
            />
        </section>
    );
};

const mapStateToProps = (state: State): StateToProps => ({
    query: getQuery(state),
});

// TODO Remove any types e.g. dispatch: any -> dispatch: BookThunkDispatch
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): DispatchToProps => {
    return {
        fetch: (query: string): void => dispatch(fetch(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
