var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    time: { type: String, required: true },
    customerName: { type: String, required: true },
    phone: { type: Number, required: true },
    jobState: { type: String, required: false, default: "PENDING" }
}

);

const Cart = mongoose.model('Cart', jobSchema);

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.auynv35.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

router.get('/cart-list', async function (req, res, next) {
    try {
        const cartItem = await Cart.find();
        res.send(cartItem);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving obj from the collection' });
    }
});

router.post('/cart-list', async function (req, res, next) {
    try {
        const cartItem = new Cart(req.body);
        const savedItem = await cartItem.save();
        res.send(savedItem);
    } catch (error) {
        res.status(400).send({ message: 'Failed to add job to the collection' });
    }
});

router.delete('/cart-list/:cartId', async function (req, res, next) {
    try {
        const cartId = req.params.cartId;
        const deletedJob = await Cart.findByIdAndDelete(cartId);

        if (!deletedJob) {
            res.status(404).send({ message: 'Item not found' });
        } else {
            res.send(deletedJob);
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting item from the collection' });
    }
});
const JobList = require("../.")
router.post('/transfer-data', async (req, res) => {
    try {
      const items = await CardList.find({});
      
      items.forEach(async (item) => {
        const newJob = new JobList(item.toObject());
        await newJob.save();
        await CardList.findByIdAndDelete(item._id);
      });
  
      res.status(200).json({message: "Data transferred successfully"});
    } catch (error) {
      res.status(500).json({error: "An error occurred while transferring data"});
    }
  });
  



module.exports = router;

