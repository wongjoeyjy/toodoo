// const { default: Home } = require("../views/Home");
const sha256 = require("js-sha256");
const SALT = 'louvre museum';

module.exports = (db) => {

    let homepage = (req, res) => {

        if (!req.cookies.loggedIn) {
            res.render('Home');
        }
        else if (req.cookies.loggedIn == 'false') {
            res.render("Home");
        }
        else if (req.cookies.loggedIn == 'true') {

            let username = req.cookies.username;

            res.redirect(`/user/${username}`);
        }
        
    };

    let register = (req, res) => {
        res.render("Register");
    };

    let newUser = (req, res) => {
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let username = req.body.username;
        let password = req.body.password;
        
        password = sha256(password + SALT);

        db.users.getNewUser(first_name, last_name, username, password, (err, result) => {
            if (err) {
                console.log('error at users_controller, newUser ---', err.message);
            }
            else {
                res.cookie("username", result.rows[0].username);
                res.cookie("user_id", result.rows[0].id);
                res.cookie("loggedIn", true);
                console.log(result.rows[0]);
                // res.redirect(`/user/${result.rows.username}`);
                res.render('NewUser', result)
            }
        })
    }

    let login = (req, res) => {
        res.render('Login');
    }

    let verifyInfo = (req, res) => {

        let username = req.body.username;
        let password = req.body.password;

        // hashing password
        password = sha256(password + SALT);

        db.users.getVerifyInfo(username, password, (err, result) => {
            if (err) {
                console.log('error at users_controller, verifyInfo ---', err.message);
            }
            else {
                if (result == 'wrong username') {
                    // res.send('user not found!');
                    let error = ['User not found!'];
                    res.render('Login', error);
                }
                else if (result == 'wrong password') {
                    // res.send('wrong password!');
                    let error = ['Wrong Password!'];
                    res.render('Login', error);
                }
                else {
                    res.cookie("username", result.rows[0].username);
                    res.cookie("user_id", result.rows[0].id);
                    res.cookie("loggedIn", true);
                    res.redirect(`/user/${result.rows[0].username}`);
                } 
                
            }
        })
    }

    let logout = (req, res) => {
        res.clearCookie('username');
        res.clearCookie('user_id');
        res.cookie("loggedIn", "false");
        res.redirect('/');
    }

    return {
        homepage,
        register,
        newUser,
        login,
        verifyInfo,
        logout
    };
};
