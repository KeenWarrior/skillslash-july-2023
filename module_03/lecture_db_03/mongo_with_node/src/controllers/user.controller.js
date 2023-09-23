import User from "../models/user.model.js";

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUserById = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const nearbyUsers = async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const users = await User.find({
        home: {
            $near: {
                $maxDistance: 1000,
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat],
                },
            },
        },
    });

    res.json(users);
};

export {
    getUserById,
    deleteUserById,
    createUser,
    nearbyUsers
}
        