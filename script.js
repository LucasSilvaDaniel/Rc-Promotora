document.querySelector('.card').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.card').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
