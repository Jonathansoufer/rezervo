import Reservation from '../models/Reservation'

class ReservationController {
  async index (req, res) {
    const reservation = await Reservation.find()

    return res.json(reservation)
  }

  async read (req, res) {
    const { id } = req.params

    const reservation = await Reservation.findById(id)

    return res.json(reservation)
  }

  async create (req, res) {
    const reservation = await Reservation.create(req.body)

    return res.json(reservation)
  }

  async update (req, res) {
    const { id } = req.params

    const reservation = await Reservation.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(reservation)
  }

  async delete (req, res) {
    const { id } = req.params

    await Reservation.findByIdAndDelete(id)

    return res.send()
  }
}

export default new ReservationController()
