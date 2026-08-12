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
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("送信失敗");
    }

  form.reset();

  const successMsg = document.getElementById("contact-success");
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
    }, 8000);
  })
  .catch((error) => {
    console.error(error);

  const errorMsg = document.getElementById("contact-error");
  errorMsg.style.display = "block";

  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 8000);
  });
});