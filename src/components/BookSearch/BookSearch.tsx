import React from 'react';
import TextField from '@material-ui/core/TextField';
import Styles from './BookSearch.module.scss';
import { connect } from 'react-redux';
import { fetch } from 'actions/books';
import { State } from 'reducers';
import { getQuery } from 'selectors/books';

interface PropsIn {
    query: string;
}

interface PropsOut {
    fetch: (query: string) => void;
}

interface Props extends PropsIn, PropsOut {}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    const minUserInteractionMS = 2000;
    let intervalId: NodeJS.Timeout;

    const doneTyping = (query: string): void => {
        props.fetch(query);
    };

    const onTyping = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const query = event.currentTarget.value;
        clearTimeout(intervalId);
        intervalId = setTimeout((): void => {
            doneTyping(query);
        }, minUserInteractionMS);
    };

    return (
        <section className={Styles.container}>
            <TextField label="Search" onChange={onTyping} margin="normal" />
        </section>
    );
};

const mapStateToProps = (state: State): PropsIn => ({
    query: getQuery(state),
});

// TODO Remove any types
// const mapDispatchToProps = (dispatch: BookThunkDispatch): PropsOut => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any): PropsOut => {
    return {
        fetch: (query: string): void => dispatch(fetch(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
