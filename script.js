
document.addEventListener('DOMContentLoaded', function() {
    const liste = document.getElementById('liste-articles');
    let articles = JSON.parse(localStorage.getItem('articles')) || [];

    if(articles.length === 0) {
        liste.innerHTML = '<p>Aucune actualité pour le moment.</p>';
        return;
    }

    articles.forEach(article => {
        const carte = document.createElement('div');
        carte.className = 'carte-actu';
        carte.innerHTML = `
            ${article.image? `<img src="${article.image}" style="width:100%; max-height:200px; object-fit:cover; border-radius:5px;">` : ''}
            <h3>${article.titre}</h3>
            <small>${article.date}</small>
            <p>${article.description}</p>
        `;
        liste.appendChild(carte);
    });
});
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));


    this.classList.add('active');
    
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});
