import { createMuiTheme } from '@material-ui/core/styles';
import { COLOR_BLUE_HEX, COLOR_CHARCOAL_HEX } from '../../styles/variables';

export default createMuiTheme({
    palette: {
        primary: {
            main: COLOR_BLUE_HEX,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                justifyContent: 'center',
            },
        },
        MuiTypography: {
            body1: {
                color: COLOR_CHARCOAL_HEX,
            },
            h6: {
                color: COLOR_BLUE_HEX,
            },
        },
    },
    typography: {
        useNextVariants: true,
    },
});
