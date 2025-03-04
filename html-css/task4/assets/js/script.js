const apikey = "5dac53fef114414e8de3ad6b7f55438f";

const blogContainer = document.getElementById("blogId");
const searchField = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

async function fetchNews() {
  try {
    const apiURL = `
https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=${apikey}`;

    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);

    if (!data.articles) {
      console.error("No articles found!");
      return [];
    }
    console.log("Fetched articles:", data.articles);
    return data.articles;
  } catch (error) {
    console.log("error fetching news", error);
    return [];
  }
}

searchBtn.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query !== "") {
    try {
      const articles = await fetchNewsByQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log("error fetching news BY QUERY", error);
    }
  }
});

async function fetchNewsByQuery(query) {
  try {
    const apiURL = `
    https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`;

    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);

    if (!data.articles) {
      console.error("No articles found!");
      return [];
    }
    console.log("Fetched articles:", data.articles);
    return data.articles;
  } catch (error) {
    console.log("error fetching news", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCol = document.createElement("div");
    blogCol.classList.add("col-md-4");
    const blogCard = document.createElement("div");
    blogCard.classList.add("card");
    const blogFig = document.createElement("div");
    blogFig.classList.add("card-figure");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const blogContent = document.createElement("div");
    blogContent.classList.add("card-content");
    const Title = document.createElement("h2");
    const truncatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + "..."
        : article.title;
    Title.textContent = truncatedTitle;
    const description = document.createElement("p");
    const truncatedDescription =
      article.description.length > 100
        ? article.description.slice(0, 100) + "..."
        : article.description;
    description.textContent = truncatedDescription;

    blogFig.appendChild(img);

    blogContent.appendChild(Title);
    blogContent.appendChild(description);

    blogCard.appendChild(blogFig);
    blogCard.appendChild(blogContent);
    blogCard.addEventListener("click", () => {
      window.open(article.url);
    });

    blogCol.appendChild(blogCard);

    blogContainer.appendChild(blogCol);
  });
}

(async () => {
  try {
    const articles = await fetchNews();
    displayBlogs(articles);
  } catch (error) {
    console.log("error fetching news", error);
    return [];
  }
})();
