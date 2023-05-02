var express = require('express');
const userService = require('./UserService');
var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await userService.getUserList();
    return res.status(200).json({
      status: 200,
      data: result,
      message: 'SUCCESS',
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error,
    });
  }
});

module.exports = router;
