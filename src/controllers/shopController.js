const shop = require("../models/Shop");
const shopController = {
    addshop: async (req, res) => {
        const {
            AnhSanPham,
            TenSanPham,
            giaKhuyenMai,
            giaNiemYet,
            thongTinNguoiBan,
            thongTinSanPham,

            xa,
            huyen,
            tinh,
            vaiTro,
            user,
        } = req.body;

        try {
            const newshop = new shop({
                AnhSanPham,
                TenSanPham,
                giaKhuyenMai,
                giaNiemYet,
                thongTinNguoiBan,
                thongTinSanPham,

                xa,
                huyen,
                tinh,
                vaiTro,
                user,
            });

            await newshop.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                shop: newshop,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    getshop: async (req, res) => {
        const { huyenDs, huyenQq } = req.query;
        try {
            const sanpham = await shop.find({
                $or: [{ huyen: huyenDs }, { huyen: huyenQq }, { vaiTro: 2 }],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                sanpham,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    putshop: async (req, res) => {
        const {
            AnhSanPham,
            TenSanPham,
            giaKhuyenMai,
            giaNiemYet,
            thongTinNguoiBan,
            thongTinSanPham,

            xa,
            huyen,
            tinh,
            vaiTro,
            user,
        } = req.body;
        try {
            let updateshop = {
                AnhSanPham,
                TenSanPham,
                giaKhuyenMai,

                giaNiemYet,

                thongTinNguoiBan,

                thongTinSanPham,

                xa,
                huyen,
                tinh,
                vaiTro,
                user,
            };

            const updateshopCondition = {
                _id: req.params.id,
            };

            updateshop = await shop.findOneAndUpdate(
                updateshopCondition,
                updateshop,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateshop)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                shop: updateshop,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // delete shop
    deleteshop: async (req, res) => {
        try {
            const deleteshop = await shop.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                success: true,
                message: "Delete thành công!",
                shop: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = shopController;
