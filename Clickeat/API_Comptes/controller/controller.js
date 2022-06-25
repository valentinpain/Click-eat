const db = require("../model/sequelize")
const c  = require('bcryptjs')

const User = db.User

//enum d'op�rateur pour permettre de faire des operations complexes (sinon c'est par d�faut equals)
const { Op } = require('sequelize');
const { log } = require("debug");


exports.userCreate = async (req, res) => {

    try {


        const email = req.body.email_user
        const role = req.body.id_role
        const password = await c.hash(req.body.password_user, 10)
        const uniqueEmail = await User.findOne({ where: { email_user: email } })
        console.log(email)
        const sponsored = req.body.sponsored_by_user
        const sponsorExist = await User.findOne({ where: { email_user: sponsored } })
        if (sponsored && !sponsorExist) {
            res.status(400).send("Sponsor isn't empty and doesn't exist")
            return
        }
        if (!password || !email || uniqueEmail) {
            res.status(400).send("Password or email cannot be empty. Or email is already used")
            return
        }
        const user = {
            password_user: password,
            email_user: email,
            id_role: role,
            sponsored_by_user: sponsored
        }
        console.log(user)
        await User.create(user)
        res.send(user)
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
};

exports.userUpdate = async (req, res) => {

    const email = req.body.email_user
    const role = req.body.id_role
    const id = req.body.id_user
    //penser � rajouter une partie pour hasher le nouveau mdp
    const password = req.body.password_user

    if (!id || !password || !email) {
        res.status(400).send("id, password or email cannot be empty.")

    }

    const user = {
        password_user: password,
        email_user: email,
        id_role: role
    }

    try {
        await User.update(user, {
            where: {
                id_user: {
                    [Op.eq]:id
                }
            }
        })
        res.send(user)
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.userDelete = async (req, res) => {
    const id = req.body.id_user

    if (!id ) {
        res.status(400).send("id cannot be empty.")

    }

    try {
        await User.destroy( {
            where: {
                id_user: {
                    [Op.eq]: id
                }
            }
        })
        res.send("User with the id: "+id+" has been deleted")
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.userGet = async (req, res) => {
    const id = req.body.id_user

    if (!id) {
        res.status(400).send("id cannot be empty.")

    }

    try {
        const user = await User.findAll({
            where: {
                id_user: {
                    [Op.eq]: id
                }
            }
        })
        res.json({user})
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.dataGet = async (req, res) => {
    try {
        const user = await User.findAll({
        })
        res.json({ user })
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.userLogin = async (req, res) => {
    try {
        const email = req.body.email_user
        const password = req.body.password_user



        if (!email || !password) {
            res.status(400).send({"result":false})
            return
        }
        const user = await User.findOne({
            where: {
                        email_user: {
                            [Op.eq]: email
                        }
            }
        })
        result = await c.compare(password, user.password_user)
        ret = result ? { "result": result, "id_user": user.id_user, "id_role": user.id_role } : {"result":result}
        res.send(ret)
    }
    catch (e) {
        console.info(e)
        res.status(400).send({ "result": false })
    }
}

