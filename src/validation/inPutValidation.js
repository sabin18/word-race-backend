import Joi from '@hapi/joi';
import responseUtil from '../Utils/responseUtil';

const { ErrorResponse } = responseUtil;

const validation = (req, res, schema, next) => {
  const { error } = schema.validate(req.body, req.params, { abortEarly: false });
  if (error) {
    const errorMessages = [];
    error.details.forEach(detail => {
      errorMessages.push(detail.message.split('"').join(''));
    });
    return ErrorResponse(res,400,errorMessages);
  }
  return next();
};
class Inputvalidation {
    static validateAddResult(req, res, next) {
      const schema = Joi.object({
        score: Joi.number().integer().min(1).required(),
        level: Joi.number().integer().min(1).required(),
      });
      validation(req, res, schema, next);
   
  }
}

export default Inputvalidation