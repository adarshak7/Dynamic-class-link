const express = require("express");
const { DateTime } = require("luxon");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const {
    firstHourInterval,
    secondHourInterval,
    thirdHourInterval,
    fourthHourInterval,
    fifthHourInterval,
    labFourthHourInterval,
    timezone,
} = require("./timeInterval/timeInterval");

dotenv.config();
const PORT = process.env.PORT;
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.route('/g1').get((req,res) => {
//     res.redirect(classurl1)
// })
classes = process.env;

let timeTable = {
    1: {

        secondHour: classes.IOT,
        thirdHour: classes.ML,
        fourthHour: classes.DMLAB,
        fifthHour: classes.DMLAB,
    },
    2: {
        firstHour: classes.SOFTE,
        secondHour: classes.SOFTE,
        thirdHour: classes.DM,
        fourthHour: classes.DAALAB,
        fifthHour: classes.IOT,
    },
    3: {
        firstHour: classes.ML,
        secondHour: classes.DAA,
        thirdHour: classes.CYBER,
        fourthHour: classes.WS,
        fifthHour: classes.DM,
    },
    4: {
        firstHour: classes.WS,
        secondHour: classes.SOFTE,
        thirdHour: classes.DAA,
        fourthHour: classes.IOTLAB,
        fifthHour: classes.IOTLAB,
    },
    5: {
        firstHour: classes.CYBER,
        secondHour: classes.DAA,
        thirdHour: classes.SOFTE,
        fourthHour: classes.DM,

    },
    6: {
        firstHour: classes.TWM,
        secondHour: classes.WS,
        thirdHour: classes.IOT,
        fourthHour: classes.ML,
        fifthHour: classes.CYBER,
    },
};

cron.schedule("0 0 * * 0", () => {
    let timeTable = {
        1: {

            secondHour: classes.IOT,
            thirdHour: classes.ML,
            fourthHour: classes.DMLAB,
            fifthHour: classes.DMLAB,
        },
        2: {
            firstHour: classes.SOFTE,
            secondHour: classes.SOFTE,
            thirdHour: classes.DM,
            fourthHour: classes.DAALAB,
            fifthHour: classes.IOT,
        },
        3: {
            firstHour: classes.ML,
            secondHour: classes.DAA,
            thirdHour: classes.CYBER,
            fourthHour: classes.WS,
            fifthHour: classes.DM,
        },
        4: {
            firstHour: classes.WS,
            secondHour: classes.SOFTE,
            thirdHour: classes.DAA,
            fourthHour: classes.IOTLAB,
            fifthHour: classes.IOTLAB,
        },
        5: {
            firstHour: classes.CYBER,
            secondHour: classes.DAA,
            thirdHour: classes.SOFTE,
            fourthHour: classes.DM,

        },
        6: {
            firstHour: classes.TWM,
            secondHour: classes.WS,
            thirdHour: classes.IOT,
            fourthHour: classes.ML,
            fifthHour: classes.CYBER,
        },
    };
});
const keyVal = {
    SOFTE: classes.SOFTE,
    DM: classes.DM,
    ML: classes.ML,
    WS: classes.WS,
    CYBER: classes.CYBER,
    LIB: classes.LIB,
    IOT: classes.IOT,
    IOTLAB: classes.IOTLAB,
    DAA: classes.DAA,
    DAALAB: classes.DAALAB,
    DMLAB: classes.DMLAB,
    TWM: classes.TWM,
};

app.route("/g1/update").post((req, res) => {
    const { day, hour, classLink } = req.body;
    timeTable[day][hour] = keyVal[classLink];
    res.redirect("/g1/update");
});
app.route("/g1/update").get((req, res) => {
    res.render("update.html");
});

app.route("/g1").get((req, res) => {
    let nowtime = DateTime.now().setZone(timezone);
    let today = nowtime.weekday;
    period = timeTable[today];
    switch (today) {
        case 0:
            res.send("<h1>SUNDAY!!<h1>");
        case 1:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join later<h1>"
                );
            }

        case 2:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join in some time<h1>"
                );
            }

        case 3:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join in sometime<h1>"
                );
            }

        case 4:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join in sometime)<h1>"
                );
            }
        case 5:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join in sometime<h1>"
                );
            }

        case 6:
            if (firstHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.firstHour);
            } else if (secondHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.secondHour);
            } else if (thirdHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.thirdHour);
            } else if (fourthHourInterval.contains(nowtime)) {
                return res.status(301).redirect(period.fourthHour);
            } else if (fifthHourInterval.contains(nowtime)) {
                return res.redirect(period.fifthHour);
            } else {
                return res.send(
                    "<h1>Join in sometime<h1>"
                );
            }
    }
});

app.listen(PORT || 3000);