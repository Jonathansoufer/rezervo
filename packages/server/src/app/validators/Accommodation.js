import Joi from 'joi'

export default {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    size: Joi.string().required(),
    isPublic: Joi.boolean().required(),
    capacity: Joi.number().required(),
    petsAllowed: Joi.boolean().required(),
    kidsAllowed: Joi.boolean().required(),
    pictures: Joi.array()
      .items()
      .required(),
    rate: Joi.object({
      value: Joi.number().required(),
      mainCurrency: Joi.string().required()
    }).required(),
    season: Joi.array().items({
      name: Joi.string().required(),
      beginDate: Joi.date().required(),
      endDate: Joi.date().required(),
      seasonRate: Joi.number().required()
    })
  }
}
