function parseWaze(data) {

    let json = JSON.parse(data);


    if (json.alerts != undefined) {
        const alerts = json.alerts;
        console.log('*** Alerts *** No =', alerts.length, '\n');

        for (thisalert in alerts) {
            console.log(thisalert, '\n');
            writeAlert(thisAlert);
        }
    }


    if (json.irregularities != undefined) {
        console.log('*** Irregularities ***', json.irregularities.length, '\n');

        const irregularities = json.irregularities;
        for (thisirregularity in irregularities) {
            console.log(thisirregularity, '\n');
        }
    }

    if (json.jams != undefined) {

        const jams = json.jams;
        console.log('*** Jams ***', jams.length, '\n');

        for (thisjam in jams) {
            console.log(thisjam, '\n');
        }
    }


}
