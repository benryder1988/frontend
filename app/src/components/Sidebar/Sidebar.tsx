import labels from '../../constants/labels'
import { Typography } from '../shared/material'
import { Box } from '@mui/material'

const Sidebar = () => {

    return (
        <Box display="flex" flexDirection="column" style={{backgroundColor: '#FFFFFF77'}} className="w-full h-screen pt-6 pl-6">
            <Box display="flex" className="flex-grow">  
              <Typography textColor='colorGrey' textWeight='bold'>
                {labels.en.titleFirst}
              </Typography>
              <Typography  textColor='colorDark' textWeight='bold'>
                {labels.en.titleSecond}
              </Typography>
            </Box>
            <Box className="flex">
            </Box>
        </Box>
    )
}

export default Sidebar
