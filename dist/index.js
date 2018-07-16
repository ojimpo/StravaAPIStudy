"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var athletes_id = "7198461";
var endPoint = "/athletes/" + athletes_id + "/";
var url = "https://www.strava.com/api/v3" + endPoint;
var requestURL = "stats\" -H \"accept: application/json\" -H \"authorization: Bearer cd5888603bcba5c198c0328349709a6cce40b438\"";
require("dotenv/config");
var strava = require("strava-v3");
strava.athlete.listActivities({ "access_token": "cd5888603bcba5c198c0328349709a6cce40b438", "per_page": "100" }, function (err, payload, limits) {
    if (err) {
        console.log("error!");
        console.log(err);
    }
    else {
        if (payload != undefined) {
            console.log(payload);
            var latestItem = new Date(payload[0].start_date);
            // const weekItem = new Date(latestItem.getDate() - 7);
            var weekItem_1 = new Date(payload[0].start_date);
            weekItem_1.setDate(weekItem_1.getDate() - 7);
            var oneWeekArray_1 = [];
            payload.forEach(function (item, index) {
                var itemDate = new Date(item.start_date);
                var itemType = item.type;
                if (itemDate.getTime() >= weekItem_1.getTime()) {
                    if (itemType == "Ride") {
                        oneWeekArray_1.push(item);
                        console.log(itemDate);
                    }
                    else {
                        console.log("自転車の記録では無いです!");
                    }
                }
                else {
                    console.log("一週間以上前です!");
                }
            });
            var totalDist_1 = 0;
            oneWeekArray_1.forEach(function (item, index) {
                var itemDist = item.distance;
                totalDist_1 += Number(itemDist);
            });
            console.log("\u7DCF\u8DDD\u96E2 : " + totalDist_1 + "\u30E1\u30FC\u30C8\u30EB");
            console.log("\u6700\u65B0\u306E\u65E5\u6642: " + latestItem);
            console.log("\u4E00\u9031\u9593\u524D\u306E\u65E5\u6642: " + weekItem_1);
            console.log("\u4E00\u9031\u9593\u306E\u30A2\u30A4\u30C6\u30E0\u6570 : " + oneWeekArray_1.length);
        }
        else {
            console.log("payload is undefined");
        }
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