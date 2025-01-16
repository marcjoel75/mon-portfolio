document.addEventListener("DOMContentLoaded", () => {
    // Bouton "Télécharger mon CV"
    const downloadCvButton = document.getElementById("download-cv");
    downloadCvButton.addEventListener("click", (event) => {
        event.preventDefault();
        const cvPath = "cv.pdf"; // Chemin vers ton fichier PDF

        // Crée un lien temporaire pour déclencher le téléchargement
        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "Marc_Joel_CV.pdf"; // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Bouton "Voir mon CV"
    const viewCvButton = document.getElementById("view-cv");
    viewCvButton.addEventListener("click", (event) => {
        event.preventDefault();
        const cvPath = "cv.pdf"; // Chemin vers ton fichier PDF

        // Ouvre le fichier dans un nouvel onglet
        window.open(cvPath, "_blank");
    });

    // Animation des barres de progression
    document.addEventListener("DOMContentLoaded", () => {
        const progressBars = document.querySelectorAll(".progress-bar span");
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const width = bar.getAttribute("data-width");
                        bar.style.width = width; // Largeur cible
                        bar.style.transform = "translateY(0)"; // Fait remonter la barre
                    }
                });
            },
            { threshold: 0.5 }
        );
    
        progressBars.forEach((bar) => {
            bar.style.width = "0%";
            bar.style.transform = "translateY(100%)"; // Définit la position initiale
            observer.observe(bar);
        });
    });
    
});
