import Tasks from "../models/Tasks.js";
import User from "../models/User.js";

export const createTasks=async(req,res)=>{
    try{
        const user = await User.findById(req.body.userId);
        const TasksBody={Subject : req.body.Subject , content :req.body.content };
        // console.log(TasksBody);
        const TaskInstance=await Tasks.create(TasksBody);
        try{
            const SavedTasks=await TaskInstance.save();
            console.log(user);
             user.Tasks.push(SavedTasks._id);
             const SavedUser=await user.save();
             console.log(SavedUser);
             res.status(201).json(SavedUser);
        }catch(err){
            res.status(409).json({ message: err.message });
        }
    }catch(err){
        res.status(409).json({ message: err.message });
    }
}
export const TasksCompleted=async(req,res)=>{
    try{
        const { id }=req.params;
        // console.log(id);
        const Taskss=await Tasks.findById(id);
        // console.log(Taskss);
        if(Taskss.completed){
            Taskss.completed=false;
        }else{
            Taskss.completed=true;
        }
        const SavedTasks=await Taskss.save();
        // console.log(SavedTasks);
        res.status(201).json(SavedTasks);
    }catch(err){
        res.status(409).json({ message: err.message });
    }
}
export const getUserTasks=async(req,res)=>{
    try{
        const { userId }=req.params;
        const user=await User.findById(userId).populate('Tasks');
        // console.log(user.Tasks);
        res.status(201).json(user.Tasks);
    }catch(err){
        res.status(409).json({ message: err.message });
    }
}
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Tasks.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};