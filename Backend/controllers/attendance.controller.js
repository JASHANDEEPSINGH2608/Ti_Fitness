// controller/rollNoController.js

import RollNo from "../Models/attendance.model.js";

export const createRollNo = async (req, res) => {
  try {
    const { rollNo } = req.body;
    console.log(rollNo)
    const newRollNo = new RollNo({ rollNo });
    await newRollNo.save();
    res.status(201).send('Roll No saved successfully!');
  } catch (error) {
    console.error('Error saving Roll No:', error);
    res.status(500).send('Error saving Roll No. Please try again.');
  }
};



export const getAllRollNos = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 to get the start of the day
    
    // Query roll numbers created today
    const rollNos = await RollNo.find({
      createdAt: {
        $gte: today, // Roll numbers created today or later
      },
    }).select('rollNo createdAt');

    res.status(200).json(rollNos);
  } catch (error) {
    console.error('Error fetching Roll Nos:', error);
    res.status(500).send('Error fetching Roll Nos. Please try again.');
  }
};