const DataModel=require('../model/data.model');
class DataService{
    static async scannedData(data,date){
        try{
            const createData=new DataModel({data});
            return await createData.save();

        }catch(err){
            throw err;
        }
    }



}


module.exports=DataService;