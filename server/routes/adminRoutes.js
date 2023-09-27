const { signup, signin } = require("../controllers/adminController");

const router = require("express").Router();

router.post("/signin", signin);
router.post("/signup", signup);
// router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
// router.get("/logout/:id", logOut);

module.exports = router;
