document.addEventListener('DOMContentLoaded', function() {
    const statCards = document.querySelectorAll('.stat-card');
    const progressFill = document.querySelector('.progress-fill');
    
    setTimeout(() => {
        statCards.forEach(card => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        });
        
        if (progressFill) {
            progressFill.style.width = '24%';
        }
    }, 500);
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('predictions').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
    
    const detailButtons = document.querySelectorAll('.detail-button');
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Detailed analysis feature will be implemented soon!');
        });
    });
    
    const chartPlaceholder = document.getElementById('activity-graph');
    if (chartPlaceholder) {
        simulateGraph(chartPlaceholder);
    }
    
    function simulateGraph(container) {
        const points = 20;
        const values = [];
        
        for (let i = 0; i < points; i++) {
            values.push(Math.random() * 80 + 20);
        }
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let d = '';
        
        for (let i = 0; i < values.length; i++) {
            const x = (i / (values.length - 1)) * width;
            const y = height - (values[i] / 100) * height;
            
            if (i === 0) {
                d += `M ${x} ${y} `;
            } else {
                d += `L ${x} ${y} `;
            }
        }
        
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#ff7b00');
        path.setAttribute('stroke-width', '2');
        
        svg.appendChild(path);
        container.appendChild(svg);
    }
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 42, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'rgba(10, 10, 42, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
});