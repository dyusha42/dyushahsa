
document.getElementById('download-btn').addEventListener('click', () => {
    html2canvas(document.querySelector('.resume-container')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save("resume.pdf");
    });
});

document.querySelectorAll('.ripple').forEach(el => {
    el.addEventListener('click', function (e) {
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const rect = el.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        ripple.style.position = "absolute";
        ripple.style.width = ripple.style.height = "100px";
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
