const API_KEY = "api_key=e9e9d8da18ae29fc430845952232787c";
const API_LINK = "https://api.themoviedb.org/3/";

//FUNCTION FETCH DATA TỪ 1 URL NÀO ĐÓ
async function getDataAPI(api_link) {
    const res = await fetch(api_link);
    const data = await res.json();
    return data;
}

//FUNCTION RENDER LIST MOVIE & TV
function renderList(array, box) {
    array.forEach((element) => {
        box.innerHTML += ` <a href="detail.html?id=${element.id}&type=${element.original_title ? "movie" : "tv"}" class="card-movie">
            <div class="thumb"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${element.poster_path}" alt=""${element.original_title ? element.original_title : element.original_name} /></div>
            <h3 class="title">${element.original_title ? element.original_title : element.original_name}</h3>
            <div class="align-item-center">
                <div class="date">${element.release_date ? element.release_date : element.first_air_date}</div>
                <div class="rate"><i class="fa-solid fa-star"></i> ${element.vote_average}</div>
            </div>
        </a>`;
    });
}

//XỬ LÝ DOM
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.pageYOffset > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

//FUNCTION LẤY THAM SỐ TRÊN URL
function getIDUrl() {
    let url = window.location.href;
    let searchParams = url.split("=");
    return searchParams;
}

//FUNCTION SEARCH PHIM
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search i");

function showSearch() {
    if (!searchInput.value) {
        alert("Seach input is empty");
    } else {
        window.location.href = `search.html?keyword=${searchInput.value}`;
    }
}

searchBtn.addEventListener("click", showSearch);
searchInput.addEventListener("keydown", function (e) {
    if (event.keyCode === 13) {
        showSearch();
    }
});
