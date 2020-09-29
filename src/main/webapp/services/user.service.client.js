function AdminUserServiceClient() {
  this.createUser = createUser;
  this.findAllUsers = findAllUsers;
  this.findUserById = findUserById;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/yuyang/users';
  var self = this;

  function findAllUsers() {
    return fetch(this.url)
    .then(response => response.json())
  }

  function createUser(user) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
  }

  function findUserById(userId) {
  }

  function updateUser(userId, user) {
    return fetch(this.url + '/' + userId, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  function deleteUser(userId) {
    return fetch(this.url + '/' + userId, {
      method: 'DELETE'
    })
  }
}