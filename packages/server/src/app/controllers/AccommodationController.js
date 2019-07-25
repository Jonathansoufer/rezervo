import Accommodation from '../models/Accommodation'

class AccommodationController {
  async read (req, res) {
    const accommodations = await Accommodation.find({
      _id: { $nin: req.idList }
    })

    return res.json(accommodations)
  }

  async create (req, res) {
    const accommodation = await Accommodation.create(req.body)

    return res.json(accommodation)
  }

  async update (req, res) {
    const { id } = req.params

    const accommodation = await Accommodation.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(accommodation)
  }

  async delete (req, res) {
    const { id } = req.params

    await Accommodation.findByIdAndDelete(id)

    return res.send()
  }
}

export default new AccommodationController()
