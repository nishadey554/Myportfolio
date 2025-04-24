// Ye script abhi basic hai, aage scroll animation ya dark mode add kar sakte ho

console.log("Portfolio script loaded");

// Optionally: Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
