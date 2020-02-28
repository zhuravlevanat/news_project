import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
        color: theme.palette.info.main,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: '1.5rem',
    },
}));
