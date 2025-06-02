/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,ts}', // Asegúrate de que esto apunte a tus archivos donde usas clases de Tailwind
		'./node_modules/flowbite/**/*.js', // Añade esta línea para que Flowbite funcione
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'), // ¡Aquí es donde va!
	],
}
