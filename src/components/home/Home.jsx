import "../../scss/Home.scss";

export default function Home() {
  const changeImg = () => {
    const coffee = document.querySelector("#bigcoffee");
    const miniCoffees = document.querySelectorAll(".coffee");
    const circle = document.querySelector("#circle");
    const button = document.querySelector("#button");
    const starbucks = document.querySelector("#starbucks");

    for (let miniCoffee of miniCoffees) {
      miniCoffee.addEventListener("click", () => {
        if (miniCoffee.getAttribute("src") == "/green-coffee.png") {
          coffee.setAttribute("src", "/green-coffee.png");
          circle.style.background = "#047044";
          button.style.background = "#047044";
          starbucks.style.color = "#047044";
        } else if (
          miniCoffee.getAttribute("src") == "/pink-coffee.png"
        ) {
          coffee.setAttribute("src", "/pink-coffee.png");
          circle.style.background = "#ee34ba";
          button.style.background = "#ee34ba";
          starbucks.style.color = "#ee34ba";

        } else {
          coffee.setAttribute("src", "/rose-coffee.png");
          circle.style.background = "#df506a";
          button.style.background = "#df506a";
          starbucks.style.color = "#df506a";

        }
      });
    }
  };

  return (
    <>
      <section id="home">
        <section id="principal">
          <div id="information">
            <h1>
              Não é só café É <span id="starbucks">Starbucks</span>
            </h1>
            <p>
              Desde 1971, sempre foi e sempre será uma questão de qualidade.
              Somos apaixonados por obter eticamente apenas os melhores grãos de
              café Arábica e torra-los com muito cuidado. Nossa paixão pelo café
              só é rivalizada pelo nosso amor por compartilhá-lo.
            </p>
            <a id="button" href="/">Saiba mais</a>
          </div>

          <div id="img-coffee">
            <div id="circle"></div>
            <img id="bigcoffee" src="/green-coffee.png" alt="" />
          </div>
        </section>

        <section id="box-coffees">
          <div className="coffees">
            <img
              className="coffee"
              src="/green-coffee.png"
              alt=""
              onClick={changeImg}
            />
            <img
              className="coffee"
              src="/pink-coffee.png"
              alt=""
              onClick={changeImg}
            />
            <img
              className="coffee"
              src="/rose-coffee.png"
              alt=""
              onClick={changeImg}
            />
          </div>
        </section>
      </section>
    </>
  );
}
