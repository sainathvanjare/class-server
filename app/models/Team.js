'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let teamSchema = new Schema({
  teamId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  teamName: {
    type: String,
    default: ''
  },
  teamList: {
    type: Array,
    default: []
  }


})


mongoose.model('Team', teamSchema);
