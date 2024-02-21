import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import TaskWidgets from "../Widgets/TaskWidgets";
import CreateTask from "../Widgets/CreateTask";
import Navbar from "../../Components/Sidebar";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}>
            <CreateTask/>
          </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <TaskWidgets />
        </Box>
       
      </Box>
    </Box>
  );
};

export default HomePage;