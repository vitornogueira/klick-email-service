const UserRepository = require('../repositories/user');
const mailer = require('../services/mailer');

module.exports = (data) => {
  const model = new UserRepository();

  model.create(data);

  return mailer.send({
    to: data.email,
    title: 'Register',
    content: '# Hey! You have been registered!',
  });
};
