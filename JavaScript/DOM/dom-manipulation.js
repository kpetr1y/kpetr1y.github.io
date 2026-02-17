function showFilter() {

    let block = document.getElementById("newContent");
    block.style.display = "none";

    let view = document.getElementById("filterContent");
    view.style.display = "block";
}

function showAddNew() {

    let block = document.getElementById("filterContent");
    block.style.display = "none";

    let view = document.getElementById("newContent");
    view.style.display = "flex";
}

function addNewArticle() {


    let headerValue = document.getElementById("inputHeader").value;
    let contentValue = document.getElementById("inputArticle").value;

    const newArticle = document.createElement("article");

    let span = document.createElement("span");
    span.classList.add("marker");

    if (document.getElementById("opinionRadio").checked) {
        newArticle.classList.add("opinion");
        span.textContent = "Opinion";
    } 
    else if (document.getElementById("recipeRadio").checked) {
        newArticle.classList.add("recipe");
        span.textContent = "Recipe";
    }
    else if (document.getElementById("lifeRadio").checked) {
        newArticle.classList.add("update");
        span.textContent = "Update";
    }
    newArticle.appendChild(span);

    let header = document.createElement("h2");
    header.textContent = headerValue;
    newArticle.appendChild(header);

    let content = document.createElement("p");
    content.textContent = contentValue;
    newArticle.appendChild(content);

     let link = document.createElement("a");
    link.textContent = "Read more...";
    link.href = "moreDetails.html";
    newArticle.appendChild(link);

    let articleList = document.getElementById("articleList");
    articleList.appendChild(newArticle);
}

function filterArticles() {

    let opinion = document.getElementsByClassName("opinion");
    let recipe = document.getElementsByClassName("recipe");
    let update = document.getElementsByClassName("update");

    if (document.getElementById("opinionCheckbox").checked) {
        for (let i = 0; i < opinion.length; i++) {
            opinion[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < opinion.length; i++) {
            opinion[i].style.display = "none";
            console.log(opinion[i]);
        }
    }

    if (document.getElementById("recipeCheckbox").checked) {
        for (let i = 0; i < recipe.length; i++) {
            recipe[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < recipe.length; i++) {
            recipe[i].style.display = "none";
        }
    }

    if (document.getElementById("updateCheckbox").checked) {
        for (let i = 0; i < update.length; i++) {
            update[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < update.length; i++) {
            update[i].style.display = "none";
        }
    }
}