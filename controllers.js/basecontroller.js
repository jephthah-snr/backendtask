const main = async (req, res) => {
    res.send({
        "slackUsername": "jeph d'emgime",
        "backend": true,
        "age": 23,
        "bio": "i am a backemd engineer"
    })
};

module.exports = {main}