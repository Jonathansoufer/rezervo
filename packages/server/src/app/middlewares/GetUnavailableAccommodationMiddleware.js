import getReservationsAndBlockDates from '../utils/GetReservationsAndBlockDates'

export default async (req, res, next) => {
  const { checkin, checkout } = req.query

  const data = await getReservationsAndBlockDates(checkin, checkout)

  const reservationsIDs = data.reservations.map(
    reservation => reservation.accommodationID
  )
  const blockDatesIDs = data.blockDates.map(block => block.accommodationID)

  req.idList = [...reservationsIDs, ...blockDatesIDs]
  next()
}
