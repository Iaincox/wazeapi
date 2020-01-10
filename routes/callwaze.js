var express = require('express');
var router = express.Router();
const path = require('path');
const https = require('https');

const wazeFullURL = 'https://world-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&format=JSON&types=traffic,alerts,irregularities&polygon=-2.321000,52.700000;-2.420000,52.650000;-2.411000,52.483000;-2.360000,52.235000;-1.868000,52.144000;-1.354000,52.148000;-1.082000,52.331000;-1.026000,52.448000;-1.280000,52.733000;-1.827000,52.824000;-2.321000,52.700000'

/* GET waze listing. */

/*router.post('/wazeAPI', function(req, res, next) {
    console.log('Got here!')
    res.send('Waze API');
});*/

router.post('/api/v1/schedleCall', function (req, res) {
    console.log('Call the Waze API');
    let data = '';
    https.get(wazeFullURL, (resp) => {

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(data);
            parseWaze(data);
        });

        resp.on("error", () => {
            console.log("Errors");
        })
    }); /*.end(()=>{
      console.log('process the response');
    });*/

});
module.exports = router;
