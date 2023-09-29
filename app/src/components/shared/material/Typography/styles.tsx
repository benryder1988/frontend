import { grey } from "@mui/material/colors"
import { makeStyles } from "tss-react/mui"
// import {theme} from '../../../../theme/theme'

export default makeStyles()(
    (theme) => (
        {
            h2: {
                fontSize: '5em',
            },
            colorGrey: {
                color: theme.palette.grey[700],
            },
            colorDark: {
                color: theme.palette.primary.dark,
            },
            bold: {
                fontWeight: '700'
            },
        }
    )
)