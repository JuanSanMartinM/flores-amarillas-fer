# Flores amarillas para Fer 🌻 — versión 2

Mini sitio estático hecho con **HTML + CSS + JavaScript puro**, pensado para abrirse desde el celular al escanear un QR.

Esta versión incluye:

- 🌻 ramo digital **más silvestre/orgánico** (girasoles + margaritas + florecitas pequeñas)
- 📸 galería de **3 fotos de ustedes**
- 📜 el **poema completo**
- ✨ mensajes escondidos en estrellas
- 💋 botón de **37 besitos**
- ❤️ cierre que deja la pregunta importante para hacerla **en persona**

---

## 1. Cambiar las fotos

Dentro de la carpeta `fotos/` hay tres imágenes de ejemplo:

- `foto-1.jpg`
- `foto-2.jpg`
- `foto-3.jpg`

**Reemplázalas por fotos reales tuyas con Fer manteniendo exactamente esos nombres.**

Recomendación:

- formato JPG
- fotos verticales, si puedes
- aproximadamente 1080 × 1350 px o similar
- no hace falta que pesen más de 1–2 MB cada una

Si tus fotos tienen otro nombre, simplemente renómbralas.

---

## 2. Cambiar los textos de las fotos y mensajes secretos

Abre `script.js` y busca:

```js
const CONFIG = {
```

Ahí puedes cambiar:

- `starMessages`: mensajes que salen al pulsar **Toca una estrella**
- `captions`: texto debajo de cada foto

---

## 3. Cambiar el poema

Está directamente dentro de `index.html` en la sección:

```html
<div class="poem" id="poemText">
```

Actualmente contiene:

> Unos pinceles plasmaron la belleza de una noche estrellada en un lienzo; un viaje me mostró la belleza de la vida en ti.
>
> Dicen que la vida es un viaje, y yo puedo decir que uno cambió la mía.
>
> Curiosos son los caminos que recorremos: caóticos, impredecibles, y aun así hermosos.
>
> Y por raro que parezca, me atrevería a caminar por cualquiera de ellos, siempre y cuando no me sueltes de la mano.

---

## 4. Probarlo antes de publicarlo

### Fácil con VS Code

1. Abre esta carpeta en VS Code.
2. Instala la extensión **Live Server**.
3. Click derecho en `index.html`.
4. **Open with Live Server**.

También puedes abrir `index.html` directamente con Chrome/Safari, pero Live Server se parece más a cómo funcionará publicado.

---

# Publicarlo gratis con GitHub Pages

## 1. Crear repositorio

1. Entra a GitHub.
2. **New repository**.
3. Nombre sugerido: `flores-amarillas-fer`.
4. Puedes dejarlo público.
5. Créalo.

## 2. Subir el contenido

Debes subir a la raíz del repo:

- `index.html`
- `styles.css`
- `script.js`
- carpeta `fotos/`

### Por terminal

```bash
git init
git add .
git commit -m "Flores amarillas para Fer v2"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/flores-amarillas-fer.git
git push -u origin main
```

Cambia `TU_USUARIO` por tu usuario real.

### Sin terminal

En GitHub: **Add file → Upload files** y arrastra todos los archivos y la carpeta `fotos`.

---

## 3. Activar GitHub Pages

Dentro del repo:

1. **Settings**
2. **Pages**
3. Build and deployment → **Deploy from a branch**
4. Branch → `main`
5. Folder → `/ (root)`
6. Save

Después tendrás una URL parecida a:

```text
https://TU_USUARIO.github.io/flores-amarillas-fer/
```

Ábrela desde el teléfono antes de imprimir el QR.

---

# Crear el QR

Cuando tengas la URL pública:

### Chrome

1. Abre la URL.
2. Compartir / click derecho.
3. **Crear código QR para esta página**.
4. Guarda la imagen.

### Canva

1. Haz una tarjeta pequeña.
2. Apps → QR Code.
3. Pega la URL.
4. Genera el QR.

Texto sugerido para la tarjeta:

> **Estas flores no cabían todas en el ramo. 🌻**

No pongas en la página la pregunta “¿quieres ser mi novia?”. El cierre ya está hecho para que el sitio diga que **todavía hay algo que quieres preguntarle**, y tú haces la pregunta en persona.

---

## Flujo de la experiencia

1. Fer escanea el QR.
2. “Para Fer”.
3. Florece el ramo silvestre digital.
4. Descubre mensajes / 37 besitos.
5. Ve tres fotos de ustedes.
6. Lee el poema.
7. Llega al cierre: **“hay algo que quiero preguntarte… pero prefiero decírtelo mirándote a los ojos.”**
8. Tú haces la pregunta. ❤️


## Cambios v3
- Más flores: el ramo ahora tiene varias capas de flores silvestres, margaritas y 8 girasoles protagonistas.
- Responsive real: tarjetas, botones, galería y ramo usan el ancho disponible del contenedor sin desbordarse.
- Centrado corregido: se eliminaron anchos en `vw` que podían sacar los recuadros del centro en móviles.
- El ramo reduce proporcionalmente flores y tallos en pantallas pequeñas y se recalcula al girar el teléfono.
- Ajustes específicos para iPhone/Android de 360–430 px de ancho.
