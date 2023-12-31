import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save();
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
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)

    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const Hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 } }).limit(req.query.limit);
        res.status(200).json(Hotels)

    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list);

    } catch (err) {
        next(err);
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabins" });
        res.status(200).json([
            { type: "Hotel", count: hotelCount },
            { type: "Apartments", count: apartmentCount },
            { type: "Resorts", count: resortCount },
            { type: "Villas", count: villaCount },
            { type: "Cabins", count: cabinCount },
        ]);

    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room)
        })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}