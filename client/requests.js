//server request functions using Jquery and Ajax requests
placeSoldier = function(x,y,xDir,yDir) {
  $.ajax({
    url: 'http://localhost:2000/api/move',
    type: 'post',
    data: {
      moveType: 'placeSoldier',
      x: x,
      y: y,
      xDir: xDir,
      yDir: yDir
    },
    headers: {
      'x-access-token': token,
    },
    dataType: 'json',
    success: function(data) {
      console.info(data);
    }
  });
}

login = function(email, password) {
  $.ajax({
    url: 'http://localhost:2000/api/login',
    type: 'post',
    data: {
      email:email,
      password:password
    },
    dataType: 'json',
    success: function(data) {
      console.info(data);
      token = data.token;
      localStorage.setItem('token', token);
    }
  });
}

register = function(email, password,password2, username) {
  if(password != password2) {
      alert("passwords do not match");
  }
  else {
    $.ajax({
      url: 'http://localhost:2000/api/register',
      type: 'post',
      data: {
        email:email,
        username:username,
        password:password
      },
      dataType: 'json',
      success: function(data) {
        console.info(data);
      }
    });
  }
}