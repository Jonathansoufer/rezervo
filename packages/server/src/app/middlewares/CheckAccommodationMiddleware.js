import getReservationsAndBlockDates from '../utils/GetReservationsAndBlockDates'

export default async (req, res, next) => {
  const { checkin, checkout, accommodationID } = req.body

  const data = await getReservationsAndBlockDates(
    checkin,
    checkout,
    accommodationID
  )

  if (data.reservations[0] || data.blockDates[0]) {
    return res
      .status(400)
      .json({ error: 'Unavailable accommodation for this period' })
  }

  next()
}
