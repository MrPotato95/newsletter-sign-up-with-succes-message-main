const containerEl = document.querySelector("#container")
const leftEl = document.getElementById("left")
const rightEl = document.getElementById("right")

const invalidEmail = document.querySelector("#invalid-email")
const emailInput = document.querySelector("#email")
const submitBtn = document.querySelector("#submit-btn")
const userEmail = document.querySelector("#user-email")

const confirmedMessage = document.querySelector("#confirmed-message")
const dismissMessage = document.querySelector("#dismiss-message")

function formSuccess() {
  confirmedMessage.classList.add("active")
  containerEl.classList.add("success")
  leftEl.style.display = "none"
  rightEl.style.display = "none"
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const email = emailInput.value.trim()

  if (validateEmail(email)) {
    formSuccess()
    userEmail.innerText = email
    emailInput.value = ""

    invalidEmail.classList.remove("active")
    emailInput.classList.remove("active")
  } else {
    invalidEmail.classList.add("active")
    emailInput.classList.add("active")
  }
})

dismissMessage.addEventListener("click", () => {
  leftEl.style.display = "block"
  rightEl.style.display = "block"
  containerEl.classList.remove("success")
  confirmedMessage.classList.remove("active")
})
