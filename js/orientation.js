  const warning = document.getElementById("rotate-warning");

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function checkOrientation() {
    if (!isMobileDevice()) return;

    const isPortrait = window.innerHeight > window.innerWidth;
    warning.style.display = isPortrait ? "flex" : "none";
    document.body.style.overflow = isPortrait ? "hidden" : "auto";
  }

  function tryRotateScreen() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape").catch(() => {
        alert("برجاء تدوير الهاتف يدويًا");
      });
    } else {
      alert("جهازك لا يدعم التدوير التلقائي");
    }
  }

  window.addEventListener("load", checkOrientation);
  window.addEventListener("resize", checkOrientation);
  window.addEventListener("orientationchange", checkOrientation);