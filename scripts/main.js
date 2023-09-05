$('.card .content').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});
