const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        banner: { type: String },
        avatar: { type: String },
        hoTen: { type: String },
        cauNoiTamDac: {
            type: String,
        },
        gioiTinh: { type: String },
        tinhTrangHonNhan: { type: String },
        // ngay sinh
        ngaySinh: { type: String },
        thangSinh: { type: String },
        namSinh: { type: String },
        // Que Quan
        tinhQq: { type: String },
        huyenQq: { type: String },
        xaQq: { type: String },
        // Hien Dang Song
        tinhDs: { type: String },
        huyenDs: { type: String },
        xaDs: { type: String },

        tonGiao: { type: String },
        ngheNghiep: { type: String },
        thuNhap: { type: String },
        chieuCao: { type: String },
        canNang: { type: String },
        gioiThieuThem: { type: String },

        // Mau nguoi yeu ly tuong
        gioiTinh2: { type: String },
        tinhTrangHonNhan2: { type: String },
        khuVucLamQuen2: { type: String },
        tonGiao2: { type: String },
        ngheNghiep2: { type: String },
        thuNhap2: { type: String },
        tuoiHop2: { type: String },
        tuoiHop3: { type: String },
        yeucaukhac2: { type: String },
        myStatus: { type: String },
        vaiTro: { type: String },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);
