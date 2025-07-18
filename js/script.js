
(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openMenuBtn: document.querySelector("[data-menu-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeMenuBtn: document.querySelector("[data-menu-close]"),

      // Додати атрибут data-modal-open на кнопку відкриття
      openLeaveReviewBtn: document.querySelector("[data-leave-review-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeLeaveReviewBtn: document.querySelector("[data-leave-review-close]"),
       
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-modal]"),
    
      // Додати атрибут data-modal на бекдроп модалки
      modalReview: document.querySelector("[data-modal-leave-review]"),
    };
  
    // Відкриття меню мобільної версії
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    // Відриття форми
    refs.openLeaveReviewBtn.addEventListener("click", toggleModalReview);
    refs.closeLeaveReviewBtn.addEventListener("click", toggleModalReview);

  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
  }
  
  function toggleModalReview() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modalReview.classList.toggle("is-open");
  }

  })();