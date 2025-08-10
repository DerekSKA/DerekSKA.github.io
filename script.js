document.addEventListener('DOMContentLoaded', function() {
    // ===== SCROLL SUAVE Y ANIMACIONES =====
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animaciones al aparecer elementos
    const elementos = document.querySelectorAll('section');
    const observador = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(sec => observador.observe(sec));

    // ===== CAMBIO AUTOMÁTICO DE IMÁGENES =====
    const proyectos = {
        novias: [
            'proyectos/Novias/novia2.jpg',
            'proyectos/Novias/novia3.jpg',
            'proyectos/Novias/novia4.jpg',
            'proyectos/Novias/novia5.jpg',
            'proyectos/Novias/novia6.jpg',
            'proyectos/Novias/novia7.jpg',
            'proyectos/Novias/novia8.jpg',
            'proyectos/Novias/novia9.jpg'

        ],
        efectosEspeciales: [
            'proyectos/Efectos-Especiales/efect-espe2.jpg',
            'proyectos/Efectos-Especiales/efect-espe3.jpg'
        ],
        bodyPaint: [
            'proyectos/Body-Paint/maqui-body1.jpg',
            'proyectos/Body-Paint/maqui-body2.jpg'
        ],
        pestañas: [
            'proyectos/Pestañas/pestañas1.jpg',
            'proyectos/Pestañas/pestañas2.jpg'
        ],
        envejecimiento: [
            'proyectos/Maquillaje-Envejecimiento/maqui-enveje1.jpg',
            'proyectos/Maquillaje-Envejecimiento/maqui-enveje2.jpg'
        ],
        arlequin: [
            'proyectos/Arlequin/Arlequin1.jpg',
            'proyectos/Arlequin/Arlequin2.jpg',
            'proyectos/Arlequin/Arlequin3.jpg'
        ],
        audiovisual: [
            'proyectos/Maquillaje-Audiovisual/maqui-audi2.jpg',
            'proyectos/Maquillaje-Audiovisual/maqui-audi1.jpg',
            'proyectos/Maquillaje-Audiovisual/maqui-audi3.jpg'
        ],
        artistico: [
            'proyectos/Maquillaje-Artistico/maqui-art2.jpg',
            'proyectos/Maquillaje-Artistico/maqui-art1.jpg'
        ]
    };

    const cards = document.querySelectorAll('.card');
    const indices = {
        novias: 0,
        efectosEspeciales: 0,
        bodyPaint: 0,
        pestañas: 0,
        envejecimiento: 0,
        arlequin: 0,
        audiovisual: 0,
        artistico: 0
    };

    function cambiarImagenes() {
        // Proyecto 1 (Novias)
        indices.novias = (indices.novias + 1) % proyectos.novias.length;
        cards[0].querySelector('img').src = proyectos.novias[indices.novias];
        
        // Proyecto 2 (Efectos Especiales)
        indices.efectosEspeciales = (indices.efectosEspeciales + 1) % proyectos.efectosEspeciales.length;
        cards[1].querySelector('img').src = proyectos.efectosEspeciales[indices.efectosEspeciales];
        
        // Proyecto 3 (Body Paint)
        indices.bodyPaint = (indices.bodyPaint + 1) % proyectos.bodyPaint.length;
        cards[2].querySelector('img').src = proyectos.bodyPaint[indices.bodyPaint];
        
        // Proyecto 4 (Pestañas)
        indices.pestañas = (indices.pestañas + 1) % proyectos.pestañas.length;
        cards[3].querySelector('img').src = proyectos.pestañas[indices.pestañas];
        
        // Proyecto 5 (Envejecimiento)
        indices.envejecimiento = (indices.envejecimiento + 1) % proyectos.envejecimiento.length;
        cards[4].querySelector('img').src = proyectos.envejecimiento[indices.envejecimiento];
        
        // Proyecto 6 (Arlequín)
        indices.arlequin = (indices.arlequin + 1) % proyectos.arlequin.length;
        cards[5].querySelector('img').src = proyectos.arlequin[indices.arlequin];
        
        // Proyecto 7 (Audiovisual)
        indices.audiovisual = (indices.audiovisual + 1) % proyectos.audiovisual.length;
        cards[6].querySelector('img').src = proyectos.audiovisual[indices.audiovisual];
        
        // Proyecto 8 (Artístico)
        indices.artistico = (indices.artistico + 1) % proyectos.artistico.length;
        cards[7].querySelector('img').src = proyectos.artistico[indices.artistico];
    }

    // Cambiar imágenes cada 5 segundos (5000 ms)
    setInterval(cambiarImagenes, 5000);

    // ===== MODAL DE IMAGENES =====
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const cerrar = document.getElementById("cerrar");

    document.querySelectorAll(".zoom-img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // ===== MOSTRAR/OCULTAR DESCRIPCIÓN =====
    document.querySelectorAll(".ver-mas").forEach(boton => {
        boton.addEventListener("click", () => {
            const descripcion = boton.nextElementSibling;
            descripcion.classList.toggle("oculto");
            boton.textContent = descripcion.classList.contains("oculto") ? "Ver más" : "Ocultar";
        });
    });
});