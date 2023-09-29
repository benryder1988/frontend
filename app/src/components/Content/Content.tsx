import { Paper, Box } from "@mui/material"
import Background from "../Background/Background"
import BackgroundLower from "../BackgroundLower/BackgroundLower"


const Content = () => {

    return (
        <Box style={{height: '100%', overflow: 'auto'}} className="p-2">
            <Background/>
            <BackgroundLower/>
        </Box>
    )

}

export default Content