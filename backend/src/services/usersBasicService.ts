import userModel from '../models/userSchema'

const regUser = async (data) => {
    const user = await new userModel(data)
    user.save()
    return user
}

const getAllUser = async (): Promise<[{}]> => {
    const users: [{}] = await userModel.find({})
    return users
}

const getUserOption = async (option:{}): Promise<[{}]> => {
    const user:[{}] = await userModel.find(option)
    return user
}
module.exports = {
    regUser,
    getAllUser,
    getUserOption
}