const Post = require("../models/Post");

const postController = {
    addPost: async (req, res) => {
        const {
            banner,
            avatar,
            hoTen,
            cauNoiTamDac,
            gioiTinh,
            tinhTrangHonNhan,
            // ngay sinh
            ngaySinh,
            thangSinh,
            namSinh,
            // Que Quan
            tinhQq,
            huyenQq,
            xaQq,
            // Hien Dang Song
            tinhDs,
            huyenDs,
            xaDs,

            tonGiao,
            ngheNghiep,
            thuNhap,
            chieuCao,
            canNang,
            gioiThieuThem,

            // Mau nguoi yeu ly tuong
            gioiTinh2,
            tinhTrangHonNhan2,
            khuVucLamQuen2,
            tonGiao2,
            ngheNghiep2,
            thuNhap2,
            tuoiHop2,
            tuoiHop3,
            yeucaukhac2,
            myStatus,
            vaiTro,
            user,
        } = req.body;

        if (!hoTen) {
            return res.status(400).json({
                success: false,
                message: "Title and user is required",
            });
        }
        if (hoTen) {
            try {
                const newPost = new Post({
                    banner,
                    avatar,
                    hoTen,
                    cauNoiTamDac,
                    gioiTinh,
                    tinhTrangHonNhan,
                    // ngay sinh
                    ngaySinh,
                    thangSinh,
                    namSinh,
                    // Que Quan
                    tinhQq,
                    huyenQq,
                    xaQq,
                    // Hien Dang Song
                    tinhDs,
                    huyenDs,
                    xaDs,

                    tonGiao,
                    ngheNghiep,
                    thuNhap,
                    chieuCao,
                    canNang,
                    gioiThieuThem,

                    // Mau nguoi yeu ly tuong
                    gioiTinh2,
                    tinhTrangHonNhan2,
                    khuVucLamQuen2,
                    tonGiao2,
                    ngheNghiep2,
                    thuNhap2,
                    tuoiHop2,
                    tuoiHop3,
                    yeucaukhac2,
                    myStatus,
                    vaiTro,
                    user,
                });

                await newPost.save();

                res.json(newPost);
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            }
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findOne({ user: req.params.id });
            return res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    yourPost: async (req, res) => {
        try {
            const post = await Post.findOne({ user: req.params.id });
            return res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    putPost: async (req, res) => {
        const {
            banner,
            avatar,
            hoTen,
            cauNoiTamDac,
            gioiTinh,
            tinhTrangHonNhan,
            // ngay sinh
            ngaySinh,
            thangSinh,
            namSinh,
            // Que Quan
            tinhQq,
            huyenQq,
            xaQq,
            // Hien Dang Song
            tinhDs,
            huyenDs,
            xaDs,

            tonGiao,
            ngheNghiep,
            thuNhap,
            chieuCao,
            canNang,
            gioiThieuThem,

            // Mau nguoi yeu ly tuong
            gioiTinh2,
            tinhTrangHonNhan2,
            khuVucLamQuen2,
            tonGiao2,
            ngheNghiep2,
            thuNhap2,
            tuoiHop2,
            tuoiHop3,
            yeucaukhac2,
            myStatus,
            vaiTro,
        } = req.body;

        // Simple validation
        // if (!hoTen)
        //     return res
        //         .status(400)
        //         .json({ success: false, message: "Title is required" });

        try {
            let updatedPost = {
                banner,
                avatar,
                hoTen,
                cauNoiTamDac,
                gioiTinh,
                tinhTrangHonNhan,
                // ngay sinh
                ngaySinh,
                thangSinh,
                namSinh,
                // Que Quan
                tinhQq,
                huyenQq,
                xaQq,
                // Hien Dang Song
                tinhDs,
                huyenDs,
                xaDs,

                tonGiao,
                ngheNghiep,
                thuNhap,
                chieuCao,
                canNang,
                gioiThieuThem,

                // Mau nguoi yeu ly tuong
                gioiTinh2,
                tinhTrangHonNhan2,
                khuVucLamQuen2,
                tonGiao2,
                ngheNghiep2,
                thuNhap2,
                tuoiHop2,
                tuoiHop3,
                yeucaukhac2,
                myStatus,
                vaiTro,
            };
            const postUpdateCondition = {
                _id: req.params.id,
                // user: req.userId,
            };

            updatedPost = await Post.findOneAndUpdate(
                postUpdateCondition,
                updatedPost,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updatedPost)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json(updatedPost);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            return res.json("delete post success");
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    getAllPost: async (req, res) => {
        const {
            gioiTinh2,
            tinhTrangHonNhan2,
            tonGiao2,
            thuNhap2,
            tuoiHop2,
            tuoiHop3,
            huyenDs,
            huyenQq,
        } = req.query;
        try {
            const allPost = await Post.find({
                $or: [
                    {
                        $and: [
                            { myStatus: 0 },
                            { gioiTinh: gioiTinh2 },
                            { tinhTrangHonNhan: tinhTrangHonNhan2 },
                            { tonGiao: tonGiao2 },
                            { thuNhap: thuNhap2 },
                            { namSinh: { $gte: tuoiHop2 } },
                            { namSinh: { $lte: tuoiHop3 } },
                            {
                                $or: [
                                    { huyenDs: huyenDs },
                                    { huyenQq: huyenQq },
                                ],
                            },
                        ],
                    },
                    { $and: [{ gioiTinh: gioiTinh2 }, { vaiTro: 2 }] },
                ],
            });

            return res.status(200).json(allPost);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};
module.exports = postController;
