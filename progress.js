// Progress tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simulate progress update (in a real app, this would come from backend)
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
    
    // Mark lecture as completed
    const lectureItems = document.querySelectorAll('.accordion-content ul li');
    
    lectureItems.forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play-circle')) {
                icon.classList.remove('fa-play-circle');
                icon.classList.add('fa-check-circle');
                icon.style.color = '#1cc88a';
            }
        });
    });
});