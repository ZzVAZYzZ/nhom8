
const Model = require('../models/diemdanhModel')





const postData = async function(req,res,danhsachdiemdanh){
    const {ten, mssv} = req.body;
    req.danhsachdiemdanh.push({
        tenSv: ten,
        mssv: mssv
    })

    const result = await Model.create({
        ten,
        mssv
    });

    res.send("post du lieu thanh cong");
}
module.exports = { postData }