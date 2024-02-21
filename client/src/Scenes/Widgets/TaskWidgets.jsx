import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../states";
import { Typography } from "@mui/material";
import TaskWidget from "./TaskWidget";

const PostsWidget = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const token = useSelector((state) => state.token);
    // console.log(user._id);
  const getUserPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/${user._id}/tasks`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user posts.");
      }
      const data = await response.json();
      dispatch(setTasks({ tasks: data }));
      console.log(data);
    } catch (error) {
      console.error("Error fetching user posts:", error.message);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, [tasks.length]); 

  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((post, index) => (
            <>
            <Typography sx={{ mt: "1rem" }}>
            <h1>Tasks No. {index+1}  </h1>
        </Typography>
          <TaskWidget
            key={post._id}
            idi={post._id}
            Subject={post.Subject}
            content={post.content}
            date={post.date}
            completed={post.completed}
          />
          </>
        ))
      ) : (
        <Typography  sx={{ mt: "1rem" }}><h1>No tasks found.</h1></Typography>
      )}
    </>
  );
};

export default PostsWidget;
