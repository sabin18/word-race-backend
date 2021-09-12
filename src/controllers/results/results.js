import models from '../../database/models';
import responseUtil from '../../Utils/responseUtil';
import strings from '../../Utils/strings';
import ip from 'ip';


const { ErrorResponse, response } = responseUtil;
const MyIp=ip.address();
console.log(MyIp)
class ResultsController {
static  async GetAllReults(req,res){
    const results = await models.results.findAll({ where:{ip:MyIp}})
   return response (res,200,'',results)
}

static async AddResults(req,res) {
  const  {score,level} = req.body;
   const newResult = await models.results.create ({
      score:score,
      level:level,
      ip:MyIp,
   })
   return response (res,201,strings.result.success.RESULT_CREATED,newResult)
}
}

export default ResultsController;