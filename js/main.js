(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { 
      title: 'Power',
      text: 'fast charging', 
      image: 'images/charging-port.jpg' 
    },
    { 
      title: 'Touch pad', 
      text: 'swipe up&down to change the volume', 
      image: 'images/star.png' 
    },
    {
      title: 'Ear tips', 
      text: 'silicon ear tips for extra comfort',
      image: 'images/Ear_tips.jpg' 
    },
    { 
      title: 'Bass', 
      text: '50MM drivers', 
      image: 'images/drivers.jpg' 
    }
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      
      selected.innerHTML = '';

      const hotspotImage = document.createElement('img');
      hotspotImage.src = infoBox.image;
      hotspotImage.style.width = "100%";

      const hotspotTitle = document.createElement('h2');
      hotspotTitle.textContent = infoBox.title;

      const hotspotText = document.createElement('p');
      hotspotText.textContent = infoBox.text;

      selected.appendChild(hotspotImage);
      selected.appendChild(hotspotTitle);
      selected.appendChild(hotspotText);

      
      selected.style.display = 'none';
    });
  }

  function modelLoaded() {
    loadInfo();
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    selected.style.display = 'block';
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    selected.style.display = 'none';
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot, index) {
    hotspot.slot = `hotspot-${index + 1}`;

    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();