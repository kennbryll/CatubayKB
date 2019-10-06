var salt = 'XyZzy12*_';

// function that converts string to md5
function stored_hash()
{
    return md5(salt + 'javascript123');
}

function login()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    document.getElementById('login-error-message').style.display = 'none';
    
    if (username == "" || password == "") {
        document.getElementById('login-error-message').style.display = 'block';
        document.getElementById('login-error-message').innerHTML = 'Username and password are required.';
    } else {
        if (stored_hash() != md5(salt + password)) {
            document.getElementById('login-error-message').style.display = 'block';
            document.getElementById('login-error-message').innerHTML = 'Incorrect password.';

            document.getElementById('username').value = null;
            document.getElementById('password').value = null;
        } else {
            window.location.href = 'game.html?user=' + username;
        }
    }
}