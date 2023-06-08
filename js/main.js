function loadHeaderAndFooter() {
    fetch("../pages/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar").innerHTML = data;
      });
  
    fetch("../pages/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer").innerHTML = data;
      });
  }
  loadHeaderAndFooter();
  