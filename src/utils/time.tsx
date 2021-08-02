interface timeTemplates {
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    [seconds: string]: number,
}
interface timeKeysTemplate {
    weeks: string,
    days: string,
    hours: string,
    minutes: string,
    [seconds: string]: string,

}
const getTimeStringFromCurrent = (timestamp: number | undefined) => {
    if (timestamp) {
        let currentTimeFromEpoch = Math.floor(Date.now() / 1000);
        let secondAgo = currentTimeFromEpoch - timestamp;
        const times: timeTemplates = {
            weeks: Math.floor(secondAgo / (3600 * 24 * 7)),
            days: Math.floor(secondAgo / (3600 * 24)),
            hours: Math.floor(secondAgo % (3600 * 24) / 3600),
            minutes: Math.floor(secondAgo % 3600 / 60),
            seconds: Math.floor(secondAgo % 60),
        }
        const timesKey: timeKeysTemplate = {
            weeks: "tuần trước",
            days: "ngày trước",
            hours: "giờ trước",
            minutes: "phút trước",
            seconds: "giây trước",
        }
        for (let timeProperty in times) {
            if (times[timeProperty] > 0) {
                return times[timeProperty] + " " + timesKey[timeProperty];
            }
        }
        return null;

    }

}

const ListTimeUtils = {
    getTimeStringFromCurrent,
}

export default ListTimeUtils;