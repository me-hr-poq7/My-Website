const fadeElems = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

fadeElems.forEach(elem => observer.observe(elem));

const birthDate = new Date(2004, 6, 12); 

function calcAge() {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

document.getElementById("age").textContent = calcAge();

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: new FormData(form)
  }).then(() => {
    form.reset();

    const msg = document.getElementById("contact-success");
    msg.style.display = "block";

    setTimeout(() => {
      msg.style.display = "none";
    }, 8000);
  });
});
