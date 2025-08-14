const DataService=require('../services/data.services');

exports.scandata=async(req,res,next)=>{
    try{
        const {data}=req.body;
        if (!data) {
            return res.status(400).json({ status: false, error: 'data is required' });
        }
        let responseData=await DataService.scannedData(data);
        res.status(201).json({ status: true, success: responseData });

    }catch(error){
    console.error('Error in scandata:', error);
    res.status(500).json({ status: false, error: error.message });
    }
}

exports.getAllData = async (req, res) => {
    try {
        const responseData = await DataService.getAllData();
        res.status(200).json({ status: true, data: responseData });
    } catch (error) {
        console.error('Error in getAllData:', error);
        res.status(500).json({ status: false, error: error.message });
    }
};
