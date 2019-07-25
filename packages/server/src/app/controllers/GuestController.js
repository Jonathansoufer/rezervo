import Reservation from '../models/Reservation'

class GuestController {
  async show (req, res) {
    const { firstName, lastName, checkin, checkout } = req.query

    let filters = {
      guests: {
        $elemMatch: { firstName: firstName, lastName: lastName }
      }
    }

    filters = checkin && checkout ? { ...filters, checkin, checkout } : filters

    const reservations = await Reservation.find(filters)

    return res.json(reservations)
  }
}

export default new GuestController()
