const router=require('express').Router();

const DataController=require("../controller/data.controller");

router.post('/data',DataController.scandata);
router.get('/finddata',DataController.getAllData);


module.exports=router;