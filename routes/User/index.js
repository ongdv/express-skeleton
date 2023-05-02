const user = require('./UserController');
// route로 내보내기 전에, path, route 객체 미리 정의
module.exports = { path: '/user', cont: user };
