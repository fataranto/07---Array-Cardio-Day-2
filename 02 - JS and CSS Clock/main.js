function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();
    setClock(seconds, 60, ".second-hand");
    setClock(minutes, 60, ".min-hand");
    setClock(hour, 12, ".hour-hand");
  }

  function setClock(time, steps, Class) {
    let degrees = ((time / steps) * 360) + "deg";
    document.querySelector(Class).style.rotate = degrees;
  }

  setInterval(setDate, 1000);