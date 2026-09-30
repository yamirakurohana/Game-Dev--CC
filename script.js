/* =========================================
   ENGINE TABS
========================================= */

const engineTabs = document.querySelectorAll(".engine-tab");
const enginePanels = document.querySelectorAll(".engine-panel");


engineTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.target;


        engineTabs.forEach((item) => {

            item.classList.remove("active");

        });


        enginePanels.forEach((panel) => {

            panel.classList.remove("active");

        });


        tab.classList.add("active");


        const targetPanel = document.getElementById(target);


        if (targetPanel) {

            targetPanel.classList.add("active");

        }

    });

});



/* =========================================
   PROJECT MODAL
========================================= */

const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalClose =
    document.getElementById("modalClose");

const modalOkay =
    document.getElementById("modalOkay");

const gameButtons =
    document.querySelectorAll(".game-button");



function openModal(title, description) {

    modalTitle.textContent = title;

    modalDescription.textContent = description;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}



function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}



gameButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.title || "Project";

        const description =
            button.dataset.description || "";


        openModal(title, description);

    });

});



modalClose.addEventListener("click", closeModal);

modalOkay.addEventListener("click", closeModal);



modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});



document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });


        link.classList.add("active");

    });

});



/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});