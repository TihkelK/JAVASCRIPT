const kaarid = document.querySelectorAll('.card');

kaarid.forEach(card => {
    const img = card.querySelector('.card-img-top');

    const title = img.getAttribute('data-title');
    const description = img.getAttribute('data-description');

    const cTitle = card.querySelector('.card-title');
    const cText = card.querySelector('.card-text');

    cTitle.textContent = title;
    cText.textContent = description;
});
