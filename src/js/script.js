
  const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    margin:30,
    startPosition:1,
    items:3
});
$('.slider__btn').click(function() {
    owl.trigger('prev.owl.carousel');
});
const ratingItemsList = document.querySelectorAll('.about__rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);