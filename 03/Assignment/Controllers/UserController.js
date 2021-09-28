const { Console } = require("console");

const users = [
    {
        "Username": "Matevz",
    },
    {
        "Username": "Luka",
    }
]

const GetAllUsers = () => users;

const CreateUser = (req) => {
    let chunks = [];

    req.on('data', (chunk) => {
        console.log(`Chunk data: ${chunk}`)
        chunks.push(chunk);
    })

    req.on('end', () => {
        var data = Buffer.concat(chunks);
        console.log(`Raw data: ${data}`);

        var userData = data.slice(8);
        
        console.log(`Username: ${userData}`);
        users.push({"Username": userData});
    })
}

const GetListOfUsers = () => {
    let users = GetAllUsers();
    let htmlList = '<ul>';

    users.forEach((user) => {
        htmlList += `<li>${user.Username}</li>`;
    })

    htmlList += '</ul>'

    return htmlList;
}

module.exports = {
    GetAllUsers: GetListOfUsers,
    CreateUser: CreateUser
}
