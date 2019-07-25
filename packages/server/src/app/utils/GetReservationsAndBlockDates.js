import Reservation from '../models/Reservation'
import BlockDate from '../models/BlockDates'

export default async (firstDate, lastDate, accommodationID = undefined) => {
  let filters = {
    $or: [
      {
        $or: [
          {
            beginDate: {
              $lte: new Date(firstDate)
            },
            endDate: {
              $gte: new Date(firstDate)
            }
          },
          {
            checkin: {
              $lte: new Date(firstDate)
            },
            checkout: {
              $gte: new Date(firstDate)
            }
          }
        ]
      },
      {
        $or: [
          {
            beginDate: {
              $lte: new Date(lastDate)
            },
            endDate: {
              $gte: new Date(lastDate)
            }
          },
          {
            checkin: {
              $lte: new Date(lastDate)
            },
            checkout: {
              $gte: new Date(lastDate)
            }
          }
        ]
      },
      {
        $or: [
          {
            beginDate: {
              $gte: new Date(firstDate)
            },
            endDate: {
              $lte: new Date(lastDate)
            }
          },
          {
            checkin: {
              $gte: new Date(firstDate)
            },
            checkout: {
              $lte: new Date(lastDate)
            }
          }
        ]
      }
    ]
  }

  filters = accommodationID ? { ...filters, accommodationID } : filters

  const blockDates = await BlockDate.find({ ...filters })

  const reservations = await Reservation.find({ ...filters })

  return {
    blockDates,
    reservations
  }
}
