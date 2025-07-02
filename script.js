document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
    initializeControlButtons();
    
    const cards = document.querySelectorAll('.feature-card, .demo-link, .stat-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });

    cards.forEach(card => observer.observe(card));

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent.trim();
        const isNumber = /^[\d.]+%?$/.test(finalValue);
        
        if (isNumber) {
            const isPercent = finalValue.includes('%');
            const target = parseFloat(finalValue);
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (isPercent ? '%' : '');
            }, 30);
        }
    });
});

function showDemo(demoType) {
    const modal = document.getElementById('demo-modal');
    const content = document.getElementById('demo-content');

    const demos = {
        dashboard: `<div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; height: 100%; overflow-y: auto;">
            <h2 style="text-align: center; margin-bottom: 30px;">📊 لوحة تحكم الشات بوت</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <h3 style="font-size: 32px; margin-bottom: 10px;">1,247</h3>
                    <p>إجمالي المحادثات</p>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <h3 style="font-size: 32px; margin-bottom: 10px;">89%</h3>
                    <p>معدل الرضا</p>
                </div>
            </div>
        </div>`,
        chatbot: `<div style="padding: 30px; background: #f8f9fa; color: #333; height: 100%; overflow-y: auto;">
            <h2 style="text-align: center; margin-bottom: 30px;">💬 شات بوت الموقع</h2>
            <p style="text-align: center;">تجربة تفاعلية مع المساعد الذكي</p>
        </div>`,
        ecommerce: `<div style="padding: 30px; background: linear-gradient(45deg, #28a745, #20c997); color: white; height: 100%; overflow-y: auto;">
            <h2 style="text-align: center; margin-bottom: 30px;">🛒 شات بوت المتجر</h2>
            <p style="text-align: center;">مساعد ذكي للتسوق والمبيعات</p>
        </div>`,
        test: `<div style="padding: 30px; background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; height: 100%; overflow-y: auto;">
            <h2 style="text-align: center; margin-bottom: 30px;">🧪 اختبار النظام</h2>
            <p style="text-align: center;">اختبار شامل لجميع المكونات</p>
        </div>`
    };

    content.innerHTML = demos[demoType] || '<p>العرض التوضيحي غير متاح</p>';
    modal.style.display = 'block';
}

function closeDemo() {
    document.getElementById('demo-modal').style.display = 'none';
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
    });
}

function initializeControlButtons() {
    document.getElementById('settings-btn').addEventListener('click', () => {
        alert('⚙️ لوحة الإعدادات - قريباً!');
    });
    
    document.getElementById('analytics-btn').addEventListener('click', () => {
        alert('📊 تحليلات الأداء - قريباً!');
    });
    
    document.getElementById('voice-btn').addEventListener('click', () => {
        alert('🎤 الميزات الصوتية - قريباً!');
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('demo-modal');
    if (event.target === modal) {
        closeDemo();
    }
}