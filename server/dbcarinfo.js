// const mongoose = require('mongoose');
// const CarinfoSchema = new mongoose.Schema({
//     fullname: String,
//     email: String,
//     cartype: String,
//     serveDate: Number,
//     complaints: String
// })
// const CarModel = mongoose.model("serviceinfo",CarinfoSchema)
// module.exports = CarModel

const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    cartype: { type: String, required: true },
    serveDate: { type: Date, required: true }, 
    complaints: { type: String, required: true }
});

const CarModel = mongoose.model('serviceinfos', CarSchema);
module.exports = CarModel;

