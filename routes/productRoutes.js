const express = require('express');
const router = express.Router();
const supplementController = require('../controllers/supplementController'); 


router.get('/supplements', supplementController.getAllSupplements); 
router.get('/supplements/:id', supplementController.getSupplementById); 
router.post('/supplements', supplementController.addSupplement); 
router.delete('/supplements', supplementController.deleteAllSupplements); 
router.delete('/supplements/:id', supplementController.deleteSupplementById); 
module.exports = router;
