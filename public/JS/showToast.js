const toastPositions = {};

export function showToast(type, message, position = "top-right") {
  let container = document.querySelector(`.toast-container.${position}`);

  if (!container) {
    container = document.createElement("div");
    container.className = `toast-container ${position}`;
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type} show`;
  toast.innerHTML = `${message} <span class='close-btn' onclick='this.parentElement.remove()'>×</span>`;
  container.appendChild(toast);

  const currentPosition = toastPositions[position] || 0;
  toast.style.top = `${currentPosition}px`;
  toastPositions[position] = currentPosition + toast.offsetHeight + 10;

  setTimeout(() => {
    if (toast) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }
  }, 3000);
}
