import TaskModel from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  const { filter, email } = req.body; // Extracting filter and email from the request body
  console.log(filter, email);
  try {
    let tasks = "";
    let filterCriteria = { mail: email }; 

    if (filter === "All") {
      tasks = await TaskModel.find(filterCriteria);
    } else if (filter === "Completed") {
      tasks = await TaskModel.find({ ...filterCriteria, status: "completed" });
    } else if (filter === "Incomplete") {
      tasks = await TaskModel.find({ ...filterCriteria, status: "incomplete" });
    } else {
      return res.status(400).send({ message: "Invalid filter criteria" });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};



export const createTask = async (req, res) => {
  if (!req.body) {
    // console.log("entered");
    return res.status(400).send({ message: "Please Fill all the feilds" });
  }
  console.log(req.body)
  try {
    const task = await TaskModel.create({
      mail: req.body.mail,
      title: req.body.title,
      decription: req.body.description,
      StartDateTime: req.body.startdatetime,
      EndDateTime: req.body.enddatetime,
      priority: req.body.priority,
      status: req.body.status,
    });
    res.status(201).json(task);
  } catch (error) {
    console.log("entered 1");
    console.log("Error occurred during task creation:", error.message);
    res.status(400).send({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(req.body.id, {
      mail:req.body.mail,
      title: req.body.title,
      decription: req.body.description,
      StartDateTime: req.body.startdatetime,
      EndDateTime: req.body.enddatetime,
      priority: req.body.priority,
      status: req.body.status,
    });
    return res.status(201).send({ message: "success" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.body;
  try {
    const task = await TaskModel.findByIdAndDelete(id);
    return res.status(200).send({ message: "success" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
