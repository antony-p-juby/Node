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

exports.deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ status: false, error: 'id is required' });
        }

        const deletedDoc = await DataService.deleteData(parseInt(id, 10));
        if (!deletedDoc) {
            return res.status(404).json({ status: false, error: 'Data not found' });
        }

        res.status(200).json({
            status: true,
            message: 'Data deleted and IDs updated successfully',
            deleted: deletedDoc
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

