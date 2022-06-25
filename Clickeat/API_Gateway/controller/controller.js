const axios = require('axios').default.create({ validateStatus: () => true })
const reg = require('../registry.json')
const perm = require('../permissions.json')
const jwt = require('jsonwebtoken');
const usedToken = require('../model/usedToken')
const bdd = require("../bdd")
const moment = require('moment');
const { log } = require('debug');
exports.userCreate = async (req, res) => {
    try {
        const email = req.body.email_user
        const password = req.body.password_user
        const role = req.body.id_role

        const user = {
            id_role: role,
            password_user: password,
            email_user: email
        }

        const response = await axios.post('http://localhost:4000/AuthDB/user', user);
        res.status(200).json(response.data);
    } catch (error) {
        console.info(error)
        res.status(404).send(error);
    }
}

function GetAccessToken(user) {
    const authToken = jwt.sign(user,
        process.env.AUT_TOKEN_KEY,
        {
            expiresIn: "30m",
        }
    )
    return authToken;
}

function GetRefreshToken(user) {
    const refreshToken = jwt.sign(user,
        process.env.REF_TOKEN_KEY,
        {
            expiresIn: "1h",
        },
        {
            algorithm: 'HS512'
        }
    );
    return refreshToken
}
exports.login = async (req, res) => {
    try {
        const email = req.body.email_user
        const password = req.body.password_user

        if (!email || !password) {
            res.status(400).send("email and password cannot be empty in order to get a token")
            return
        }

        const user = { email_user: email, password_user: password }
        const response = await axios.post('http://localhost:4000/AuthDB/login', user)

        if (!response.data.result) {
            res.status(400).send("Wrong password or email")
            return
        }

        const usr = {
            id_user: response.data.id_user,
            id_role: response.data.id_role
        }
        const tokens = {
            "authToken": GetAccessToken(usr),
            "refreshToken" : GetRefreshToken(usr)
        }
        res.status(200).json(tokens);
    }
    catch (e) {
        res.status(400).send(e)
    }

}
async function readToken(req) {
    user = await jwt.verify(req.body.refreshToken, process.env.REF_TOKEN_KEY)
    delete user.exp
    delete user.iat
    return user
}

exports.refreshToken = async (req, res) => {
    try {
        if (await usedToken.exists({ _id: req.body.refreshToken }) == null) {
            const rToken = { _id: req.body.refreshToken, expireAt: moment().add(1, 'day').format() }
            user = await readToken(req)
            console.log(user)
            tokens = {
                "authToken": GetAccessToken(user),
                "refreshToken": GetRefreshToken(user)
            }
            await usedToken.create(rToken)
            res.send(tokens)
        }
        else {
            res.status(418).send("Invalid Refresh Token")
        }
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.logout = async (req, res) => {
    try {
        if (!req.body.refreshToken) {
            res.status(400).send("Refresh Token is empty. Please retry in a short moment")
            return
        }
        const rToken = { _id: req.body.refreshToken, expireAt: moment().add(1, 'day').format() }
        await usedToken.create(rToken)
        res.send('Disconnected')
    }
    catch (e) {
        console.info(e)
        res.status(400).send(e)
    }
}

exports.transfer = async (req, res) => {
    try {
        
        if (perm[req.body.id_role][req.params.apiName].methods?.find(method => method === req.method) ) {
        
            const response = await axios({
                url: reg.service[req.params.apiName].url,
                method: req.method,
                data: req.body,
            })
            res.status(response.status).send(response.data)
        }
        else {
            res.status(403).send({result:false,message:'Forbidden'})
        }
    }
    catch (e) {
        res.status(400).send({ Error:e })
    }
}