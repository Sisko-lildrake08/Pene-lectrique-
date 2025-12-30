// Données des services
const servicesData = [
    { 
        id: "diagnostic", 
        icon: "zap", 
        title: "Diagnostic électrique complet", 
        description: "Diagnostic précis de votre moteur, contrôleur, batterie ou vélo/trottinette. Identification rapide des erreurs E0, E1, coupures, court-circuits et pannes électroniques." 
    },
    { 
        id: "moteur", 
        icon: "settings", 
        title: "Réparation de moteurs électriques", 
        description: "Réparation moteurs brushless, pédaliers, roues – Bosch, Motinova, Xiaomi et autres. Remplacement bobinage, rotor/stator, capteurs Hall, suppression de bruit ou perte de puissance." 
    },
    { 
        id: "controleur", 
        icon: "cpu", 
        title: "Réparation de contrôleurs", 
        description: "Réparation cartes électroniques : MOSFET, programmation, pas de démarrage, incompatibilité écran. Optimisation possible." 
    },
    { 
        id: "trottinette", 
        icon: "bike", 
        title: "Réparation trottinettes", 
        description: "Changement contrôleur, réparation batterie, freins électriques, affichage erreurs, remise en état complète – toutes marques." 
    },
    { 
        id: "velo", 
        icon: "bike", 
        title: "Réparation vélos électriques", 
        description: "Moteur pédalier, batterie, contrôleur, capteurs, câblage. Réglage complet et optimisation performance." 
    },
    { 
        id: "batterie", 
        icon: "battery-full", 
        title: "Batteries & Systèmes électroniques", 
        description: "Réparation BMS, remplacement cellules, augmentation autonomie, tests capacité, réparation connectiques et câbles." 
    },
    { 
        id: "innovation", 
        icon: "lightbulb", 
        title: "Fabrication & Innovation", 
        description: "Création prototypes, petites cartes électroniques, moteurs personnalisés et systèmes électroniques sur mesure." 
    },
    { 
        id: "entretien", 
        icon: "wrench", 
        title: "Entretien & Optimisation", 
        description: "Nettoyage, calibration, vérification composants, optimisation moteur, réglage puissance, mise à jour systèmes compatibles." 
    }
];

// Données du calendrier réseaux sociaux
const socialPlanData = [
    { 
        day: 1, 
        category: "Réparation", 
        video: "Diagnostic trottinette", 
        text: "Votre trottinette ne démarre pas ? Voici comment nous diagnostiquons rapidement !", 
        tags: "#PeneElectrique #Trottinette #Reparation", 
        cta: "Réservez sur WhatsApp : 705 567 447" 
    },
    { 
        day: 2, 
        category: "Astuce", 
        video: "Vérification câblage", 
        text: "Un câble débranché peut stopper votre moteur. Vérifiez ça !", 
        tags: "#VeloElectrique #Moteur #Tips", 
        cta: "Besoin d'aide ? Contactez-nous !" 
    },
    { 
        day: 3, 
        category: "Innovation", 
        video: "Prototype électronique", 
        text: "Découvrez notre dernier prototype moteur optimisé !", 
        tags: "#Innovation #Electronique #Thiès", 
        cta: "Suivez-nous pour plus de projets" 
    },
    { 
        day: 4, 
        category: "Conseil", 
        video: "Entretien batterie", 
        text: "Comment prolonger la durée de vie de votre batterie lithium ?", 
        tags: "#Batterie #Conseil #PeneElectrique", 
        cta: "Vérifiez votre batterie avec nous !" 
    },
    { 
        day: 5, 
        category: "Tutoriel", 
        video: "Réglage contrôleur", 
        text: "Guide pas à pas pour régler votre contrôleur de vitesse", 
        tags: "#Tutoriel #Controleur #VeloElectrique", 
        cta: "Apprenez avec Pene Électrique" 
    },
    { 
        day: 6, 
        category: "Présentation", 
        video: "Notre atelier", 
        text: "Visite guidée de notre atelier à Thiès", 
        tags: "#Atelier #Thiès #Visite", 
        cta: "Venez nous rencontrer !" 
    },
    { 
        day: 7, 
        category: "Réparation", 
        video: "Changement moteur", 
        text: "Comment nous changeons un moteur de vélo électrique en 30 min", 
        tags: "#Moteur #Changement #Rapide", 
        cta: "Votre moteur est HS ? Contactez-nous" 
    },
    { 
        day: 8, 
        category: "Innovation", 
        video: "Système sur mesure", 
        text: "Création d'un système électrique personnalisé pour un client", 
        tags: "#Personnalisation #Innovation #SurMesure", 
        cta: "Un projet unique ? Parlons-en !" 
    },
    { 
        day: 9, 
        category: "Astuce", 
        video: "Nettoyage moteur", 
        text: "Comment nettoyer votre moteur sans l'endommager ?", 
        tags: "#Nettoyage #Astuce #Entretien", 
        cta: "Entretenez votre équipement" 
    },
    { 
        day: 10, 
        category: "Témoignage", 
        video: "Client satisfait", 
        text: "Retour d'expérience d'un client après réparation", 
        tags: "#Temoignage #Satisfaction #Client", 
        cta: "Rejoignez nos clients satisfaits !" 
    }
];

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeQuickNavigation();
    initializeServices();
    initializeBookingForm();
    initializeSocialCalendar();
    initializeScrollAnimations();
    initializeContactSection();
});

// --- GESTION DE LA NAVIGATION RAPIDE ---
function initializeQuickNavigation() {
    const quickNavToggle = document.getElementById('quickNavToggle');
    const quickNavMenu = document.querySelector('.quick-nav-menu');
    const quickNavItems = document.querySelectorAll('.quick-nav-item');
    
    // Gestion du toggle
    quickNavToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        quickNavMenu.classList.toggle('active');
        
        // Ajouter/supprimer l'animation pulse
        if (quickNavMenu.classList.contains('active')) {
            this.classList.remove('pulse');
        } else {
            setTimeout(() => {
                this.classList.add('pulse');
            }, 500);
        }
    });
    
    // Fermer la navigation rapide quand on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.quick-nav')) {
            quickNavToggle.classList.remove('active');
            quickNavMenu.classList.remove('active');
            
            // Redémarrer l'animation pulse
            setTimeout(() => {
                quickNavToggle.classList.add('pulse');
            }, 500);
        }
    });
    
    // Gestion du clic sur les items
    quickNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Scroll vers la section
            scrollToSection(targetId);
            
            // Fermer le menu
            quickNavToggle.classList.remove('active');
            quickNavMenu.classList.remove('active');
            
            // Animation de feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Mettre en évidence l'item actif
            quickNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Retirer la classe active après 2 secondes
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        });
    });
    
    // Animation pulse initiale
    setTimeout(() => {
        quickNavToggle.classList.add('pulse');
    }, 1000);
    
    // Suivi de la section active
    window.addEventListener('scroll', function() {
        const sections = ['services', 'reservation', 'apropos', 'contact', 'social'];
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Mettre à jour l'item actif dans la navigation rapide
                    quickNavItems.forEach(item => {
                        const href = item.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            }
        });
    });
}

// --- GESTION DE LA NAVIGATION PRINCIPALE ---
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Gestion du scroll pour la navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Gestion du menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.className = 'lucide lucide-x';
        } else {
            icon.className = 'lucide lucide-menu';
        }
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'lucide lucide-menu';
        });
    });
    
    // Gestion du bouton de réservation dans le hero
    document.getElementById('reservationBtn').addEventListener('click', () => {
        scrollToSection('reservation');
    });
    
    // Navigation fluide pour tous les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            scrollToSection(targetId.substring(1));
            
            // Fermer le menu mobile si ouvert
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'lucide lucide-menu';
            }
        });
    });
}

// --- AFFICHAGE DES SERVICES ---
function initializeServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    const servicesSelector = document.getElementById('servicesSelector');
    
    // Vider les conteneurs
    servicesGrid.innerHTML = '';
    servicesSelector.innerHTML = '';
    
    // Créer les cartes de services
    servicesData.forEach(service => {
        // Carte pour la grille des services
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="lucide lucide-${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
        
        // Option pour le sélecteur de services
        const serviceOption = document.createElement('div');
        serviceOption.className = 'service-option';
        serviceOption.dataset.service = service.id;
        serviceOption.innerHTML = `
            <i class="lucide lucide-${service.icon} icon"></i>
            <div class="service-option-label">${service.title.split(' ')[0]}</div>
        `;
        
        serviceOption.addEventListener('click', () => {
            // Retirer la classe selected de toutes les options
            document.querySelectorAll('.service-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Ajouter la classe selected à l'option cliquée
            serviceOption.classList.add('selected');
            // Mettre à jour l'input hidden
            document.getElementById('selectedService').value = service.id;
        });
        
        servicesSelector.appendChild(serviceOption);
    });
}

// --- GESTION DU FORMULAIRE DE RÉSERVATION ---
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const dateInput = document.getElementById('dateInput');
    const submitBtn = document.getElementById('submitBtn');
    
    // Définir la date minimum à aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
    
    // Gestion de la soumission du formulaire
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation des champs
        const name = document.getElementById('nameInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();
        const service = document.getElementById('selectedService').value;
        const date = dateInput.value;
        const time = document.getElementById('timeSelect').value;
        
        if (!name || !phone || !service || !date || !time) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        // Animation de soumission
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="lucide lucide-loader-2 loading"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simuler l'envoi du formulaire (2 secondes)
        setTimeout(() => {
            // Afficher un message de succès
            showNotification('Votre réservation a été envoyée avec succès ! Vous recevrez une confirmation par WhatsApp.', 'success');
            
            // Réinitialiser le formulaire
            bookingForm.reset();
            document.querySelectorAll('.service-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            document.getElementById('selectedService').value = '';
            dateInput.value = today;
            
            // Restaurer le bouton
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Scroll vers le haut
            scrollToSection('accueil');
            
        }, 2000);
    });
}

// --- AFFICHAGE DU CALENDRIER RÉSEAUX SOCIAUX ---
function initializeSocialCalendar() {
    const socialTableBody = document.getElementById('socialTableBody');
    
    // Vider le tableau
    socialTableBody.innerHTML = '';
    
    // Créer les lignes du tableau
    socialPlanData.forEach((plan, index) => {
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.1}s`;
        
        row.innerHTML = `
            <td>${plan.day}</td>
            <td>${plan.category}</td>
            <td>${plan.video}</td>
            <td>${plan.text}</td>
            <td>${plan.tags}</td>
            <td>${plan.cta}</td>
        `;
        
        // Ajouter un effet hover
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(148, 210, 189, 0.15)';
            this.style.transform = 'scale(1.005)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
        
        socialTableBody.appendChild(row);
    });
}

// --- GESTION DE LA SECTION CONTACT ---
function initializeContactSection() {
    // Animation des cartes de contact
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Animation des icônes sociales
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// --- ANIMATIONS AU SCROLL ---
function initializeScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const revealOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Déclencher au scroll et au chargement
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
}

// --- FONCTIONS UTILITAIRES ---
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'success') {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'error' ? 'notification-error' : ''}`;
    notification.innerHTML = `
        <i class="lucide lucide-${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="lucide lucide-x"></i></button>
    `;
    
    // Ajouter au document
    document.body.appendChild(notification);
    
    // Bouton de fermeture
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Supprimer automatiquement après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Animation pour les cartes de service au hover
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon i');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
});
