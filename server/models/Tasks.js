import mongoose from "mongoose";

const Taskschema = mongoose.Schema(
  {
    Subject:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    completed : {
        type : Boolean,
        default : false
    }
  },
  { timestamps: true }
);

const Tasks = mongoose.model('Tasks', Taskschema);
export default Tasks;
