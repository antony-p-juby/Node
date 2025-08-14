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

    static async getAllData() {
    try {
        return await DataModel.find().lean(); 
    } catch (err) {
        throw err;
    }
    }


}


module.exports=DataService;