import express = require('express');
const router = express.Router({ mergeParams: true });
router.get('/', function (req, res) {
    try {
        res.send({
            "resp": true,
            "respObj": {},
            "infoMsg": null,
            "infoCode": null,
            "resqTime": ''
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/sign', function (req, res) {
    let param = req.params;
    res.send({
        "resp": true,
        "respObj": {},
        "infoMsg": null,
        "infoCode": null,
        "resqTime": ''
    });
})

module.exports = {
    router: router,
    path: '/btc'
};