import { getAllStudents, getStudentById } from '../services/students.js';

export const getAllStudentsController = async (req, res) => {
  const student = await getAllStudents();
  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: student,
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
};
