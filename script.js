document.addEventListener('DOMContentLoaded', () => {
    // تحديث سنة حقوق النشر تلقائياً في الفوتر
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

