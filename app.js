// Configuración de Roles y Datos Simulados

const roleConfigs = {
    juez: {
        title: "Visión General - Judicial",
        userName: "Dr. Juez Pérez",
        userRole: "Autoridad Judicial",
        primaryAction: "Nueva Orden de Embargo",
        menu: [
            { icon: "ph-squares-four", text: "Dashboard", active: true },
            { icon: "ph-gavel", text: "Órdenes Activas" },
            { icon: "ph-file-text", text: "Expedientes" },
            { icon: "ph-magnifying-glass", text: "Búsqueda RUNT" }
        ],
        kpis: [
            { title: "Órdenes Emitidas (Mes)", value: "142", icon: "ph-gavel", color: "blue" },
            { title: "Vehículos en Custodia", value: "89", icon: "ph-car-profile", color: "orange" },
            { title: "Levantamientos Pendientes", value: "12", icon: "ph-file-signature", color: "green" }
        ],
        contextSidebar: {
            title: "Notificaciones Judiciales",
            items: [
                { title: "Solicitud de Levantamiento", desc: "Placa XYZ-123 - Requerida firma", time: "Hace 10 min", icon: "ph-pen", color: "blue" },
                { title: "Alerta de Vencimiento", desc: "Expediente #4582 sin acción", time: "Hace 2 hrs", icon: "ph-warning", color: "orange" }
            ]
        }
    },
    aseguradora: {
        title: "Dashboard - Aseguradora",
        userName: "Ana López",
        userRole: "Analista de Fraude (Seguros)",
        primaryAction: "Reportar Siniestro",
        menu: [
            { icon: "ph-squares-four", text: "Dashboard", active: true },
            { icon: "ph-shield-warning", text: "Alertas de Fraude" },
            { icon: "ph-car", text: "Recuperaciones" },
            { icon: "ph-file-search", text: "Validación de Pólizas" }
        ],
        kpis: [
            { title: "Recuperados", value: "45", icon: "ph-check-circle", color: "green" },
            { title: "Investigaciones Activas", value: "18", icon: "ph-magnifying-glass", color: "orange" },
            { title: "Riesgo Alto", value: "7", icon: "ph-warning", color: "red" }
        ],
        contextSidebar: {
            title: "Cruces de Datos (RUNT)",
            items: [
                { title: "Inconsistencia Detectada", desc: "Placa ABC-987 - Motor no coincide", time: "Hace 5 min", icon: "ph-warning-octagon", color: "red" },
                { title: "Validación Exitosa", desc: "Póliza verificada para DEF-456", time: "Hace 1 hr", icon: "ph-check", color: "green" }
            ]
        }
    },
    grua: {
        title: "Operativa - Grúas y Patios",
        userName: "Carlos Rodríguez",
        userRole: "Operador Logístico",
        primaryAction: "Registrar Ingreso",
        menu: [
            { icon: "ph-squares-four", text: "Dashboard", active: true },
            { icon: "ph-map-pin", text: "Rutas Asignadas" },
            { icon: "ph-warehouse", text: "Inventario Patios" },
            { icon: "ph-camera", text: "Registro Fotográfico" }
        ],
        kpis: [
            { title: "Servicios Hoy", value: "8", icon: "ph-truck", color: "blue" },
            { title: "Capacidad Patio Principal", value: "85%", icon: "ph-warehouse", color: "orange" },
            { title: "Ingresos Pendientes", value: "3", icon: "ph-clipboard-text", color: "red" }
        ],
        contextSidebar: {
            title: "Servicios Asignados",
            items: [
                { title: "Recogida Urgente", desc: "Calle 100 #15-20 - Policía de Tránsito", time: "En curso", icon: "ph-truck", color: "orange" },
                { title: "Ingreso Completado", desc: "Placa MNO-111 en Patio Norte", time: "Hace 30 min", icon: "ph-check-circle", color: "green" }
            ]
        }
    },
    admin: {
        title: "Panel de Administración del Sistema",
        userName: "SysAdmin",
        userRole: "Superusuario",
        primaryAction: "Auditar Accesos",
        menu: [
            { icon: "ph-squares-four", text: "Dashboard", active: true },
            { icon: "ph-users", text: "Gestión de Usuarios (SSO)" },
            { icon: "ph-database", text: "Estado de API & BD" },
            { icon: "ph-shield-check", text: "Logs de Auditoría" }
        ],
        kpis: [
            { title: "Usuarios Activos", value: "1,245", icon: "ph-users", color: "blue" },
            { title: "Consultas API (Hoy)", value: "15K", icon: "ph-arrows-left-right", color: "green" },
            { title: "Intentos Fallidos", value: "12", icon: "ph-shield-warning", color: "red" }
        ],
        contextSidebar: {
            title: "Monitoreo del Sistema",
            items: [
                { title: "Sincronización RUNT", desc: "Latencia normal (45ms)", time: "Activo", icon: "ph-activity", color: "green" },
                { title: "Alerta de Seguridad", desc: "Intento de acceso desde IP no habitual", time: "Hace 2 min", icon: "ph-shield-warning", color: "red" }
            ]
        }
    }
};

// Mock Data for Table
const recentVehicles = [
    { placa: "ABC-123", modelo: "Toyota Fortuner 2021", fecha: "Hoy, 10:45 AM", estado: "custodia", statusText: "En Custodia" },
    { placa: "XYZ-987", modelo: "Chevrolet Tracker 2019", fecha: "Hoy, 09:15 AM", estado: "transito", statusText: "En Tránsito" },
    { placa: "QWE-456", modelo: "Mazda CX-5 2022", fecha: "Ayer, 04:30 PM", estado: "alerta", statusText: "Alerta Documental" },
    { placa: "RTY-321", modelo: "Kia Picanto 2018", fecha: "Ayer, 11:20 AM", estado: "liberado", statusText: "Orden Levantada" },
    { placa: "UIO-654", modelo: "Renault Duster 2020", fecha: "28 Jul, 02:10 PM", estado: "custodia", statusText: "En Custodia" },
];

// DOM Elements
const elements = {
    roleSelector: document.getElementById('role-selector'),
    navMenu: document.getElementById('nav-menu'),
    userName: document.getElementById('user-name'),
    userRoleDisplay: document.getElementById('user-role-display'),
    dashboardTitle: document.getElementById('dashboard-title'),
    primaryActionBtn: document.getElementById('primary-action-btn'),
    kpiGrid: document.getElementById('kpi-grid'),
    tableBody: document.getElementById('table-body'),
    contextSidebarCard: document.getElementById('context-sidebar-card'),
    mainDashboardView: document.getElementById('main-dashboard-view'),
    diagnosticView: document.getElementById('diagnostic-view')
};

// Render Functions
function renderMenu(menuItems) {
    // Add "Propuesta Comercial" to every role for this demo
    const allMenuItems = [...menuItems, { icon: "ph-presentation-chart", text: "Diagnóstico Tecnológico", action: "diagnostic" }];
    
    elements.navMenu.innerHTML = allMenuItems.map((item, index) => `
        <a href="#" class="nav-item ${item.active ? 'active' : ''}" data-action="${item.action || 'dashboard'}">
            <i class="ph ${item.icon}"></i>
            <span>${item.text}</span>
        </a>
    `).join('');

    // Attach click listeners to menu items
    const navLinks = elements.navMenu.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const action = link.getAttribute('data-action');
            if (action === 'diagnostic') {
                elements.mainDashboardView.style.display = 'none';
                elements.diagnosticView.style.display = 'block';
            } else {
                elements.diagnosticView.style.display = 'none';
                elements.mainDashboardView.style.display = 'block';
            }
        });
    });
}

function renderKPIs(kpis) {
    elements.kpiGrid.innerHTML = kpis.map(kpi => `
        <div class="kpi-card ${kpi.color}">
            <div class="kpi-header">
                <span>${kpi.title}</span>
                <div class="kpi-icon ${kpi.color}">
                    <i class="ph ${kpi.icon}"></i>
                </div>
            </div>
            <div class="kpi-value">${kpi.value}</div>
        </div>
    `).join('');
}

function renderTable() {
    elements.tableBody.innerHTML = recentVehicles.map(v => `
        <tr>
            <td style="font-weight: 600; color: var(--text-main);">${v.placa}</td>
            <td>${v.modelo}</td>
            <td style="color: var(--text-muted);">${v.fecha}</td>
            <td>
                <span class="status-badge ${v.estado}">
                    <i class="ph ${v.estado === 'custodia' ? 'ph-shield-check' : v.estado === 'transito' ? 'ph-truck' : v.estado === 'alerta' ? 'ph-warning' : 'ph-check-circle'}"></i>
                    ${v.statusText}
                </span>
            </td>
            <td>
                <button class="action-btn"><i class="ph ph-dots-three-outline-vertical"></i></button>
            </td>
        </tr>
    `).join('');
}

function renderContextSidebar(contextData) {
    elements.contextSidebarCard.innerHTML = `
        <div class="card-header">
            <h2>${contextData.title}</h2>
        </div>
        <div class="alerts-list">
            ${contextData.items.map(item => `
                <div class="alert-item">
                    <div class="alert-icon" style="background: rgba(${item.color === 'red' ? '239, 68, 68' : item.color === 'green' ? '16, 185, 129' : item.color === 'orange' ? '245, 158, 11' : '59, 130, 246'}, 0.1); color: var(--${item.color === 'blue' ? 'primary' : item.color === 'red' ? 'danger' : item.color === 'green' ? 'success' : 'warning'});">
                        <i class="ph ${item.icon}"></i>
                    </div>
                    <div class="alert-content">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                        <span class="alert-time">${item.time}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Main Update Function
function updateDashboard(role) {
    const config = roleConfigs[role];
    if (!config) return;

    // Reset view to dashboard
    elements.diagnosticView.style.display = 'none';
    elements.mainDashboardView.style.display = 'block';

    // Add a slight fade out effect
    elements.mainDashboardView.style.opacity = '0.5';
    elements.mainDashboardView.style.transition = 'opacity 0.2s';

    setTimeout(() => {
        elements.userName.textContent = config.userName;
        elements.userRoleDisplay.textContent = config.userRole;
        elements.dashboardTitle.textContent = config.title;
        elements.primaryActionBtn.innerHTML = `<i class="ph ph-plus"></i> ${config.primaryAction}`;
        
        renderMenu(config.menu);
        renderKPIs(config.kpis);
        renderContextSidebar(config.contextSidebar);
        
        // Restore opacity
        elements.mainDashboardView.style.opacity = '1';
    }, 200);
}

// Event Listeners
elements.roleSelector.addEventListener('change', (e) => {
    updateDashboard(e.target.value);
});

// Initialize
renderTable();
updateDashboard('juez'); // Default view
