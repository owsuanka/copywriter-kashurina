document.addEventListener("DOMContentLoaded", function() {
    // Находим все элементы, которые мы хотим анимировать
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Элемент начнет появляться, когда 10% его видно
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Убираем классы скрытия и сдвига
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                // Добавляем классы видимости (они уже есть по умолчанию, но opacity-0 их перекрывал)
                
                // Перестаем следить после появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});