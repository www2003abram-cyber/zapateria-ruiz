function abrirModal(btn) {
  const card   = btn.closest('.producto-card');
  const img    = card.querySelector('.img-box img').src;
  const nombre = card.querySelector('.nombre').textContent;
  const precio = card.querySelector('.precio').textContent;

  document.getElementById('modalImg').src            = img;
  document.getElementById('modalNombre').textContent = nombre;
  document.getElementById('modalPrecio').textContent = precio;
  document.getElementById('modalOverlay').classList.add('activo');
}

function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('activo');
}

function cerrarModalFuera(e) {
  if (e.target === document.getElementById('modalOverlay')) cerrarModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});