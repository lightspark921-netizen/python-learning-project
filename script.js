function showLesson(lessonId) {
    // ซ่อนทุกหน้า
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => card.classList.remove('active'));
    
    // แสดงหน้าที่เลือก
    const targetCard = document.getElementById(lessonId);
    if (targetCard) {
        targetCard.classList.add('active');
    }

    // เปลี่ยนสถานะเมนูใน Sidebar
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.getElementById('link-' + lessonId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // เลื่อนหน้าจอกลับไปด้านบนแบบนุ่มนวล
    window.scrollTo({ top: 0, behavior: 'smooth' });
}