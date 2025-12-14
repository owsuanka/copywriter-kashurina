const testimonials = [
    {
        name: "Кирилл",
        role: "Менеджер по работе с клиентами",
        text: "Быстро, корректно. Написали толковый текст из обрывков информации. Буду обращаться снова.",
        logoUrl: "./images/wb.png", 
    },
    {
        name: "Анна Смирнова",
        role: "Основательница онлайн-школы",
        text: "Заказывала LSI-текст для главной страницы. Результат превзошел ожидания: контент не только SEO-оптимизирован, но и по-настоящему продающий. После внедрения, время, которое пользователи проводят на сайте, увеличилось на 25%. Очень рекомендую!",
        logoUrl: "./images/skill.png", 
    },
    {
        name: "Иван Петров",
        role: "Директор по маркетингу",
        text: "Работали над сценариями для промо-видео. Копирайтер быстро уловил суть нашего продукта. Сценарии были четкие, креативные и легко адаптировались под съемку. Большой объем текста не испугал, все сделано в срок!",
        logoUrl: "./images/okko.png", 
    },
    {
        name: "Екатерина Ф.",
        role: "Независимый консультант",
        text: "Это тестовый, очень длинный отзыв, который специально добавлен, чтобы проверить, как работает автоматическое растяжение рамки. Как вы видите, если текст занимает две, три или даже четыре строки, рамка идеально подстраивается под высоту контента. Это достигается благодаря тому, что мы не задаем контейнеру фиксированную высоту в CSS. Tailwind, в отличие от фиксированных размеров, позволяет элементам контейнера 'расти' вместе с контентом. Это очень важно для адаптивного дизайна и удобства клиента.",
        logoUrl: "./images/valve.jpg", 
    }
];

let currentIndex = 0;
const content = document.getElementById('testimonial-content');
const nameEl = document.getElementById('client-name');
const roleEl = document.getElementById('client-role');
const textEl = document.getElementById('testimonial-text');
const logoEl = document.getElementById('client-logo');
const counterEl = document.getElementById('slide-counter');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


function updateContent(index) {
    const testimonial = testimonials[index];

    content.classList.remove('opacity-100');
    content.classList.add('opacity-0');

    setTimeout(() => {
        nameEl.textContent = testimonial.name;
        roleEl.textContent = testimonial.role;
        textEl.textContent = testimonial.text;

        logoEl.src = testimonial.logoUrl; 
        logoEl.alt = "Логотип " + testimonial.name; 

        counterEl.textContent = `${index + 1} / ${testimonials.length}`;

        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
    }, 500);
}


function changeSlide(direction) {
    let newIndex = currentIndex + direction;

    if (newIndex >= testimonials.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = testimonials.length - 1;
    }

    currentIndex = newIndex;
    updateContent(currentIndex);
}


prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

window.onload = function() {
    updateContent(currentIndex);
};