import Product from "../models/product.js"

export const addProduct = async (req, res) => {
    const { name, description, price, image } = req.body
    const newProduct = new Product({
        name,
        description,
        price,
        image

    })
    try {

        const savedProduct = await newProduct.save()
        res.json(savedProduct)
        //    await Product.create(newProduct);
        res.json("data submitted");
    } catch (error) {
        res.status(500).json({ error: "An error occured when fetching product." })
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const post = await Product.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, description, image, price } = req.body

    try {
        const updateedProduct = await Product.findByIdAndUpdate(id, { $set: { name, description, image, price } }, { new: true })
        res.status(200).json(updateedProduct)
    } catch (error) {
        res.json(error.message)
    }
}


export const removeProduct = async (req,res) => {
    const {id} =req.params
    try {
        await Product.findByIdAndDelete(id)
        res.json('Deleted Successfully')
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const getById= async(req,res) => {
    const {id} =req.params
    try {
        const getId = await Product.findById(id)
        res.json(getId)
    } catch (error) {
        res.status(500).json({error : "An error occured when fetching product."})
    }
}