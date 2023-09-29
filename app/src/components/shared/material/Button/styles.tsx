import { grey } from "@mui/material/colors"
import { makeStyles } from "tss-react/mui"
// import {theme} from '../../../../theme/theme'

export default makeStyles()(
    (theme) => (
        {
            button: {
                fontWeight: 700,
            },
            outlined: {
                borderColor: theme.palette.secondary.main,
                borderWidth: '0.2em',
                color: theme.palette.secondary.main,
                '&:hover' : {
                    borderWidth: '0.2em',
                }
            }
        }
    )
)