const Post = require("../models/Post");

const postController = {
    addPost: async (req, res) => {
        const {
            hoTen,
            banner,
            avatar,
            gioiTinh,
            diaChi,
            tinhTrangHonNhan,
            tonGiao,
            ngheNghiep,
            thuNhap,
            chieuCao,
            canNang,
            soThich,
            soGhet,
            gioiThieuThem,
            dienThoai,
            zalo,
            gioiTinh2,
            diaChi2,
            tinhTrangHonNhan2,
            tonGiao2,
            ngheNghiep2,
            thuNhap2,
            chieuCao2,
            canNang2,
            soThich2,
            soGhet2,
            gioiThieuThem2,
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
                    hoTen,
                    banner,
                    avatar,
                    gioiTinh,
                    diaChi,
                    tinhTrangHonNhan,
                    tonGiao,
                    ngheNghiep,
                    thuNhap,
                    chieuCao,
                    canNang,
                    soThich,
                    soGhet,
                    gioiThieuThem,
                    dienThoai,
                    zalo,
                    gioiTinh2,
                    diaChi2,
                    tinhTrangHonNhan2,
                    tonGiao2,
                    ngheNghiep2,
                    thuNhap2,
                    chieuCao2,
                    canNang2,
                    soThich2,
                    soGhet2,
                    gioiThieuThem2,
                    user: req.userId,
                });

                await newPost.save();

                res.json({
                    success: true,
                    message: "Happy learning!",
                    post: newPost,
                });
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
            const posts = await Post.find({ user: req.userId }).populate(
                "user",
                ["username"]
            );
            return res.json({ success: true, posts });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ success: false, message: "Internal server error" });
        }
    },

    putPost: async (req, res) => {
        const {
            hoTen,
            banner,
            avatar,
            gioiTinh,
            diaChi,
            tinhTrangHonNhan,
            tonGiao,
            ngheNghiep,
            thuNhap,
            chieuCao,
            canNang,
            soThich,
            soGhet,
            gioiThieuThem,
            dienThoai,
            zalo,
            gioiTinh2,
            diaChi2,
            tinhTrangHonNhan2,
            tonGiao2,
            ngheNghiep2,
            thuNhap2,
            chieuCao2,
            canNang2,
            soThich2,
            soGhet2,
            gioiThieuThem2,
        } = req.body;

        // Simple validation
        if (!hoTen)
            return res
                .status(400)
                .json({ success: false, message: "Title is required" });

        try {
            let updatedPost = {
                hoTen,
                banner,
                avatar,
                gioiTinh,
                diaChi,
                tinhTrangHonNhan,
                tonGiao,
                ngheNghiep,
                thuNhap,
                chieuCao,
                canNang,
                soThich,
                soGhet,
                gioiThieuThem,
                dienThoai,
                zalo,
                gioiTinh2,
                diaChi2,
                tinhTrangHonNhan2,
                tonGiao2,
                ngheNghiep2,
                thuNhap2,
                chieuCao2,
                canNang2,
                soThich2,
                soGhet2,
                gioiThieuThem2,
                user: req.userId,
            };

            const postUpdateCondition = {
                _id: req.params.id,
                user: req.userId,
            };

            updatedPost = await Post.findOneAndUpdate(
                postUpdateCondition,
                updatedPost,
                { new: true }
            );
            // User not authorised to update post or post not found
            if (!updatedPost)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Excellent progress!",
                post: updatedPost,
            });
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
            const postDeleteCondition = {
                _id: req.params.id,
                user: req.userId,
            };
            const deletedPost = await Post.findOneAndDelete(
                postDeleteCondition
            );

            // User not authorised or post not found
            if (!deletedPost)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({ success: true, post: deletedPost });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
};
module.exports = postController;
