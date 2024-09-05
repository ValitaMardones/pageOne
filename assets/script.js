async function populate() {
  const requestURL = "assets/textos.json";
  const request = new Request(requestURL);

  try {
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const textos = await response.json();

    // Cambia estos nombres según la estructura real de tu JSON
    document.getElementById("header-title").textContent = textos.nombreEmpresa;
    document.getElementById("header-description").textContent =
      textos.description;
    //NavBar
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

populate();
