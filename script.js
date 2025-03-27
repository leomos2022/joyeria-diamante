document.addEventListener('DOMContentLoaded', function() {
    // Cargar galería de joyas
    loadJewelryGallery();
    
    // Manejar el formulario de membresía
    const membershipForm = document.getElementById('formMembresia');
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            
            if (!nombre || !email) {
                alert('Por favor complete los campos obligatorios');
                return;
            }
            
            // Enviar formulario (se manejará por PHP)
            this.submit();
        });
    }
    
    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Función para cargar la galería de joyas
async function loadJewelryGallery() {
    try {
        // En un entorno real, esto haría una petición a tu backend
        // const response = await fetch('get_products.php');
        // const products = await response.json();
        
        // Para este ejemplo, usamos datos simulados
        const products = [
            {
                id: 1,
                nombre: "Anillo de Diamantes",
                descripcion: "Anillo en oro blanco con diamantes talla princesa",
                precio: 1200.00,
                categoria: "anillos",
                imagen: "images/anillo1.jpg"
            },
            {
                id: 2,
                nombre: "Collar Esmeralda",
                descripcion: "Collar en oro amarillo con esmeralda central",
                precio: 850.00,
                categoria: "collares",
                imagen: "images/collar1.jpg"
            },
            {
                id: 3,
                nombre: "Pulsera Elegante",
                descripcion: "Pulsera de plata esterlina con detalles",
                precio: 450.00,
                categoria: "pulseras",
                imagen: "images/pulsera1.jpg"
            },
            {
                id: 4,
                nombre: "Reloj de Lujo",
                descripcion: "Reloj automático con esfera de zafiro",
                precio: 2500.00,
                categoria: "relojes",
                imagen: "images/reloj1.jpg"
            },
            {
                id: 5,
                nombre: "Aretes de Perlas",
                descripcion: "Aretes con perlas cultivadas y detalles en oro",
                precio: 680.00,
                categoria: "aretes",
                imagen: "images/aretes1.jpg"
            },
            {
                id: 6,
                nombre: "Conjunto de Bodas",
                descripcion: "Set completo de anillos de boda en platino",
                precio: 3200.00,
                categoria: "anillos",
                imagen: "images/bodas1.jpg"
            }
        ];
        
        const galleryContainer = document.getElementById('gallery');
        
        if (galleryContainer) {
            galleryContainer.innerHTML = products.map(product => `
                <div class="jewelry-card">
                    <img src="${product.imagen}" alt="${product.nombre}" class="jewelry-img">
                    <div class="jewelry-info">
                        <h3>${product.nombre}</h3>
                        <p>${product.descripcion}</p>
                        <p class="price">$${product.precio.toFixed(2)}</p>
                        <button class="btn" onclick="showProductDetail(${product.id})">Ver Detalles</button>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error al cargar la galería:', error);
    }
}

// Función para mostrar detalles del producto
function showProductDetail(productId) {
    alert(`Mostrando detalles del producto ID: ${productId}\n\nEn una aplicación real, esto abriría un modal o página de detalles.`);
}