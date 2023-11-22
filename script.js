//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('openModal');
  var closeBtn = document.querySelector('.close-modal');

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  btn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
