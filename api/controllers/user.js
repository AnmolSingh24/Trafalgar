import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    const userId = req.params.userId;
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        try {
            await User.findByIdAndUpdate(userId, { $push: { Users: savedUser._id } })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedUser);
    } catch (err) {
        next(err)
    }
}

export const updatedUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedUser)

    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted")

    } catch (err) {
        next(err);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)

    } catch (err) {
        next(err);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users)

    } catch (err) {
        next(err);
    }
}