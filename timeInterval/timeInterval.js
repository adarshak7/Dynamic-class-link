const { DateTime } = require("luxon");
const luxon = require("luxon");

const Datatime = luxon.DateTime;
const Interval = luxon.Interval;
const timezone = "Asia/Colombo";
const firstHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 08, minute: 25 }, { zone: timezone }),
    Datatime.fromObject({ hour: 09, minute: 35 }, { zone: timezone })
);
const secondHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 09, minute: 40 }, { zone: timezone }),
    Datatime.fromObject({ hour: 10, minute: 50 }, { zone: timezone })
);
const thirdHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 10, minute: 55 }, { zone: timezone }),
    Datatime.fromObject({ hour: 12, minute: 05 }, { zone: timezone })
);
const fourthHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 13, minute: 40 }, { zone: timezone }),
    Datatime.fromObject({ hour: 14, minute: 50 }, { zone: timezone })
);
const labFourthHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 13, minute: 40 }, { zone: timezone }),
    Datatime.fromObject({ hour: 16, minute: 05 }, { zone: timezone })
);
const fifthHourInterval = Interval.fromDateTimes(
    DateTime.fromObject({ hour: 14, minute: 55 }, { zone: timezone }),
    Datatime.fromObject({ hour: 16, minute: 05 }, { zone: timezone })
);

module.exports = {
    firstHourInterval,
    secondHourInterval,
    thirdHourInterval,
    fourthHourInterval,
    fifthHourInterval,
    labFourthHourInterval,
    timezone,
};