'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'What needs to get done?'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    default: new Date(Date.now() + 172800000) 
  },
  priority_level: {
    type:[{
      type: String,
      enum: ['Urgent', 'High', 'Low']
    }],
    default: ['Low']
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
