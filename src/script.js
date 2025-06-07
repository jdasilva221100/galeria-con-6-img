function upDate(previewPic){
      /* Cambia la URL de la imagen de fondo del div con id = "image"
         a la URL del archivo fuente de la imagen de previsualización. */
      document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
      
      /* Cambia el texto del div con id = "image"
         al texto alternativo (alt) de la imagen de previsualización. */
      document.getElementById('image').innerHTML = previewPic.alt;
    }
    
    function unDo(){
      /* Restaura la URL de la imagen de fondo del div con id = "image"
         a su estado original (vacío). */
      document.getElementById('image').style.backgroundImage = "url('')";
      
      /* Restaura el texto del div con id = "image"
         al texto original. */
      document.getElementById('image').innerHTML = "Pasa el ratón o enfoca una imagen de F1 para verla aquí.";
    }
    
    // Nueva función para agregar los atributos tabindex y verificar la carga
    function addTabindexAndLogLoad() {
        console.log("¡El contenido de la página ha cargado completamente!"); // Mensaje de verificación onload
    
        // Obtener todas las imágenes con la clase 'preview'
        const previewImages = document.querySelectorAll('.preview');
    
        // Bucle para recorrer cada imagen y añadir el atributo tabindex
        for (let i = 0; i < previewImages.length; i++) {
            previewImages[i].setAttribute('tabindex', 0); // Añade tabindex="0" a cada imagen
            // Puedes verificar en la consola si el atributo se agregó correctamente
            // console.log(`Imagen ${i + 1} con tabindex:`, previewImages[i]); 
        }
    }
    
    // Añadir el listener para el evento onload
    // Cuando la página se carga completamente, se ejecuta la función 'addTabindexAndLogLoad'
    window.onload = addTabindexAndLogLoad;