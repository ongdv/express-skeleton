const db = require('../../utils/db');
const userRepository = require('./UserRepository');

// 유저 서비스
module.exports = {
  /**
   * 유저 전체 목록 조회
   * --
   * @returns
   */
  getUserList: async () => {
    try {
      const conn = await db.getConnection();
      const query = userRepository.getUserList();
      const [result] = await conn.query(query);
      return result;
    } catch (err) {
      throw new err();
    }
  },
};
