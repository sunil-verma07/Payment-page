
// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) => {
//     const radioButton = item.querySelector('input[type="radio"]');
//     const accordionBody = item.querySelector(".accordion-body");

//     radioButton.addEventListener("click", () => {
//         if (!item.classList.contains("open")) {
//             accordionContent.forEach((otherItem, otherIndex) => {
//                 if (otherIndex !== index && otherItem.classList.contains("open")) {
//                     otherItem.classList.remove("open");
//                     otherItem.querySelector(".accordion-body").style.display = "none";
//                 }
//             });

//             item.classList.add("open");
//             accordionBody.style.display = "block";
//         }
//     });
// });

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    const radioButton = item.querySelector('input[type="radio"]');
    const accordionBody = item.querySelector(".accordion-body");

    radioButton.addEventListener("click", () => {
        if (!item.classList.contains("open")) {
            accordionContent.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index && otherItem.classList.contains("open")) {
                    otherItem.classList.remove("open");
                    otherItem.querySelector(".accordion-body").style.display = "none";
                }
            });

            item.classList.add("open");
            accordionBody.style.display = "block";
        }
    });

    // Check the radio button of the middle accordion initially
    if (index === Math.floor(accordionContent.length / 2)) {
        radioButton.checked = true;
        item.classList.add("open");
        accordionBody.style.display = "block";
    } else {
        // Hide accordion-body of unselected accordions
        accordionBody.style.display = "none";
    }
});
