const express = require("express");
const User = require("./mongo");
const cors = require("cors");
const app = express();
const PORT = 8000; 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", async (req, res) => { 
    const { email, password } = req.body;

    try {
        const check = await User.findOne({ email: email, password: password }); 

        if (check) {
            res.json("success"); 
        } else {
            res.json("fail"); 
        }
    } catch (e) {
        console.error(e);
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            const newUser = new User({ email, password });
            await newUser.save();
            res.json("notexist");
        }
    } catch (e) {
        console.error(e);
        res.json("fail");
    }
});


app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});