import fs from "fs";

export function getData(){
    const data_path = 'data.json';
    let rawData = fs.readFileSync(data_path);
    return JSON.parse(rawData.toString());
}