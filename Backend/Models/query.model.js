// models/queryModel.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const QuerySchema = new Schema({
  instrument: String,
  query: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default model('Query', QuerySchema);
