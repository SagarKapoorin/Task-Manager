import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "../../Components/FlexBetween";
  import WidgetWrapper from "../../Components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {  setTasks } from "../../states";
import { Navigate } from "react-router-dom";
  
  const CreateTask = ({ picturePath }) => {
    const dispatch = useDispatch();
    const [post, setPost] = useState("");
    const [content,setcontent]=useState("");
    const user=useSelector((state)=>state.user);
    console.log(post+" "+content);
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;
  
    const handlePost = async () => {
        console.log(user._id);
        const newPost = { userId: user._id , Subject: post, content: content };

        console.log(newPost);
      const response = await fetch(`http://localhost:3001/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json",Authorization: `Bearer ${token}` },
        body: JSON.stringify(newPost),
      });
      const posts = await response.json();
      console.log(posts);
      dispatch(setTasks({ tasks :posts }));
     setcontent("");
      setPost("");

    };
  
    return (
      <WidgetWrapper>
        <Typography  sx={{ mt: "1rem" }}><h1>Create Tasks</h1></Typography>
        <FlexBetween gap="1.5rem">
        <InputBase
            placeholder="Subject"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
              m: "1rem"
            }}
          />
            </FlexBetween>
          <InputBase
            placeholder="What's on your mind..."
            onChange={(e) => setcontent(e.target.value)}
            value={content}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "3rem 2rem",
              m:"0.5rem"
            }}
          />
    

  
        <Divider sx={{ margin: "1.25rem 0" }} />
  
        <FlexBetween>

          <Button
            disabled={!post}
            onClick={handlePost}
            sx={{
              color: palette.background.alt,
              backgroundColor: palette.primary.main,
              borderRadius: "3rem",
            }}
          >
            ADD TASK
          </Button>
        </FlexBetween>
      </WidgetWrapper>
    );
  };
  
  export default CreateTask;