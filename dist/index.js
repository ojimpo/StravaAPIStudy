"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var athletes_id = "32390131";
var endPoint = "/athletes/" + athletes_id + "/";
var url = "https://www.strava.com/api/v3" + endPoint;
var requestURL = "stats\" -H \"accept: application/json\" -H \"authorization: Bearer d65657c4a562d558b0b891d166e3b95fe13be27e\"";
require("dotenv/config");
var strava = require("strava-v3");
strava.athlete.get({ id: 32390131 }, function (err, payload, limits) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(payload);
    }
});
// axios({
//     method: "GET",
//     url: url + requestURL
// }).then(function(response){
//     console.log(response);
//
// }).catch(error => {
//     console.log("Failed!")
// });
//# sourceMappingURL=index.js.map