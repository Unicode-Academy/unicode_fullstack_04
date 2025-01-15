const loadingEl = document.querySelector(".loading");
let limit = 25;
const renderPosts = (posts) => {
  const postListEl = document.querySelector(".post-list");
  postListEl.innerHTML = `${posts
    .map(
      (post) => `<div class="post-item">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>`
    )
    .join("")}`;
};
const getPosts = async (newLimit = limit) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${newLimit}`
  );
  const posts = await response.json();
  limit = newLimit;
  renderPosts(posts);
  loadingEl.classList.remove("show");
};

getPosts();

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    loadingEl.classList.add("show");
    const newLimit = limit + 25;
    getPosts(newLimit);
  }
});
