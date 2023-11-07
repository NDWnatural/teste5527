document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('video-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value;
        // Implemente a lógica para fazer a pesquisa na API do YouTube e exibir os resultados na div 'video-container'
    });
});
