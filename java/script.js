
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var navLinks = document.querySelectorAll("#nav a");
navLinks.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #d8986e";
    crsr.style.backgroundColor = "#d8986e";
  });

  // Handle smooth scrolling for internal links
  elem.addEventListener("click", function (e) {
    const href = elem.getAttribute("href");
    console.log("Clicked link with href:", href); // Debug: Log clicked href
    if (href.startsWith("#") || href.startsWith(".")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        console.log("Target found:", target); // Debug: Confirm target exists
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 50 }, // Offset for better visibility
          duration: 1,
          ease: "power2.out"
        });
      } else {
        console.error("Target not found for href:", href); // Debug: Log if target is missing
      }
    }
    // External links (e.g., LinkedIn) will follow href normally
  });
});

// Ensure GSAP animations are applied only if GSAP and ScrollTrigger are loaded
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "rgba(0, 0, 0, 1)", // Ensure video darkens fully
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

  gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
} else {
  // Fallback if GSAP fails to load
  console.warn("GSAP or ScrollTrigger not loaded, applying fallback styles");
  document.querySelector("#nav").style.backgroundColor = "#000";
  document.querySelector("#main").style.backgroundColor = "rgba(0, 0, 0, 1)";
}
