const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((el) => {
  el.addEventListener('click', (e) => {
    navLink.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
  });
});

const schedule = document.querySelectorAll('.schedule-subtitle ');
schedule.forEach((el) => {
  el.addEventListener('click', (e) => {
    schedule.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
  });
});

const cardIllustration = document.querySelectorAll('.card-illustration');
cardIllustration.forEach((el) => {
  el.addEventListener('click', (e) => {
    cardIllustration.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
  });
});

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  plugins: [ChartDataLabels],
  type: 'doughnut',
  data: {
    align: 'bottom',
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ['#ff5528', '#3B2231'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + '%';
        },
        display: true,
        align: 'right',
        backgroundColor: '#fff',
        borderRadius: 7,
        font: {
          size: 12,
        },
      },
    },
  },
});

const calendarWrapper = document.querySelectorAll('.calendar-wrapper');
calendarWrapper.forEach((el) => {
  el.addEventListener('click', (e) => {
    calendarWrapper.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
  });
});
