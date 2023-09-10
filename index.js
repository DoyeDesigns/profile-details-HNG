const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');

const dayOfWeek = new Intl.DateTimeFormat('en-NG', { weekday: 'long' }).format(new Date());
currentDayOfTheWeek.textContent = dayOfWeek;

function updateTime() {
    const curentUtcTime = document.querySelector('[data-testid="curentUTCTime"]');
    const currentDate = new Date();
    const currentTimeMilliseconds = currentDate.getTime();
    curentUtcTime.textContent = currentTimeMilliseconds;
}


setInterval(updateTime, 1000)
console.log(Date.now())