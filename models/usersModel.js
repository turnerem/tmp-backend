const connection = require('../db/connection');

const fetchUsers = () => {
    return connection.select('*').from('users')
    .then(users => {
       console.log(users)
         return users;
    })
    
};

const fetchUser = (username) => {
    return connection
    .select('*')
    .from('users')
    .where({username: username}).first()
    .then(user => {
       if (user.length === 0) {
             return Promise.reject({
                status: 404,
                msg: `No user found for username: ${username}`
          });
       } return user;
    })
    
 };
module.exports = {fetchUser, fetchUsers};