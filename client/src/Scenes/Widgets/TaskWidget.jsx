import {
    ChatBubbleOutlineOutlined,
    CheckBox,
    CheckBoxOutlineBlank,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import DeleteIcon from '@mui/icons-material/Delete';
  import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
  import FlexBetween from "../../Components/FlexBetween";
 import WidgetWrapper from "../../Components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { setTasks } from "../../states";
  import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
  const formatDate = (date) => {
    const formattedDate = new Date(date);
  

    const year = formattedDate.getFullYear();
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(formattedDate.getDate()).padStart(2, '0');
  
 
    const hours = String(formattedDate.getHours()).padStart(2, '0');
    const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
    const seconds = String(formattedDate.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `Date : ${year}-${month}-${day}-------Time : ${hours}:${minutes}:${seconds}`;
  
    return formattedDateTime;
  };
  const TaskWidget = ({
    idi,
    Subject,
    content,
    date,
    completed
  }) => {
      const dispatch = useDispatch();
      const token = useSelector((state) => state.token);
      const loggedInUserId = useSelector((state) => state.user._id);
      const [Complete,setComplete]=useState(completed);
      const { palette } = useTheme();
      const main = palette.neutral.main;
      const primary = palette.primary.main;
      const delte=async(id)=>{
        try {
          console.log("alfda");
          const response = await fetch(
            `http://localhost:3001/tasks/${idi}/delete`,
            {
              method: "DELETE",
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to delete task.");
          }
          const data = await response.json();
          dispatch(setTasks({ tasks: data }));
          console.log(data);
        } catch (error) {
          console.error("Error fetching user tasks:", error.message);
        }
      };
      //handle change
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.length>0){
          patchComment(inputValue);
          setInputValue('');
        }
      };
      return (
        <WidgetWrapper m="2rem 0">
                     
          <Typography color={main} sx={{ mt: "1rem" }}>
            <h1>{Subject}</h1>
          </Typography>
          <Typography color={main} sx={{mt :"1rem"}}>
            <h3>{content}</h3>
          </Typography>
          <FlexBetween mt="0.25rem">
            <FlexBetween gap="1rem">
              
              <FlexBetween gap="0.3rem">
                <IconButton onClick={()=>setComplete(!Complete)}>
                  {Complete ? (
                    <CheckCircleIcon sx={{ color: primary }} />
                  ) : (
                    <CheckBoxOutlineBlank />
                  )}
                </IconButton>
                
              </FlexBetween>
              <h5>{formatDate(date)}</h5>
            </FlexBetween>
    
            <IconButton onClick={()=>delte()}>
              <DeleteIcon />
            </IconButton>
          </FlexBetween>
         
        </WidgetWrapper>
      );
    };
    
    export default TaskWidget;