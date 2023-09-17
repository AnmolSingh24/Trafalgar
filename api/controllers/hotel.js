import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    try {
        const savedHotel = await new Hotel.save();
        res.status(200).json(savedHotel)

    } catch (err) {
        next(err);
    }
}

export const updatedHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await new Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted")

    } catch (err) {
        next(err);
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const Hotel = await Hotel.findById(req.params.id);
        res.status(200).json(Hotel)

    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const Hotels = await Hotel.find();
        res.status(200).json(Hotels)

    } catch (err) {
        next(err);
    }
}