import axios from 'axios';

const athletes_id = "7198461";
const endPoint = `/athletes/${athletes_id}/`;
const url = `https://www.strava.com/api/v3${endPoint}`;
const requestURL = "stats\" -H \"accept: application/json\" -H \"authorization: Bearer cd5888603bcba5c198c0328349709a6cce40b438\"";
import 'dotenv/config';
import * as strava from 'strava-v3';

strava.athlete.listActivities({"access_token" : "cd5888603bcba5c198c0328349709a6cce40b438", "per_page": "100"}, (err,payload,limits) => {
    if (err) {
        console.log("error!");
        console.log(err);
    } else {
        if (payload != undefined) {
            console.log(payload);

            const latestItem = new Date(payload[0].start_date);
            // const weekItem = new Date(latestItem.getDate() - 7);
            let weekItem = new Date(payload[0].start_date);
                weekItem.setDate(weekItem.getDate() - 7);

            const oneWeekArray  =[];

            payload.forEach((item ,index)=>{
                const itemDate = new Date(item.start_date);
                const itemType = item.type;
                if (itemDate.getTime() >= weekItem.getTime()) {
                    if (itemType == "Ride") {
                        oneWeekArray.push(item);
                        console.log(itemDate);
                    } else {
                        console.log("自転車の記録では無いです!")
                    }
                } else {
                    console.log("一週間以上前です!")
                }
            });

            let totalDist: number = 0;

            oneWeekArray.forEach((item, index) => {
                const itemDist = item.distance;
                totalDist += Number(itemDist);
            });

            const totalDistKm = totalDist / 1000;

            console.log(`総距離 : ${totalDist}メートル`);
            console.log(`総距離 : ${totalDistKm}キロメートル`);


            console.log(`最新の日時: ${latestItem}`);
            console.log(`一週間前の日時: ${weekItem}`);
            console.log(`一週間のアイテム数 : ${oneWeekArray.length}`);

        } else {
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


