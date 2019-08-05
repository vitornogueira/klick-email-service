const UserRepository = require('../repositories/user');
const mailer = require('../services/mailer');

module.exports = ({ identifier, title, content }) => {
  const model = new UserRepository();
  const user = model.find(identifier);

  return mailer.send({
    to: user.email,
    title,
    content,
  });
};
