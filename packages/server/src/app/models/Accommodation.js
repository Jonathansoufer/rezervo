import { Schema, model } from 'mongoose'

const AccommodationSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    isPublic: {
      type: Boolean,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    petsAllowed: {
      type: Boolean,
      required: true
    },
    kidsAllowed: {
      type: Boolean,
      required: true
    },
    pictures: [
      {
        type: String,
        required: true
      }
    ],
    rate: {
      value: {
        type: Number,
        required: true
      },
      mainCurrency: {
        type: String,
        required: true
      }
    },
    season: [
      {
        name: {
          type: String,
          required: true
        },
        beginDate: {
          type: Date,
          required: true
        },
        endDate: {
          type: Date,
          required: true
        },
        seasonRate: {
          type: Number,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

export default model('Accommodation', AccommodationSchema)
