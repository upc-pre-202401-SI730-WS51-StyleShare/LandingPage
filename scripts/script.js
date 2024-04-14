function scrollToBottomAnimated() {
    // Obtiene la posición actual del scroll
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    // Obtiene la altura total del documento
    const documentHeight = document.documentElement.scrollHeight;
  
    // Calcula la distancia que hay que desplazarse
    const scrollDistance = documentHeight - currentScroll;
  
    // Define la duración de la animación (en milisegundos)
    const duration = 500;
  
    // Configura la función de animación
    const start = performance.now();
  
    function step(timestamp) {
      const elapsed = timestamp - start;
      const progress = elapsed / duration;
  
      // Aplica una función de aceleración suave (easeInOut)
      const easeInOut = function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 - t) * (2 - t) + 1;
      };
  
      // Calcula la posición de scroll actual
      const newScroll = currentScroll + progress * easeInOut(progress) * scrollDistance;
  
      // Actualiza la posición del scroll
      window.scrollTo(0, Math.round(newScroll));
  
      // Si la animación no ha terminado, continúa llamando a la función step
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    // Inicia la animación
    requestAnimationFrame(step);
  }
  