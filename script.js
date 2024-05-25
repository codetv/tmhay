document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');

    const movies = [
        {
            title: 'Inception',
            image: 'https://via.placeholder.com/200x300',
        },
        {
            title: 'The Dark Knight',
            image: 'https://via.placeholder.com/200x300',
        },
        {
            title: 'Interstellar',
            image: 'https://via.placeholder.com/200x300',
        },
        // Thêm nhiều phim khác vào đây
    ];

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieImg = document.createElement('img');
        movieImg.src = movie.image;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);

        movieList.appendChild(movieDiv);
    });
});
