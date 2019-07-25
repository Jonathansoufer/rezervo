import { Schema, model } from 'mongoose'

const BlockDateSchema = Schema(
  {
    beginDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    accommodationID: {
      type: Schema.Types.ObjectId,
      ref: 'Accomodations',
      required: true
    },
    reason: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model('BlockDate', BlockDateSchema)
