import productModel from "../models/productModel.js";

class ProductCtrl {
  async getAllProducts(req, res) {
    try {
      const products = await productModel.find();
      res.status(200).json({
        message: "Lấy tất cả thành công :)",
        data: products,
      });
    } catch (err) {
      res.status(500).json({
        message: "lỗi " + err.message,
      });
    }
  }
  async getOneProduct(req, res) {
    try {
      const product = await productModel.findById(req.params.id);
      res.status(200).json({
        message: "Thêm thành công",
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        message: "lỗi " + err.message,
      });
    }
  }
  // async getFeaturedProduct(req, res) {
  //   try {
  //     const product = await productModel.findById(req.params.id);
  //     res.status(200).json({
  //       message: "Thêm thành công",
  //       data: product,
  //     });
  //   } catch (err) {
  //     res.status(500).json({
  //       message: "lỗi " + err.message,
  //     });
  //   }
  // }
  async newProduct(req, res) {
    try {
      const product = await productModel.create({...req.body});
      res.status(200).json({
        message: "Thêm thành công",
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        message: "lỗi " + err.message,
      });
    }
  }
  async updateProduct(req, res) {
    try {
      const product = await productModel.findByIdAndUpdate(req.params.id,req.body, {new:true});
      if(!product) {
        res.status(404).json({message:'Not found'})
      }
      res.status(200).json({
        message: "Cập nhật thành công",
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        message: "lỗi " + err.message,
      });
    }
  }
  async deleteProduct(req, res) {
    try {
      const product = await productModel.findByIdAndDelete(req.params.id);
      if(!product) {
        res.status(404).json({message:'Not found'})
      }
      res.status(200).json({
        message: "Xóa thành công",
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        message: "lỗi " + err.message,
      });
    }
  }
}

export default ProductCtrl