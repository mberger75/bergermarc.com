for (let i = 0; i < articles.length; i++) {
    document.getElementById('main').innerHTML += `        
    <div class="row main_article">
        <h2 class="main_title">- ${articles[i].title} -</h2>
        <p class="main_para">${articles[i].para}</p>
    </div>`;
}