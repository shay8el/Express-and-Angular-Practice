import {getData} from "./providers/dataProvider";
import {parseData} from "./providers/parsingProvider";

export function getDashboard(req, res) {
    const data = getData();
    parseData(data).then((parsedData) => {
        res.send(parsedData);
    }, (err) => {
        console.log(err);
    });
}
