const button = document.querySelector('.btn-map');
  const popup = document.querySelector('.pop-up');
  const close = popup.querySelector('.modal-close');
  const popupForm = popup.querySelector('.popup-form');
  const name = popup.querySelector('[name=name]');
  const email = popup.querySelector('[name=email]');
  const message = popup.querySelector('[name=customer-message]');

  let isStorageSupport = true;
  let storage = "";

// Local-storage check
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
  isStorageSupport = false;
  }

// Popup
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup-show');

    if (storage) {
    name.value = storage;
    email.value = storage;
    message.focus();
  } else {
    name.focus();
  }
  });

// Pop-up close
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup-show');
    popup.classList.remove("popup-error");
  })

// Pop-up form check
  popupForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
} else {
  if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
}
  });

// Pop-up esc close
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

