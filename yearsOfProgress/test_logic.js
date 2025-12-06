const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});

function computeCountdown(now) {
    const year = now.getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31, 23, 59, 59, 999);
    const totalMs = end.getTime() - start.getTime();
    const elapsed = Math.min(Math.max(now.getTime() - start.getTime(), 0), totalMs);
    const left = Math.max(end.getTime() - now.getTime(), 0);

    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const days = Math.floor(left / day);
    const hours = Math.floor((left % day) / hour);
    const minutes = Math.floor((left % hour) / minute);
    const seconds = Math.floor((left % minute) / 1000);

    const leftLabel = `${days}d ${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return {
        year,
        percentElapsed: (elapsed / totalMs) * 100,
        percentLeft: (left / totalMs) * 100,
        leftLabel,
        nowLabel: formatter.format(now),
        days,
        hours,
        minutes,
        seconds
    };
}

const now = new Date();
console.log(computeCountdown(now));
