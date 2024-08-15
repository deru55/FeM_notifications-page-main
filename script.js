const totalUnreadNtSpan = document.getElementById("unread-notifications");
const markAsReadBtn = document.getElementById("mark-as-read-btn");

const updateUnreadNt = () => {
  const unreadNt = document.querySelectorAll(".card__content > .unread");

  totalUnreadNtSpan.textContent = unreadNt.length;
};

markAsReadBtn.addEventListener("click", () => {
  const unreadNt = document.querySelectorAll(".card__content > .unread");

  unreadNt.forEach((item) => {
    item.classList.remove("unread");
  });

  updateUnreadNt();
});

window.onload = () => updateUnreadNt();
