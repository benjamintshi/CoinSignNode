import express = require('express');
const router = express.Router({ mergeParams: true });
router.get('/', function (req, res) {
    res.send({
        "resp": true,
        "respObj": {},
        "infoMsg": null,
        "infoCode": null,
        "resqTime": ''
    });
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
    path: '/ltc'
};