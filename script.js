const switchBtn = document.querySelector('#switch button');
switchBtn.addEventListener('click', toggleSwitch);

function toggleSwitch() {
  const body = document.body;
  body.classList.toggle('light');
}
