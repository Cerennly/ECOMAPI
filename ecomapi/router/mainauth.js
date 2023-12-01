const router = require("express").Router();
const User = require("../sections/User")

//register
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
    });

    try{
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }catch(err) {
        res.status(500).json(err);
    }
    
});

//login

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password, 
        });
        !user && res.status(401).json("wrong please registered")

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }

});

module.exports = router;