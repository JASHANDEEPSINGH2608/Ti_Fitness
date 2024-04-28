// model/RollNo.js

import mongoose from 'mongoose';

const rollNoSchema = new mongoose.Schema({
  rollNo: {
    type: String,
  },
  
}, { timestamps: true }
);


const RollNo = mongoose.model('RollNo', rollNoSchema);

export default RollNo;
