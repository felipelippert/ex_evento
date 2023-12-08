AOS.init();

const eventDate = new Date("Jan 15, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCounter = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hoursInMs) / minutesInMs);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minutesInMs) / 1000)

    document.getElementById('countdown').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(timeCounter);
        document.getElementById('countdown').innerHTML = 'Evento expirado'
    }
}, 1000)