let  acc = document.getElementsByClassName("accordion");
let  i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let  para = this.nextElementSibling;
        if (para.style.display === "block") {
            para.style.display = "none";
        } else {
            para.style.display = "block";
        }
    });
}