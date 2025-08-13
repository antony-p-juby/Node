const router=require('express').Router();

const DataController=require("../controller/data.controller");

router.post('/data',DataController.scandata);


module.exports=router;