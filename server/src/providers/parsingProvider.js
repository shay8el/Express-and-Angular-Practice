import _ from 'lodash';

const config = require('../../config');

const getRecentRows = (data) => {
    return data.sort(function (a, b) {
        return a.date - b.date;
    }).slice(0, config.recent_result_limit);
};

const getAllCounts = (rows) => {
    const objectToArray = (obj) => Object.entries(obj).map(([k, v]) => ({[k]: v}));
    let unorderedCounts = [
        {"fieldName": "type", "count": objectToArray(_.countBy(rows, 'type'))},
        {"fieldName": "severity", "count": objectToArray(_.countBy(rows, 'severity'))},
        {"fieldName": "source", "count": objectToArray(_.countBy(rows, 'sourceType'))},
    ];
    const orders = {
        'type': ['AttackIndication', 'DataLeakage', 'Phishing', 'BrandSecurity', 'ExploitableData', 'vip'],
        'severity': ['High', 'Medium', 'Low'],
        'source': ['ApplicationStores', 'SocialMedia', 'PasteSites', 'BlackMarkets', 'HackingForums', 'Others']
    };
    return unorderedCounts.map((item) => {
        const fieldName = item.fieldName;
        return {
            "fieldName": fieldName, "count": item.count.sort((a, b) => {
                a = Object.entries(a)[0];
                b = Object.entries(b)[0];
                const order = orders[fieldName];
                return order.indexOf(a[0]) - order.indexOf(b[0]);
            })
        }
    });
};

const calculateFieldByConfig = (counts, name) => {
    const count = _.find(counts, {"fieldName": name}).count;
    let sum = 0;
    let fieldCount = 0;
    count.forEach((option) => {
            _.forEach(option, function (optionCount, optionName) {
                fieldCount += optionCount;
                const rank = config.risk_mater_calculation[name][optionName];
                sum += (optionCount * rank);
            });
        }
    );
    return sum / fieldCount
};
const calculateRiskMeter = (counts) => {
    const severity_rank = calculateFieldByConfig(counts, "severity");
    const type_rank = calculateFieldByConfig(counts, "type");
    return Math.round((type_rank + severity_rank) / 2);
};

const mapCountsToNetwork = (rowsByNetwork) => {
    return Object.keys(rowsByNetwork).map((networkName) => {
        const counts = getAllCounts(rowsByNetwork[networkName]);
        return {'networkName': networkName, 'data': counts};
    });
};

export const parseData = async (data) => {
    const recentRows = getRecentRows(data);
    const recentCounts = getAllCounts(recentRows);
    const riskMeter = calculateRiskMeter(recentCounts);
    const rowsByNetwork = _.groupBy(data, 'networkType');
    const dashboardData = mapCountsToNetwork(rowsByNetwork);
    return {...{"riskMeter": riskMeter}, ...{"dashboardData": dashboardData}};
};
