const bm = document.querySelector('#bubble_machine'),
      bubble_rate = 500 //milliseconds per release

function addBubble() {
  var b = document.createElement('div')
  b.className = 'bubble'
  b.style.width = (Math.random()*100) + 28 + 'px'
  b.style.left = Math.random()*100 + '%'
  b.style.animationDuration = Math.floor(Math.random()*10) + 8 + 's'
  // b.style.filter = 'hue-rotate('+Math.random()*360+'deg)'
  b.onclick = function() {
    this.classList.add('pop_bubble')
    var pop = new Audio('http://contentservice.mc.reyrey.net/audio_v1.0.0/?id=e049b733-1543-51fd-9ce9-680f57226aa1')
    pop.play()
  }
  b.onanimationend = function() {
    this.remove()
  }  
  bm.appendChild(b)

  setTimeout(addBubble, bubble_rate)
}

addBubble()

const imagen = document.getElementById('imagen');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    if (x < window.innerWidth / 2 && y < window.innerHeight / 2) {
        imagen.src = './img/bubleft.png';
    } else if (x >= window.innerWidth / 2 && y < window.innerHeight / 2) {
        imagen.src = './img/bubright.png';
    } else if (x < window.innerWidth / 2 && y >= window.innerHeight / 2) {
        imagen.src = './img/bubdown.png';
    } else {
        imagen.src = './img/bubdown2.png';
    }
});


function copiarTexto() {
  const texto = document.getElementById('texto');
  texto.select();
  navigator.clipboard.writeText(texto.value)
      .then(() => {
          const boton = document.getElementById('boton-copiar');
          boton.classList.add('copiado');
          boton.textContent = 'Copiado!';
          setTimeout(() => {
              boton.classList.remove('copiado');
              boton.textContent = 'Copiar';
          }, 2000);
      })
      .catch((err) => {
          console.error('Error al copiar texto:', err);
      });
}