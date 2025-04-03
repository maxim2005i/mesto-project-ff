// @todo: Темплейт карточки
const cardContainer = document.querySelector(".places__list");

// @todo: DOM узлы

// @todo: Функция создания карточки

function addCard(name, link, callback) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = name;
  cardElement.querySelector(".card__description").textContent = name;
  deleteButton.addEventListener("click", function () {
    callback(cardElement);
  });
  return cardElement;
}

// @todo: Функция удаления карточки
function removeElement(item) {
  return item.remove();
}

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  cardContainer.append(
    addCard(initialCards[i].name, initialCards[i].link,
    removeElement)
  );
}
