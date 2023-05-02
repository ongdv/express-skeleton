// mysql 모듈을 promise 형태로 지원
const { createPool } = require('mysql2/promise');

// 데이터베이스 설정 불러오기
const DBConfig = require('../config/DBConfig');

// pool 생성
const DB = createPool(DBConfig);

// DB로 내보내기, 외부에서 사용시 DB 객체를 통해 데이터베이스 커넥션 객체 획득 가능
module.exports = DB;
