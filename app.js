// Configuración simplificada para el Diagnóstico
const roleConfigs = {
    juez: { userName: "Dr. Juez Pérez", userRole: "Autoridad Judicial" },
    aseguradora: { userName: "Ana López", userRole: "Analista de Fraude" },
    grua: { userName: "Carlos Rodríguez", userRole: "Operador Logístico" },
    admin: { userName: "SysAdmin", userRole: "Superusuario" }
};

// DOM Elements
const elements = {
    roleSelector: document.getElementById('role-selector'),
    userName: document.getElementById('user-name'),
    userRoleDisplay: document.getElementById('user-role-display'),
    navMenu: document.getElementById('nav-menu')
};

// Render Menu
function renderMenu() {
    elements.navMenu.innerHTML = `
        <a href="#" class="nav-item active">
            <i class="ph ph-presentation-chart"></i>
            <span>Diagnóstico Tecnológico</span>
        </a>
    `;
}

// Main Update Function
function updateDashboard(role) {
    const config = roleConfigs[role];
    if (!config) return;

    elements.userName.textContent = config.userName;
    elements.userRoleDisplay.textContent = config.userRole;
}

// Event Listeners
if (elements.roleSelector) {
    elements.roleSelector.addEventListener('change', (e) => {
        updateDashboard(e.target.value);
    });
}

// Initialize
renderMenu();
updateDashboard('juez'); // Default view

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Close sidebar when clicking a menu item on mobile
    elements.navMenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && e.target.closest('.nav-item')) {
            sidebar.classList.remove('active');
        }
    });
}
