"use strict";

var mutations = require("../src/graphql/mutations");

var express = require('express');
var router = express.Router();
const path = require('path');
const https = require('https');

/* ************************
 Appsync Stuff goes here
 *************************/

/* *
 * This shows how to use standard Apollo client on Node.js
 */
/* *
global.WebSocket = require('ws');
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Require exports file with endpoint and auth info
const aws_exports = require('./aws-exports').default;

// Require AppSync module
const AUTH_TYPE = require('aws-appsync/lib/link/auth-link').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;

const url = aws_exports.ENDPOINT;
const region = aws_exports.REGION;
//const type = AUTH_TYPE.AWS_IAM;
const type = AUTH_TYPE.API_KEY


// If you want to use API key-based auth
const apiKey = 'da2-o6vqmxrgfzcvrpd4wepish655i';
// If you want to use a jwtToken from Amazon Cognito identity:
//const jwtToken = 'xxxxxxxx';

// If you want to use AWS...
const AWS = require('aws-sdk');
AWS.config.update({
    region: aws_exports.REGION,
    credentials: new AWS.Credentials({
        accessKeyId: aws_exports.AWS_ACCESS_KEY_ID,
        secretAccessKey: aws_exports.AWS_SECRET_ACCESS_KEY
    })
});
const credentials = AWS.config.credentials;


// Set up Apollo client
const client = new AWSAppSyncClient({
    url: url,
    region: region,
    auth: {
        type: type,
        credentials: credentials,
    }
    //disableOffline: true      //Uncomment for AWS Lambda
});

client.hydrated().then(function (client) {
    //Now run a query
    client.query({ query: query })
        //client.query({ query: query, fetchPolicy: 'network-only' })   //Uncomment for AWS Lambda
        .then(function logData(data) {
            console.log('results of query: ', data);
        })
        .catch(console.error);

    //Now subscribe to results
    const observable = client.subscribe({ query: subquery });

    const realtimeResults = function realtimeResults(data) {
        console.log('realtime data: ', data);
    };

    observable.subscribe({
        next: realtimeResults,
        complete: console.log,
        error: console.log,
    });
});

***/
/* ****************************************************************************************************************** */
//const aws_exports = require('../aws-exports').default;


/*
* const aws_exports = require('../aws-exports').default;*/

// CONFIG
/*
const AppSync = {
    "graphqlEndpoint": aws_exports.graphqlEndpoint,
    "region": aws_exports.region,
    "authenticationType": aws_exports.authenticationType,
    "apiKey": aws_exports.apiKey,
};
const ApiId = aws_exports.ApiId;

// POLYFILLS
global.WebSocket = require('ws');
global.window = global.window || {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    WebSocket: global.WebSocket,
    ArrayBuffer: global.ArrayBuffer,
    addEventListener: function () { },
    navigator: { onLine: true }
};
global.localStorage = {
    store: {},
    getItem: function (key) {
        return this.store[key]
    },
    setItem: function (key, value) {
        this.store[key] = value
    },
    removeItem: function (key) {
        delete this.store[key]
    }
};
*/

/*
require('es6-promise').polyfill();
require('isomorphic-fetch');
*/

// Require AppSync module
/*
const AUTH_TYPE = require('aws-appsync/lib/link/auth-link').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;
*/

// INIT
// Set up AppSync client

/*
const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey
    }
});
*/

/*******************/

//const Client = require('aws-appsync');
//const { Rehydrate } = require ('aws-appsync')

const wazeFullURL = 'https://world-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&format=JSON&types=traffic,alerts,irregularities&polygon=-2.321000,52.700000;-2.420000,52.650000;-2.411000,52.483000;-2.360000,52.235000;-1.868000,52.144000;-1.354000,52.148000;-1.082000,52.331000;-1.026000,52.448000;-1.280000,52.733000;-1.827000,52.824000;-2.321000,52.700000'

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/waze', function (req, res, next) {

    var p = path.join(__dirname, '/..', 'public/waze.html');
    console.log("sendingFile: " + p);
    res.sendFile(p)
    // res.send('Waze API');
});


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

    })

    //res.render('index', { title: 'WaZe' });
});


/***********************************************************************************************************************
 Parse the data
 **********************************************************************************************************************/

function parseWaze(data) {

    let json = JSON.parse(data);

    if (json.alerts != undefined) {
        const alerts = json.alerts;
        console.log('*** Alerts *** No =', alerts.length, '\n');

        var thisalert;
        for (var i =0; i< alerts.length; i++) {
            console.log('**** This Alert = ', alerts[i], '\n');

            thisalert = alerts[i]
            mutations.writeAlert(thisalert);
        }
    }

    if (json.irregularities != undefined) {
        console.log('*** Irregularities ***', json.irregularities.length, '\n');

        const irregularities = json.irregularities;
        for (i=0; i< irregularities.length; i++) {
            writeIrregularity(irregularities[i]);
        }
    }

    if (json.jams != undefined) {

        const jams = json.jams;
        console.log('*** Jams ***', jams.length, '\n');

        for (i < 0; jams.length; i++) {
            writeJam(jams[i]);
        }
    }
}

/* ******************************************************
  Use Mutations to write to GraphQL data to Appsync
 *******************************************************/
/*const createWazeAlert = `mutation CreateWazeAlert($input: CreateWazeAlertInput!) {
  createWazeAlert(input: $input) {
    id
    BlockingAlertUUID
    Country
    Delay
    EndNode
    Length
    Level
    Line {
      id
      X
      Y
    }
    PubMillis
    RoadType
    Speed
    StartNode
    Street
    TurnType
    Type
    UUID
  }
}
`;*/


function writeIrregularity(irregularity) {
    console.log('*** Write Irregularities *** ', irregularity, '\n');
}

function writeJam(jam) {
    console.log('*** Write Jam ***', jam, '\n');

}

//global.WebSocket = require('ws');
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

// Require exports file with endpoint and auth info
//const aws_exports = require('../aws-exports').default;
//const aws_exports = require('./aws-exports').default;

// Require AppSync module
//const AUTH_TYPE = require('aws-appsync/lib/link/auth-link').AUTH_TYPE;
//const AWSAppSyncClient = require('aws-appsync').default;

//const url = aws_exports.ENDPOINT;
//const region = aws_exports.REGION;
//const type = AUTH_TYPE.AWS_IAM;

// If you want to use API key-based auth
//const apiKey = 'xxxxxxxxx';
//const apiKey = 'da2-o6vqmxrgfzcvrpd4wepish655i';
// If you want to use a jwtToken from Amazon Cognito identity:
//const jwtToken = 'xxxxxxxx';

// If you want to use AWS...
//const AWS = require('aws-sdk');
//AWS.config.update({
//  region: aws_exports.REGION,
//  credentials: new AWS.Credentials({
//   accessKeyId: aws_exports.AWS_ACCESS_KEY_ID,
//    secretAccessKey: aws_exports.AWS_SECRET_ACCESS_KEY
//  })
//});
//const credentials = AWS.config.credentials;

// Import gql helper and craft a GraphQL query
//const gql = require('graphql-tag');

module.exports = router;


/*

  /*
    fetch(wazeFullURL)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {

            var alerts = [];
            var irreg = [];
            var jams = [];

            var x;
            if (data.alerts !== undefined) {
                alerts = data.alerts;
                console.log('*** Alerts *** No =', alerts.length, '\n');

                for (x in alerts) {
                    writeAlert(x);
                }
            }

            if (data.irregularities !== undefined) {
                console.log('*** Irregularities ***', response.results.irregularities.length, '\n');

                irreg = data.irregularities;
                for (x in irregularities) {

                    writeIrregularity(x);
                }
            }

            if (data.jams !== undefined) {

                jams = data.jams;
                console.log('*** Jams ***', jams.length, '\n');

                for (x in jams) {
               //     console.log(thisjam, '\n');
                    writeJam(x);
                }
            }

        })
        .catch((error) => {
            console.log('**** Error :', error);
        });
*/

