const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//enabling cors
app.use(cors())

// parse post json body
app.use(express.json())


app.get("/", (req, res) => {
    res.send({ id: 1, name: "tanim", age: 11 });
});

const users = [
    { id: 1, name: "Tom", email: "tom@gmail.com", phone: "017777777" },
    { id: 2, name: "John", email: "john@gmail.com", phone: "017777777" },
    { id: 3, name: "Leo", email: "leo@gmail.com", phone: "017777777" },
    { id: 4, name: "Brad", email: "brad@gmail.com", phone: "017777777" },
    { id: 5, name: "Bruce", email: "bruce@gmail.com", phone: "017777777" },
    { id: 6, name: "Bale", email: "bale@gmail.com", phone: "017777777" },
    { id: 7, name: "Jack", email: "jack@gmail.com", phone: "017777777" },
];

app.get("/users", (req, res) => { // get req er jonno api baniyechi.
    // req.query dile amra ekta object pai. query gular = er ager ongsho hoy object er property name and = er porer ongsho hoy property value;
    // filter by query parameter
    if(req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users);
    }
    
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    res.send(user)
})

// post data
app.post("/user", (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get("/fruits", (req, res) => {
    res.send(["mango", "apple", "orange"])
})

// multi layered api
app.get("/fruits/mango/fazlee", (req, res) => {
    res.send("sour sour fazlee flavour")
})

app.listen(port, () => { 
    console.log("Server started. Listening to", port);
});
