import Joi from 'joi'

export default {
  body: {
    checkin: Joi.date().required(),
    checkout: Joi.date().required(),
    isPaid: Joi.boolean().required(),
    accommodationID: Joi.string().required(),
    guests: Joi.array()
      .items({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
        phone: Joi.string().required(),
        birthday: Joi.date().required(),
        gender: Joi.string().required(),
        residency: Joi.string().required(),
        docType: Joi.string().required(),
        docNumber: Joi.number().required(),
        docIssueDate: Joi.date().required(),
        docExpireDate: Joi.date().required(),
        docCountry: Joi.string().required()
      })
      .required(),
    dailyValue: Joi.number().required()
  }
}
