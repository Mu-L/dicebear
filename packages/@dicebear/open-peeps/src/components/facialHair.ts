import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const facialHair: ComponentGroup = {
  chin: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M212.56 153.064s-44.39 6.523-64.26-2.696c-19.81-9.19-39.08-18.082-57.05-30.254-18.41-12.472-34.03-27.281-45.18-46.238C35.7 56.237 27.08 37.52 18.4 18.948c-.507-1.085-5.49-11.874-7.25-15.492C8.44-2.154.52-.394.52 8.316c0 8.708-.39 74.66 14.83 100.603 13.73 23.431 37 39.803 60.12 54.093 25.58 15.801 59.56 32.882 90.08 37.395 27.62 4.08 59.14-7.381 79.14-26.271 20.91-19.755 26.83-46.594 37.62-72.297 2.41-5.745-6.133-9.21-8.64-3.56-4.719 10.64-61.11 54.785-61.11 54.785Z" fill="#000"/>
`,
  full: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M117.725 95.193c8.096-18.967 25.767-32.907 46.111-38.004 14.941-3.733 30.62-3.613 45.85-2.132 7.979.771 16.538 1.403 24.058 4.366 6.421 2.532 11.654 7.317 15.589 12.934 4.684 6.656 7.869 14.274 10.106 22.082.318 1.11.617 2.229.895 3.353-.972 5.891-3.038 10.905-8.494 14.609-5.325 3.617-11.679 5.097-18.013 5.622a27.763 27.763 0 0 1-1.771-.919c-9.87-5.65-16.817-19.002-29.274-17.195-11.117 1.614-18.436 15.602-25.047 23.805-21.222 2.472-42.428-3.905-59.695-16.04-.877-4.153-.927-8.342-.315-12.481Zm157.033-14.388a81.876 81.876 0 0 0-6.37-13.725c-8.379-14.374-21.242-25.828-36.512-32.375-36.122-15.466-82.86-4.563-112.031 20.803-9.965 8.67-20.04 21.413-23.087 35.12-.91.18-1.769.654-2.476 1.32C73.206 78.68 51.502 65.914 34.518 47.52 22.185 34.155 13.606 18.34 8.353.96c-.43-1.43-2.736-1.22-2.666.362l.06 1.11c-.22-.68-1.259-.33-1.339.33-2.826 21.113-6.361 43.497-3.106 64.72 1.948 12.663 7.7 21.934 15.39 31.945 8.239 10.73 17.567 20.711 27.104 30.282 6.052 6.075 12.373 13.083 19.784 17.538 8.618 5.175 18.395 9.11 27.593 13.104 9.358 4.074 18.855 7.838 28.532 11.101 19.344 6.547 39.338 11.072 59.681 13.054 16.288 1.582 34.903 3.305 50.513-2.823 11.964-4.695 21.621-13.183 29.281-23.395 8.339-11.121 14.931-23.79 18.575-37.149 3.787-13.877-2.199-38.096-2.997-40.333Z" fill="#000"/>
`,
  full2: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M249.132 128.724c-3.49-1.142-6.918-2.471-10.362-3.752-17.609-8.845-38.88-10.449-57.347-3-9.064 3.656-17.516 10.225-26.611 14.53a80.856 80.856 0 0 1-6.54 2.152c-1.35-.47-2.7-.97-4.04-1.47-9.647-3.636-18.721-8.121-27.531-13.055a56.408 56.408 0 0 0-2.963-3.844c6.375-.905 12.617-2.409 18.264-3.961 17.34-4.75 33.68-12.49 50.96-17.45 16.09-4.63 33.55-7.16 49.71-1.41 7.67 2.73 14.42 7.51 21.88 10.73 3.86 1.66 8.49 3.29 13 3.53-2.91 6.97-6.59 13.48-11.62 18.9-2.3-.49-4.58-1.18-6.8-1.9Zm37.521-54.592c-1.544 1.283-7.916 5.423-9.983 7.89a78.52 78.52 0 0 1-1.593-.624c-.909-1.116-2.248-1.606-3.613-1.576-9.529-4.432-18.012-10.695-25.582-18.548-5.38-5.57-10.89-11.4-18.08-14.63-8.47-3.82-16.8-2.06-25.7-1.48-9.47.63-18.82-2.06-28.28-.77-6.92.95-13.4 3.88-19 8.01-11.43 8.43-19.31 20.27-28.97 30.48-10.96 11.58-24.44 18.98-39.43 22.76-.18-.12-.37-.24-.56-.35-11.05-10-21.03-21.29-29.86-33.32-8.62-11.75-31.35-64.64-36.84-69.28-2.28-1.93-4.78-2.76-7.17-2.69-4.33.1-8.33 3.11-10.12 7.85-3.04 8.06-1.52 18.48-1.28 26.91.3 10.32.98 20.63 2.06 30.9 1.07 10.15 2.49 20.27 4.26 30.32.89 5.08 1.88 10.15 2.97 15.2.34 1.59.77 3.01 1.29 4.33.53 2.49 1.1 4.97 1.71 7.43 3.98 16.11 10.26 32.24 22.25 44.13 12.48 12.39 29.44 20.62 45.19 27.98 15 7.01 30.72 13.24 46.85 18.12 14.01 6.35 29.01 11.37 44.07 14.01 16.58 2.91 34.01 3.09 50.02-2.67a88.1 88.1 0 0 0 22.06-11.7c9.57-4.97 18.18-11.8 25.23-20.84 12.627-16.202 18.654-35.862 21.291-56.136.675-5.189 3.213-25.076 3.412-28.172l1.934-29.998c.304-4.72-5.488-6.066-8.536-3.536Z" fill="#000"/>
`,
  full3: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M232.994 131.311c-9.313-8.297-19.752-24.977-33.131-11.779-3.309 3.729-4.649 12.089-9.709 13.729-6.72 2.18-13.38-4.93-15.67-10.39-9.37-30.337 29.364-38.658 51.43-33.757 10.78 4.427 18.72 22.247 19.2 31.547.31 6.25-4.98 15.44-12.12 10.65Zm70.26-46.76a5.485 5.485 0 0 0-.371-1.098c-4.119-1.557-7.378.03-9.392 2.997.066.737.286 1.484.425 2.215-1.554 3.274-2.956 7.325-5.062 10.154a3.568 3.568 0 0 1-1.261-.132c-34.913 3.646-17.868-32.883-53.279-41.956-27.373-4.516-76.847.657-89.76 29.148-10.184 45.508-61.967 13.798-78.969-9.87-18.14-21.538-29.87-47.858-41.18-73.398-2.39-5.405-9.85-1.54-9.039 3.646C4.912 27.227 5.26 52.417 2.671 75.392c-4.404 45.835-8.695 110.113 33.892 138.1 55.487 62.717 194.045 84.849 258.043 27.223 22.154-47.63 19.423-105.737 8.648-156.164Z" fill="#000"/>
`,
  full4: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M4.429 13.755c7.067 0 9.962 16.455 9.962 16.455 17.976 30.996 35.28 61.905 66.152 83.23 34.272 13.733 67.981 37.123 107.031 39.688 17.605-1.849 22.768-17.962 44.51-12.292 13.871 3.37 29.446 10.017 42.27.416 10.84-7.086 18.466-17.82 27.816-26.498.477-1.566 3.582 14.958 2.644 20.544l-.725 3.171c-5.789 25.572-11.644 55.665-37.55 69.722-7.892 4.158-18.965 8.171-27.723 5.827-46.277 7.379-96.475 1.98-137.019-21.105-14.273-3.708-24.89-15.091-36.13-23.689C38.176 145.145 6.67 114.642 3.735 78.061c-2.936-36.58-1.629-64.306.694-64.306Zm139.825 72.23c15.752-25.293 47.046-21.185 71.397-9.661 13.451-9.133 31.199-7.452 45.793-1.018l-.002.008c13.444 7.355 23.626 19.432 32.985 30.982 2.277 3.069 3.183 7.192-.02 8.705-15.086 12.434-46.431 5.137-60.655-4.109-10.263-.826-8.013-15.397-19.859-5.2-7.904 7.431-17.834 12.038-28.62 14.768-24.117 8.28-46.322 6.905-67.325-6.002-2.701-.262-13.769-6.522-9.836-8.749 4.277 1.155 27.975-12.447 36.142-19.723Z" fill="${colors.hair.value}"/>
    <path d="M.745 40.948c.161-1.33 2.226-1.396 2.273 0 .957 29.266 10.487 61.351 26.605 86.409 38.735 63.248 117.796 94.931 193.89 84.045 55.61-.754 61.55-32.264 75.373-76.263 7.174-5.89 10.698-3.78 8.47 3.125-17.134 53.093-23.001 83.545-90.795 82.967C107.704 236.768-10.347 147.764.745 40.948Zm153.79 23.6c17.76-7.929 38.893-6.81 53.728 4.153l1.046.239c2.598.58 5.09 1.022 8.011.725C256.574 49 282.781 85.04 302.906 112.024c1.519.052 2.756 1.243 2.345 2.638l.644.689c-2.535 6.8-7.116 13.364-13.38 17.488-20.537 27.345-35.873 18.797-62.63 7.538-27.514-4.119-28.627 28.313-67.011 13.456l-1.448-.472c-12.627-4.17-27.123-10.496-36.304-19.637-.3-.3-.006-.877.453-.727 21.299 6.421 48.686 27.388 70.367 13.262 5.48-3.678 10.403-8.143 16.53-10.912 34.977-11.703 47.269 34.516 77.875-13.469-24.922 4.343-53.013.025-71.641-16.944-27.848 33.54-82.049 28.166-116.511 7.334-4.713.678-11.688-3.984-7.347-8.422 4.748-3.773 12.259-2.294 18.096-4.34 18.631-6.628 23.03-27.754 41.591-34.958Zm62.261 14.025c-19.684-14.002-49.122-16.36-67.96.158-11.765 11.815-19.396 28.771-38.361 31.896 32.569 18.747 79.367 19.062 104.446-10.766.788-2.58 4.869-1.467 5.362.774 17.957 12.529 40.925 19.188 63.293 15.346a78.723 78.723 0 0 0 10.637-2.515l-3.302-4.537c-17.552-24.017-40.133-51.983-73.612-32.23-.758.383-1.076-.598-1.171-1.1l-.412.3c.297.62 2.764 2.665 1.08 2.674Zm80.603 41.703c.164.147.299.308.414.475a54.47 54.47 0 0 1 1.71-.857l-.159-.117c-.631.18-1.289.345-1.965.499ZM3.28 4.632l-.007-.96c0-9.66 2.596 2.52 3.762 4.915 5.011 9.022 9.201 17.951 14.51 26.747 21.288 38.298 24.585 54.899 67.48 76.716 3.187 2.728-.16 7.626-4.119 6.619-5.922-1.505-11.506-5.278-16.664-8.32-29.21-15.065-40.105-45.797-53.21-72.544C11.183 27.198 2.305 15.883 3.28 4.632Z" fill="#000"/>
  </g>
`,
  goatee1: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M207.914 31.328c-11.121-5.009-31.091-.638-38.341 1.1-16.855 4.042-33.811 12.777-39.051 26.462-5.905 15.423 5.877 20.278 7.61 19.485 11.668.822 25.563-6.513 37.79-8.406 9.926-1.55 20.397-2.903 29.697-8.177 6.79 3.735 22.126 5.754 34.503 9.02 10.541 2.78 15.108 8.81 24.88 7.527 11.712-1.536 6.918-26.169-6.135-36.148-14.286-10.92-38.448-15.35-50.953-10.863Zm22.02 105.325c-9.729 2.373-10.383-18.953-11.473-26.487-.851-5.885-5.654-21.064-17.83-20.41-12.176.655-16.752 13.373-16.135 21.282.401 5.13 5.127 31.112-9.96 34.398-9.619-.034-20.747-.683-30.861-2.548-11.904-2.696-27.383-12.135-31.472 6.454-1.471 6.691 50.966 26.567 74.235 28.365 23.599 4.783 51.209-2.571 68.01-20.623 3.822-4.107 14.588-21.154 15.355-25.331 1.612-8.775-2.12-14.421-12.978-11.329-7.67 4.096-20.634 14.704-26.891 16.229Z" fill="#000"/>
`,
  goatee2: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M237.595 65.88c2.74 2.81 5.37 5.82 7.85 8.93.69 4.94.85 9.94.22 15.1-.92 7.48-2.96 14.789-5.72 21.809-1.63-.23-3.24-.69-4.81-1.41-4.98-2.29-7.76-6.9-11.13-10.97-6.71-8.09-18.95-12.87-27.51-4.48-3.72 3.65-6.1 8.7-9.42 12.71-3.65 4.41-7.75 8.6-12.03 12.4-.53.48-1.08 1-1.65 1.51a363.17 363.17 0 0 1-7.01-8.24c-6.81-8.28-12.69-17.45-15.78-27.79-.98-3.28-1.59-6.7-1.83-10.15 3.03-3.76 6.49-7.18 10.42-10.01 11.85-8.55 25.5-9.94 39.7-10.68 14.69-.76 27.92.24 38.7 11.27Zm35.84 39.669c-.57-5.72-1.45-11.67-2.75-17.61-4.75-22.04-15.04-44.01-35.67-54.08-9.76-4.77-20.85-6.45-31.37-4.15-18.46-6.91-38.96.14-53.49 12.78-17.14 14.91-25.05 38.31-27.71 60.23-1.85 15.25-2.547 35.625 1.78 46.69 4.327 11.065 31.826 40.654 71.08 40.86 55.91.293 69.5-37.41 71.15-40.71 6.89-13.72 8.49-28.87 6.98-44.01Z" fill="#000"/>
`,
  moustache1: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M229.945 34c11.714.83 22.794 8.099 32.871 13.717 9.698 5.794 16.876 14.378 22.61 23.95l.372.625c.336.498-.264 1.06-.756.87l-.077-.037c-9.517-4.775-19.559-8.645-28.903-13.854-9.124-5.641-20.328-7.57-29.521-12.7-5.254-3.895-3.677-12.27 3.404-12.571Zm-30.469 5.683c.427 2.672-.652 6.913-4.16 8.152-6.163 2.174-11.776 3.346-17.966 5.042l-8.025 2.248c-15.415 4.342-31.061 9.003-44.708 15.843l-.428-.188c-9.913-6.202 44.851-32.076 63.76-36.198 3.474-.758 10.882 1.07 11.527 5.101Z" fill="#000"/>
`,
  moustache2: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M279.528 190.863c2.019 1.915 6.402 6.13 10.601 7.983h3.927c.843-.158 1.671-.399 2.493-.671 1.069-2.623 1.275-5.679.75-8.757-2.968-17.046-5.619-34.307-4.206-51.656 1.331-16.357 6.039-32.634 4.768-49.147-1.773-38.967-39.4-65.95-72.341-58.06-4.253.376-8.412 1.573-12.116 3.701C162.018 12.7 98.507 49.122 110.469 108.704c2.293 16.11 5.991 31.389 4.855 47.808-.544 7.858-1.795 15.63-3.263 23.362-1.102 5.802-4.019 12.956-1.339 18.683 10.766 6.799 21.99-7.331 29.181-19.458 3.764-10.192 6.891-20.627 10.417-30.898 6.362-18.461 7.836-28.657 28.831-33.691 9.068-3.093 17.162-7.653 24.103-13.665 5.335-2.555 8.376-7.673 10.194-12.848.906 2.548-.347 5.641-.574 8.286 15.227 20.182 34.07 16.361 40.849 30.395 5.187 13.211 8.102 27.295 12.071 40.965.543 1.871 10.59 20.238 13.734 23.22" fill="#000"/>
`,
  moustache3: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M350.983 2c-2.12-3.19-8.13-1.25-6.58 2.77 16.823 38.173 9.04 67.863-38.241 62.67-28.504-1.851-56.186-27.056-84.813-14.514-7.381 5.929-12.24 6.664-20.039.248-30.946-13.541-65.986 10.597-97.077 13.857C55.588 71.814 29.131 55.54 53.704 5.64c1.54-3.39-2.93-7.86-5.67-4.38-33.932 39.483-35.636 92.496 18.981 112.95 40.085 13.348 116.744 24.393 144.258-15.85 17.562 29.06 55.097 30.799 85.271 25.599C369.4 117.235 391.724 60.627 350.983 2" fill="#000"/>
`,
  moustache4: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M305.269 13.005c-3.314-4.45-9.271-10.288-15.297-9.974-.771.04-1.06.875-.597 1.44 1.971 2.407 4.664 4.119 6.639 6.576 2.337 2.908 4.024 6.415 5.121 9.962 1.594 5.153 2.034 10.985.613 16.225-2.504 9.236-10.421 16.006-19.059 19.463-8.55 3.422-18.838 4.59-26.924-.423-11.935-7.402-22.058-18.072-37.059-18.283-3.509-.05-5.982 1.558-7.455 3.852-1.48-2.212-3.922-3.777-7.343-3.816-16.817-.19-29.369 11.388-43.484 18.605-9.539 4.878-21.882 3.364-31.723.14-9.283-3.038-19.36-9.141-22.862-18.778-1.933-5.322-1.5-11.536.485-16.782 1.305-3.45 3.32-6.783 5.813-9.494 2.585-2.812 5.983-4.58 8.631-7.246.541-.545.114-1.392-.597-1.441-11.246-.763-21.401 12.665-23.524 22.407-2.091 9.594 1.027 19.163 7.338 26.484 12.833 14.884 36.595 19.793 55.089 15.419 14.969-3.54 29.186-11.691 44.834-10.521 3.43.257 5.892-1.173 7.378-3.341 1.488 2.23 3.966 3.69 7.42 3.356 14.584-1.413 27.601 8.915 41.757 11.437 11.271 2.007 23.446-.7 33.104-6.772 10.095-6.347 17.201-16.528 17.669-28.666.269-6.983-1.78-14.208-5.967-19.83" fill="#000"/>
`,
  moustache5: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M294.392 32.722c-1.333-3.982-8.192-3.635-7.77 1.053.483 5.355-1.35 11.327-6.48 13.927-5.372 2.721-11.416.275-14.693-4.395-2.849-4.06-4.814-8.474-8.399-12.015-3.333-3.292-7.387-5.83-11.822-7.338-3.454-1.172-7.037-1.485-10.512-1.1-8.66-1.956-18.694 2.495-24.091 9.246-.348.435-.671.883-.983 1.334a44.607 44.607 0 0 0-1.688-2.16c-1.529-1.832-3.427-2.226-5.141-1.727-9.761-7.259-23.44-8.22-34.526-1.67-8.882 5.25-16.229 12.985-27.151 13.588-8.651.476-18.074-4.46-18.684-13.967-.32-4.963-7.084-9.102-10.879-4.506-7.978 9.665-9.574 22.501-5.16 34.186 4.658 12.33 14.148 21.014 26.164 26.124 12.976 5.516 28.182 7.432 42.219 6.995 13.994-.435 26.718-5.816 35.153-17.263a37.884 37.884 0 0 0 2.668-4.159c8.19 10.428 21.028 14.811 34.104 15.126 13.68.328 29.852-2.073 39.524-12.697 9.321-10.24 12.538-25.468 8.147-38.582" fill="#000"/>
`,
  moustache6: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M258.53 37.24c-9.051-4.232-18.779-6.75-28.773-7.644-4.322-.387-12.812-1.608-17.409 1.212-2.15 1.32-3.967 3.163-5.408 5.416-.562-.777-1.302-1.44-1.77-2.28-2.517-4.522-17.965-4.616-22.629-4.232-11.06.91-21.825 3.507-31.963 7.874-18.201 7.84-33.491 24.129-28.683 44.808.68 2.93 3.961 4.069 6.664 3.562l54.658-10.246c4.229-.791 8.459-1.584 12.688-2.377 3.825-.718 8.513-.945 12.143-2.594 1.46.623 3.086 1.02 4.822 1.364 21.921 4.354 43.87 8.578 65.805 12.867 2.63.514 6.08-.82 6.552-3.733 3.148-19.444-9.235-35.832-26.697-43.996" fill="#000"/>
`,
  moustache7: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M258.635 38.664c-6.594-1.239-13.411-.89-19.961-2.333-6.39-1.408-11.465-5.595-17.639-7.544-5.433-1.716-11.801-.554-16.032 2.772-3.931-1.817-8.398-2.21-12.87-1.61-6.782.91-13.11 3.78-19.151 6.884-.7.36-1.401.703-2.101 1.05-11.162-.279-22.605-.257-33.558 2.135-9.699 2.12-18.868 7.051-24.652 15.29-6.473 9.22-7.642 20.962-8.64 31.858-.635 6.916 8.971 8.32 12.226 3.311 3.375-5.192 6.888-10.396 11.385-14.698 5.108-4.887 11.321-6.81 18.284-7.257 15.368-.984 30.838-.159 46.221-.84 8.917-.395 18.845-3.824 22.439-11.576 3.836 6.011 12.528 9.585 19.677 10.127 7.555.574 15.226-.799 22.706.775 7.146 1.504 15.64 6.826 14.051 15.338-.934 5 5.387 7.948 8.296 3.498 11.879-18.183.174-43.259-20.681-47.18" fill="#000"/>
`,
  moustache8: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M741.333 8.494c-15.998 14.593-5.72 51.151.518 41.268.93-9.152 3.788-26.688 13.064-30.236 68.23-2.91 54.14 165.795-72.958 145.031-80.98-5.464-166.511-122.74-242.663-51.372-82.74-67.397-176.167 33.643-261.37 47.481C108.649 183.069 5.125 141.931 23.768 56.53c4.657-25.06 39.313-53.727 60.538-28.295 6.27 6.041-1.694 28.166 4.898 23.592 10.262-11.337 7.588-29.442-1.896-40.733C71.599-7.604 43.599.576 27.31 13.781c-73.483 72.291 15.023 181.414 103.601 174.205 97.066 11.872 229.068-123.024 295.789-57.492 6.804 6.682 19.589 6.685 25.504.005 56.724-64.054 166.199 66.858 245.276 57.509 84.101 7.66 151.409-93.845 102.868-165.614-12.094-18.246-41.158-31.998-59.016-13.9Z" fill="#000"/>
`,
  moustache9: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path d="M245.365 32.823c-14.026-2.366-28.598 1.13-42.122 4.855-21.483-14.105-49.32.132-64.706 17.755-5.266 4.337-16.324 10.097-10.498 18.37-2.208 5.85-2.799 8.602 1.772 1.764 25.868 2.978 53.623-2.648 79.224-7.954 8.717 2.931 16.415 9.785 25.998 7.437 9.06 1.927 18.868 3.725 27.047-2.087 6.228-.253 20.084 10.931 19.862-2.075-1.927-12.466-26.645-33.21-36.577-38.065Z" fill="${colors.hair.value}"/>
    <path d="M255.884 72.845c-15.228 1.685-30.671-.79-43.422-9.633-1.331-.923-2.643-.913-3.713-.372-1.301-.144-2.632.375-3.404 1.861-3.202 6.167-13.815 4.793-19.649 4.92-19.083.367-38.832-.686-57.197 5.083 17.564-34.334 41.855-49.156 79.442-35.677-3.394 2.733 13.542-3.665 15.028-3.787 26.006-6.516 47.461 15.296 57.942 36.91-7.929-1.887-16.814-.214-25.027.695Zm36.324 5.843c-11.467-25.829-34.077-54.229-65.614-49.765-6.475.953-13.286 5.376-19.805 4.578-18.875-6.97-34.455-10.513-53.358.76-8.02.598-53.152 56.475-31.705 51.913 26.326-15.118 72.1-.878 88.448-14.4 32.095 21.07 58.191-1.818 76.279 11.352 3.145 2.885 7.556-.708 5.755-4.438Z" fill="#000"/>
  </g>
`,
};
