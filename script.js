document.addEventListener("click", button1);

function button1() {
  document.getElementById("button1").onclick = function () {
    let down = document.getElementById('texthere');
    down.innerHTML = `<table>
  <tr>
    <th>Fish Type</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>Betta</td>
    <td>1</td>
  </tr>
</table>`;
    document.getElementById('imagehere').innerHTML = `<img width ="350" height="300" alt ="betta fish" src="assets/Images/betta-fish.jpg"></img>`;
    let videotext = document.getElementById('videotext');
    videotext.innerHTML = "<h3>Care Guides</h3>";
    document.getElementById('videohere').innerHTML = `<iframe width ="500" height="300" src="https://www.youtube.com/embed/-rA_EPvRTao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      ;
  };
}


document.addEventListener("click", button2);

function button2() {
  document.getElementById("button2").onclick = function () {
    let down2 = document.getElementById('texthere');
    down2.innerHTML = `<table>
    <tr>
      <th>Fish Type (From left to right)</th>
      <th>Quantity</th>
    </tr>
    <tr>
      <td>Honey Gourami</td>
      <td>1</td>
    </tr>
    <tr>
    <td>Panda Corydora</td>
    <td>4</td>
    </tr>
  </table>`;
    document.getElementById('imagehere').innerHTML = `<img width ="350" height="300" alt ="Honey Gourami" src="assets/Images/Honeygourami1.jpg"></img><img width ="350" height="300" alt ="Panda Corydora" src="assets/Images/pandacory.jpg"></img>`;
    let videotext = document.getElementById('videotext');
    videotext.innerHTML = "<h3>Care Guides</h3>";
    document.getElementById('videohere').innerHTML = `<iframe width="500" height="300" src="https://www.youtube.com/embed/92mMOEKPkk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="500" height="300" src="https://www.youtube.com/embed/XwGqthbAv2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

      ;
  };
}

document.addEventListener("click", button3);

function button3() {
  document.getElementById("button3").onclick = function () {
    let down3 = document.getElementById('texthere');
    down3.innerHTML = `<table>
    <tr>
      <th>Fish Type (From left to right)</th>
      <th>Quantity</th>
    </tr>
    <tr>
      <td>Angel Fish</td>
      <td>1</td>
    </tr>
    <tr>
    <td>Neon Tetra</td>
    <td>6</td>
    </tr>
    <tr>
    <td>Bronze Corydora</td>
    <td>6</td>
    </tr>
  </table>`;
    document.getElementById('imagehere').innerHTML = `<img width ="350" height="300" alt ="Angel Fish" src="assets/Images/Angelfish.jpg"></img><img width ="350" height="300" alt ="Neon tetra" src="assets/Images/Neon Tetra.jpg"></img><img width ="350" height="300" alt ="Bronze Corydora" src="assets/Images/Bronze corydors.jpg"></img>`;
    let videotext = document.getElementById('videotext');
    videotext.innerHTML = "<h3>Care Guides</h3>";
    document.getElementById('videohere').innerHTML = `<iframe width="500" height="300" src="https://www.youtube.com/embed/if6YMn54f68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="500" height="300" src="https://www.youtube.com/embed/Ocy5EtjprNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="500" height="300" src="https://www.youtube.com/embed/ZK7dJa-iXdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      ;
  };
}

document.addEventListener("click", button4);

function button4() {
  document.getElementById("button4").onclick = function () {
    let down4 = document.getElementById('texthere');
    down4.innerHTML = `<table>
    <tr>
      <th>Fish Type (From left to right)</th>
      <th>Quantity</th>
    </tr>
    <tr>
      <td>Pearl Gourami</td>
      <td>4</td>
    </tr>
    <tr>
    <td>Rummy nose</td>
    <td>8</td>
    </tr>
    <tr>
    <td>Kuhli Loach</td>
    <td>3</td>
    </tr>
    <tr>
    <td>HillStream Loach</td>
    <td>2</td>
    </tr>
  </table>`;
    document.getElementById('imagehere').innerHTML = `<img width ="350" height="300" alt ="Pearl Gourami" src="assets/Images/Pearl Gourami.jpg"></img><img width ="350" height="300" alt ="Rummy Nose Tetra" src="assets/Images/Rummy Nose tetra.jpg"></img><img width ="350" height="300" alt ="kuhli-loach" src="assets/Images/kuhli-loach.jpg"></img><img width ="350" height="300" alt ="Hillstream Lo" src="assets/Images/Hillstream Loach.jpg"></img>`;
    let videotext = document.getElementById('videotext');
    videotext.innerHTML = "<h3>Care Guides</h3>";
    document.getElementById('videohere').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RsWietye1x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/GxiLiYb6q9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/g1WQ7LJjVUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/IwRenUgDvsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      ;
  };
}