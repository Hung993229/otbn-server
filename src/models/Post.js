const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    hoTen: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
    },
    avatar: {
        type: String,
    },
    gioiTinh: {
        type: String,
    },
    diaChi: {
        type: String,
    },
    tinhTrangHonNhan: {
        type: String,
    },
    tonGiao: {
        type: String,
    },
    ngheNghiep: {
        type: String,
    },
    thuNhap: {
        type: Number,
    },
    chieuCao: {
        type: Number,
    },
    canNang: {
        type: Number,
    },
    soThich: {
        type: String,
    },
    soGhet: {
        type: String,
    },
    gioiThieuThem: {
        type: String,
    },
    dienThoai: {
        type: Number,
    },
    zalo: {
        type: Number,
    },
    gioiTinh2: {
        type: String,
    },
    diaChi2: {
        type: String,
    },
    tinhTrangHonNhan2: {
        type: String,
    },
    tonGiao2: {
        type: String,
    },
    ngheNghiep2: {
        type: String,
    },
   
    thuNhap2: {
        type: Number,
    },
    chieuCao2: {
        type: Number,
    },
    canNang2: {
        type: Number,
    },
    soThich2: {
        type: String,
    },
    soGhet2: {
        type: String,
    },
    gioiThieuThem2: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Post", PostSchema);
