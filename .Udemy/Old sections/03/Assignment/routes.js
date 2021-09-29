const UserController = require('./Controllers/UserController')

const CreatePageHeader = (res) => {
    res.write('<html>');
    res.write('<body>');

}

const CreatePageFooter = (res) => {
    res.write('</html>');
    res.write('</body>');
}

const CreateLandingPage = (res) => {
    res.write('<h1>Hello assignment!</h1>');
}

const CreateUserForm = (res) => {
    res.write(`
    <form action="/users" method="POST">
        <input type="text" name="message">
        <button type="submit">Create user</button>
    </form>`)
}

const Router = (req, res) => {
    var url = req.url;
    var method = req.method;

    CreatePageHeader(res);

    if(url === '/') {
        CreateLandingPage(res);
        CreateUserForm(res);
    }
    else if (url.includes('users')){
        if(method === 'POST'){
            UserController.CreateUser(req);
            res.writeHead(302, {
                'Location': 'your/404/path.html'
                //add other headers here...
            });
        }
        else{
            res.write(UserController.GetAllUsers());
        }
    }

    CreatePageFooter(res);
    return res.end();
}

module.exports = {
    RouteHandler: Router
}