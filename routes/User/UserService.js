const db = require('../../utils/db');
const userRepository = require('./UserRepository');

module.exports = {
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
