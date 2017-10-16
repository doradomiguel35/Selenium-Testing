var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://mlab-dorado.herokuapp.com/')
    //Login 1st test--- login registered username and password
    .setValue('#username', 'doradomiguel35')
    .setValue('#password', 'lk09mnhg')
    .click('#login')
    .click('#logout')  
    //Login 2nd test--- login registered username but wrong password
    .setValue('#username','doradomiguel')
    .setValue('#password','1234')
    .click('#login')

    //Login 3rd test--- no username but with password
    .setValue('#password','lk09mnhg')
    .click('#login')

    //Login 4th test--- input username but no password
    .setValue('#username','doradomiguel35')
    .click('#login')

    //Login 5th test--- all fields empty
    .click('#login')

    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        
    })

    .click('#button')

    //Register 1st Test --- new account
    .setValue('#name','Tester')           
    .setValue('#email','tester@gmail.com')
    .setValue('#username','tester')
    .setValue('#password','test')
    .setValue('#confirm','test')
    .click('#register')
    .click('#logout')
    .click('#button') 

     //Register 2nd Test --- existing account
    .setValue('#name','Tester')          
    .setValue('#email','tester@gmail.com')
    .setValue('#username','tester')
    .setValue('#password','test')
    .setValue('#confirm','test')
    .click('#register')

     //Register 3rd Test --- wrong email format
    .setValue('#name','Tester')          
    .setValue('#email','tester')
    .setValue('#username','tester')
    .setValue('#password','test')
    .setValue('#confirm','test')
    .click('#register')

    //Register 4th Test --- umatched password and confirm password
    .setValue('#name','ATester')          
    .setValue('#email','atester@gmail.com')
    .setValue('#username','atester')
    .setValue('#password','wrongtest')
    .setValue('#confirm','test')
    .click('#register')

    //Register 5th Test --- no name
    .setValue('#email','atester@gmail.com')
    .setValue('#username','atester')
    .setValue('#password','wrongtest')
    .setValue('#confirm','test')
    .click('#register')

    //Register 6th Test --- no email
    .setValue('#name','ATester')          
    .setValue('#username','atester')
    .setValue('#password','wrongtest')
    .setValue('#confirm','test')
    .click('#register')

    //Register 7th Test --- no username
    .setValue('#name','ATester')          
    .setValue('#email','atester@gmail.com')
    .setValue('#password','wrongtest')
    .setValue('#confirm','test')
    .click('#register')

    //Register 8th Test --- no password
    .setValue('#name','ATester')          
    .setValue('#email','atester@gmail.com')
    .setValue('#username','atester')
    .setValue('#confirm','test')
    .click('#register')

    //Register 8th Test --- no confirm password
    .setValue('#name','ATester')          
    .setValue('#email','atester@gmail.com')
    .setValue('#username','atester')
    .setValue('#password','wrongtest')
    .click('#register')

    //Register 8th Test --- all fields empty
    .click('#register')

    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        
    })


    .end();