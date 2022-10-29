class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-news-image.png";
        newsImage.alt = "Gif do Darth Vader";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 70%;
                display: flex;
                margin: 2rem 0;
                flex-direction: row;
                justify-content: space-between;
                border-radius: 1rem;
                -webkit-box-shadow: 0px 3px 24px -6px rgba(153,153,153,1);
                -moz-box-shadow: 0px 3px 24px -6px rgba(153,153,153,1);
                box-shadow: 0px 3px 24px -6px rgba(153,153,153,1);
            }

            .card__left {
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 1rem;
            }

            .card__left span {
                font-weight: 400;
            }

            .card__left a {
                margin-top: 15px;
                font-size: 25px;
                color: #000;
                text-decoration: none;
                font-weight: bold;
            }

            .card__left p {
                color: rgb(70, 70, 70);
                text-align: left;
            }

            .card__right {
                width: 70rem;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card__right img {
                width: 90%;
                margin: 2rem 0;
                border-radius: 1rem;
            }
        `;

        return style;
    }
}

customElements.define('card-news', Cardnews);