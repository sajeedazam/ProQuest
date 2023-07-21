var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

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
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(`${uri}`, {
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

router.post("/transfer-data", async (req, res) => {
    try {
    //   const docId = req.body.name;
  
      const result = await Cart.aggregate([
        {
          $merge: {
            into: "notifies",
            on: "_id",
            whenMatched: "replace",
            whenNotMatched: "insert",
          },
        },
      ]);
  
      if (result) {
        await Cart.collection.drop();
        res.status(200);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while transferring data" });
    }
  });

module.exports = router;

