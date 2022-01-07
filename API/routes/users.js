const router = require('express').Router();
router.get('/',(req,res) => {
    res.send('users router')
})
module.exports = router