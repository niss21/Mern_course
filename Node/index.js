const http = require('http');
const port = process.env.PORT || 8000;

// const {login} = require("./auth.js")
// login()
// const { signup } = require("./auth")
// signup()

const auth = require("./auth")
auth.signup()
auth.login()


const server = http.createServer((req, res) => {

    console.log("inside server");
    res.write("hello world");
    res.end()

    if (req.url == "/products") {

        if (req.method == "GET") {
            console.log("Get..")
        }

        if (req.method == "POST") {
            console.log("Post..")
        }

        if (req.method == "PUT") {
            console.log("Put..")
        }
        console.log(req.method)
    }
});

server.listen(port, () => { console.log(`Server is listening on the port on ${port}`) });
