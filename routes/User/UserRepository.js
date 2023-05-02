module.exports = {
  getUserList: () => {
    return `
      SELECT
          *
      FROM
          t_user;`;
  },
};
