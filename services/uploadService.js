const path = require("path");
const uploadpic = async (req, res) => {
    const { image } = req.files;
    if (!image) return "No image provided!";
    image.mv(path.join(__dirname, '..', './public/profiles', req.session.username+".png"));
    return true;
}  

module.exports = { uploadpic }