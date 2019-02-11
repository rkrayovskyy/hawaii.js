const uuid = require('uuid/v4')
const Model = require('@hypefight/database')
const dbConfig = require('../../config/database')()

const modelSchema = {
  email: {
    type: String,
    hashKey: true,
    required: true,
    lowercase: true,
  },
  id: {
    type: String,
    index: {
      global: true,
      project: true,
    },
    required: true,
    default: uuid(),
  },
  name: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
  },
}

const modelOptions = {
  throughput: 5,
  timestamps: true,
}

module.exports = Model('Users', modelSchema, modelOptions, dbConfig)