const DataService=require('../services/data.services');

exports.scandata=async(req,res,next)=>{
    try{
        const {data}=req.body;
        let responseData=await DataService.scannedData(data);
        res.json({status:true,success:responseData});

    }catch(error){
    console.error(' Error:', error);
    res.status(500).json({ error: error.message });
    }
}

