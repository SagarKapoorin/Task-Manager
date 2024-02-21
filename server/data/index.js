import Tasks from "../models/Tasks.js";
import User from "../models/User.js";
import mongoose from "mongoose";
export const fakeData = async () => {
    try {
      // Generate fake tasks
      const fakeTasksData = [
        {
          Subject: 'Task 1',
          content: 'This is task 1.',
        },
        {
          Subject: 'Task 2',
          content: 'This is task 2.',
        },
      ];
  
      const insertedTasks = await Tasks.insertMany(fakeTasksData);
  
      // Get IDs of inserted tasks
      const taskIds = insertedTasks.map(task => task._id);
  
      // Generate fake user with tasks
      const user = await User.create({
        firstName: "Sagar1",
        lastName:"Kapoor",
        password : "lajldjalkdakljdl",
        email: "sagar@gmail.com",
        Tasks: taskIds, // Assign task IDs to the user
      });
  
      console.log("Inserted fake user:", user);
    } catch (error) {
      console.error("Error inserting fake data:", error);
    } 
  };