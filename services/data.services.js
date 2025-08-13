const DataModel=require('../model/data.model');
class DataService{
    static async scannedData(data){
        try{
            const createData=new DataModel({data});
            return await createData.save();

        }catch(err){
            throw err;
        }
    }
    static async checkdata(data){
    try{
        return await DataModel.findOne({data});

    }
    catch(err){
        throw err;
    }
}



}


module.exports=DataService;