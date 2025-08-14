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
    static async deleteData(id) {
        try {
            // Step 1: Delete the document with the given id
            const deletedDoc = await DataModel.findOneAndDelete({ id: id });
            if (!deletedDoc) return null;

            // Step 2: Decrement the id of all documents where id > deleted id
            await DataModel.updateMany(
                { id: { $gt: id } },
                { $inc: { id: -1 } }
            );

            return deletedDoc;
        } catch (error) {
            throw error;
        }
    }


}


module.exports=DataService;