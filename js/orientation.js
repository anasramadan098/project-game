  const warning = document.getElementById("rotate-warning");

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function checkOrientation() {
    if (!isMobileDevice()) return;

    
    const isPortrait = window.innerHeight > window.innerWidth;

    warning.style.display = isPortrait ? "flex" : "none";
    document.body.style.overflow = isPortrait ? "hidden" : "auto";
    if (isPortrait) {
      bgmusic.volume  = 0 
    } else {
      bgmusic.volume = bgMusicVolume;
    }
  }

  function tryRotateScreenn() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape").catch(() => {
        alert("برجاء تدوير الهاتف يدويًا");
      });
    } else {
      alert("جهازك لا يدعم التدوير التلقائي");
    }
  }

    async function goFullscreen() {
      const el = document.documentElement;
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) await el.msRequestFullscreen();
    }

    async function tryRotateScreen() {

      goFullscreen()



      try {
        await screen.orientation.lock("landscape");
      } catch (e) {
        alert("اقلب الهاتف يدويًا للوضع الأفقي");
      }

    }


  window.addEventListener("load", checkOrientation);
  window.addEventListener("resize", checkOrientation);
  window.addEventListener("orientationchange", checkOrientation);
  // window.addEventListener("orientationchange", showVideoIntro);