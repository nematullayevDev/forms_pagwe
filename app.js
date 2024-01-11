const html = document.documentElement
const modeToggle = document.getElementById('mode-toggle')
const checkMode = localStorage.getItem('mode')

if (checkMode) {
  html.classList.add(checkMode)
  if (html.classList.contains('dark')) {
    modeToggle.textContent = 'light'
  } else {
    modeToggle.textContent = 'dark'
  }
}

modeToggle.addEventListener('click', () => {
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    modeToggle.textContent = 'light'
    localStorage.setItem('mode', 'dark')
  } else {
    modeToggle.textContent = 'dark'
    localStorage.setItem('mode', 'light')
  }
})
