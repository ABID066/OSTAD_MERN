import StudentsModel from '../models/StudentsModel.js';

// C=Create
export const InsertStudent = async (req, res) => {
    try {
        const newStudent = await StudentsModel.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// R=Read
// :: Finding All Students
export const getAllStudent = async (req, res)=>{
    try {
        const students = await StudentsModel.find().select('Name Roll -_id')
        res.status(200).json(students)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}
// :: Finding student my Roll
export const getStudentByRoll = async (req, res) =>{
    try {
        const student = await StudentsModel.find({Roll: req.params.Roll}).select('Name Roll -_id')
        if(student){
            res.status(201).json(student)
        }
        else {
            res.status(404).json({message: 'Student not found'})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}



// U=Update
export const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        const result = await StudentsModel.updateOne({ _id: id }, updateData);

        if (result) {
            res.status(200).json({ status: "success", data: result });
        } else {
            res.status(404).json({ status: "fail", message: "Student not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};


//D = Delete
export const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await StudentsModel.deleteOne({ _id: id });
        if (result) {
            res.status(200).json({ status: "success", data: result });
        } else {
            res.status(404).json({ status: "fail", message: "Student not found" });
            }
        } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
}