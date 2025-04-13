Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Guía de Markdown para Artículos

Markdown es un lenguaje de marcado ligero que se utiliza para formatear texto de manera sencilla. En este proyecto, todos los artículos en la carpeta `data/articles` deben estar escritos en formato Markdown. Aquí tienes una guía básica de cómo usar Markdown:

### Formato Básico

- **Títulos**: Usa `#` para los títulos. Un `#` para el título principal, `##` para subtítulos, y así sucesivamente.
  ```markdown
  # Título Principal
  ## Subtítulo
  ### Sub-subtítulo
  ```

- **Negrita**: Encierra el texto entre `**` o `__`
  ```markdown
  **texto en negrita**
  ```

- **Cursiva**: Encierra el texto entre `*` o `_`
  ```markdown
  *texto en cursiva*
  ```

- **Listas**: 
  - Listas no ordenadas: Usa `-`, `*` o `+`
    ```markdown
    - Elemento 1
    - Elemento 2
    ```
  - Listas ordenadas: Usa números seguidos de punto
    ```markdown
    1. Primer elemento
    2. Segundo elemento
    ```

- **Enlaces**: `[texto del enlace](URL)`
  ```markdown
  [Google](https://www.google.com)
  ```

- **Imágenes**: `![texto alternativo](URL de la imagen)`
  ```markdown
  ![Descripción de la imagen](ruta/imagen.jpg)
  ```

- **Citas**: Usa `>` al inicio de la línea
  ```markdown
  > Esta es una cita
  ```

- **Código**:
  - En línea: Encierra el código entre \`
    ```markdown
    `código en línea`
    ```
  - Bloques: Encierra el código entre \`\`\`
    ````markdown
    ```javascript
    const code = "bloque de código";
    ```
    ````

### Estructura Recomendada para Artículos

Cada artículo en `data/articles` debe seguir esta estructura básica:

```markdown
# Título del Artículo

## Introducción
[Contenido de la introducción]

## Desarrollo
[Contenido principal del artículo]

## Conclusión
[Resumen y conclusiones]

## Referencias
- [Enlace 1](URL)
- [Enlace 2](URL)
```

### Buenas Prácticas

1. Usa títulos jerárquicos de manera consistente
2. Mantén los párrafos cortos y legibles
3. Incluye imágenes relevantes cuando sea necesario
4. Usa listas para mejorar la legibilidad
5. Asegúrate de que todos los enlaces funcionen
6. Mantén un formato consistente en todo el artículo

Recuerda que Markdown es un formato que prioriza la legibilidad, tanto en su forma original como en su versión renderizada. Mantén tu contenido claro y bien estructurado para una mejor experiencia de lectura.
