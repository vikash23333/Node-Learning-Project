import { asyncHandler } from "../utils/asyncHandler.js";

const registerUserDetails =  asyncHandler( async (req, res) => {
    res.status(200).json({
        message:"ok"
    })
})

export { registerUserDetails }