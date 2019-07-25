import { Schema, model } from 'mongoose'
import handleDates from '../utils/ReservationDates'

const ReservationSchema = Schema(
  {
    checkin: {
      type: Date,
      required: true
    },
    checkout: {
      type: Date,
      required: true
    },
    amount: {
      type: Number
    },
    dailyValue: {
      type: Number,
      required: false
    },
    isPaid: {
      type: Boolean,
      required: true
    },
    // @TODO ask Jon what this mean
    status: [],
    accommodationID: {
      type: Schema.Types.ObjectId,
      ref: 'Accomodations',
      required: true
    },
    guests: [
      {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        email: {
          type: String,
          lowercase: true,
          required: true
        },
        phone: {
          type: String,
          required: true
        },
        birthday: {
          type: Date,
          required: true
        },
        gender: {
          type: String,
          required: true
        },
        residency: {
          type: String,
          required: true
        },
        docType: {
          type: String,
          required: true
        },
        docNumber: {
          type: Number,
          required: true
        },
        docIssueDate: {
          type: Date,
          required: true
        },
        docExpireDate: {
          type: Date,
          required: true
        },
        docCountry: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

ReservationSchema.pre('save', function () {
  const days = handleDates(this.checkin, this.checkout)

  this.amount = this.dailyValue * days
})

export default model('Reservation', ReservationSchema)
