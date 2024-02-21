import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HouseIcon from '@mui/icons-material/House';
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../states";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../Components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handleLogout = () => {
   
    dispatch(setLogout());

  
    navigate("/");
  };

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
// console.log(user);
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Task-Manager
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton >
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
          {theme.palette.mode === "dark" ? (
            <HouseIcon sx={{ fontSize: "25px", cursor: "pointer" }}  onClick={() => navigate("/home")}/>
            ) : (
              <HouseIcon sx={{ fontSize: "25px", cursor: "pointer" , color:dark }}  onClick={() => navigate("/home")}/>
            )}
          </IconButton>
          <IconButton>
          {theme.palette.mode === "dark" ? (
             <AddIcCallIcon sx={{ fontSize: "25px" ,  cursor: "pointer" }} />
            ) : (
              <AddIcCallIcon sx={{ fontSize: "25px" ,  cursor: "pointer", color:dark }} />
            )}
          
          </IconButton>
          <IconButton>
          {theme.palette.mode === "dark" ? (
            <Help sx={{ fontSize: "25px", cursor: "pointer" }}  />
            ) : (
              <Help sx={{ fontSize: "25px", cursor: "pointer" , color:dark }}  />
            )}
          </IconButton>
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() =>{ handleLogout()}} on >Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton>
          {theme.palette.mode === "dark" ? (
            <HouseIcon sx={{ fontSize: "25px", cursor: "pointer" }}  onClick={() => navigate("/home")}/>
            ) : (
              <HouseIcon sx={{ fontSize: "25px", cursor: "pointer" , color:dark }}  onClick={() => navigate("/home")}/>
            )}
          </IconButton>
            <IconButton>
          {theme.palette.mode === "dark" ? (
             <AddIcCallIcon sx={{ fontSize: "25px" ,  cursor: "pointer" }} />
            ) : (
              <AddIcCallIcon sx={{ fontSize: "25px" ,  cursor: "pointer", color:dark }} />
            )}
          
          </IconButton>
          <IconButton>
          {theme.palette.mode === "dark" ? (
            <Help sx={{ fontSize: "25px", cursor: "pointer" }}/>
            ) : (
              <Help sx={{ fontSize: "25px", cursor: "pointer" , color:dark }}  />
            )}
          </IconButton>
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;