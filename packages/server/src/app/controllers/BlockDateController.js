import BlockDate from '../models/BlockDates'

class BlockDateController {
  async read (req, res) {
    const reservation = await BlockDate.find()

    return res.json(reservation)
  }

  async create (req, res) {
    const blockDate = await BlockDate.create(req.body)

    return res.json(blockDate)
  }

  async update (req, res) {
    const { id } = req.params

    const reservation = await BlockDate.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(reservation)
  }

  async delete (req, res) {
    const { id } = req.params

    await BlockDate.findByIdAndDelete(id)

    return res.send()
  }
}

export default new BlockDateController()
