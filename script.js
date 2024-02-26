// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) => {
//     item.addEventListener("click", () =>{
//         if (!item.classList.contains("open")) {
//             accordionContent.forEach((otherItem, otherIndex) => {
//                 if (otherIndex !== index && otherItem.classList.contains("open")) {
//                     otherItem.classList.remove("open");
//                     let otherDescription = otherItem.querySelector(".description");
//                     otherDescription.style.height = "0px";
//                     otherItem.querySelector("i").classList.replace("fa-minus", "fa-plus");
//                 }
//             });

//             item.classList.add("open");
//             let description = item.querySelector(".description");
//             description.style.height = `${description.scrollHeight}px`;
//             item.querySelector("i").classList.replace("fa-plus", "fa-minus");
//         }
//     });
// });
// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) => {
//     const radioButton = item.querySelector('input[type="radio"]');
    
//     item.addEventListener("click", () => {
//         if (!item.classList.contains("open")) {
//             accordionContent.forEach((otherItem, otherIndex) => {
//                 if (otherIndex !== index && otherItem.classList.contains("open")) {
//                     otherItem.classList.remove("open");
//                     let otherDescription = otherItem.querySelector(".description");
//                     otherDescription.style.height = "0px";
//                     otherItem.querySelector('input[type="radio"]').checked = false;
//                 }
//             });

//             item.classList.add("open");
//             let description = item.querySelector(".description");
//             description.style.height = `${description.scrollHeight}px`;
//             radioButton.checked = true;
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
});