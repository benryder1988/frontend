import Appbar from "../../components/Appbar/Appbar"
import Background from "../../components/Background/Background"
import BackgroundLower from "../../components/BackgroundLower/BackgroundLower"
import Content from "../../components/Content/Content"
import Sidebar from "../../components/Sidebar/Sidebar"
import { Box } from "../../components/shared/material"

const Dashboard = () => {

    return (
            <Box display="flex">
                <Box className="flex w-80 h-full">
                    <Sidebar/>
                </Box>
                <Box display="flex" flexDirection="column" className="flex-grow h-screen">
                    <Box className="flex">
                        <Appbar/>
                    </Box>
                    <Box className="flex-grow">
                        <Content/>
                    </Box>
                </Box>
            </Box>
    )
}

export default Dashboard