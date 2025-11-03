# Tailwind CSS Setup Guide

## ✅ What Was Added

### 1. **Dependencies**
- `tailwindcss` - CSS utility framework
- `postcss` - CSS processor (already installed, but configured for Tailwind)
- `autoprefixer` - Vendor prefixing for CSS

### 2. **Configuration Files**

#### `tailwind.config.js`
```javascript
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

#### `postcss.config.cjs` (Updated)
Now includes Tailwind CSS plugin alongside existing PostCSS plugins:
```javascript
plugins: {
	tailwindcss: {},
	autoprefixer: {},
	"postcss-preset-mantine": {},
	"postcss-simple-vars": { ... }
}
```

### 3. **CSS Files**

#### `src/index.css` (New)
Contains Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `src/main.tsx` (Updated)
Now imports the CSS file:
```tsx
import "./index.css";
```

### 4. **Components Updated with Tailwind Classes**

- **RootLayout**: Navigation bar with Tailwind styling
- **Home Page**: Content with Tailwind utility classes
- **About Page**: Information section with Tailwind styling
- **NotFound Page**: 404 page with Tailwind styling

### 5. **Configuration**

#### `vite.config.ts` (Updated)
Removed the TanStack Router plugin (it was causing build errors) and kept only React plugin.

#### `.stylelintignore` (New)
Prevents linting errors for Tailwind's CSS directives.

## 🎨 Tailwind Classes Used

- `min-h-screen` - Minimum viewport height
- `flex`, `flex-col` - Flexbox layout
- `bg-blue-600` - Background colors
- `text-white`, `text-gray-600` - Text colors
- `py-4`, `py-8` - Padding
- `mb-4`, `mb-6` - Margin bottom
- `text-2xl`, `text-3xl`, `text-lg` - Font sizes
- `font-bold` - Font weight
- `hover:bg-blue-700` - Hover states
- `shadow-md` - Box shadows
- And many more utility classes available!

## 🚀 How to Use Tailwind CSS

Apply utility classes directly to your HTML elements:

```tsx
<div className="min-h-screen flex flex-col bg-gray-50">
	<header className="bg-blue-600 text-white py-4 shadow-md">
		<h1 className="text-2xl font-bold">MyApp</h1>
	</header>
	
	<main className="flex-1 py-8">
		<h2 className="text-3xl font-bold mb-4">Welcome</h2>
		<p className="text-gray-600">Content here</p>
	</main>
</div>
```

## 📚 Common Tailwind Utilities

- **Spacing**: `p-4`, `m-2`, `py-8`, `px-4`
- **Text**: `text-lg`, `font-bold`, `text-center`, `text-gray-600`
- **Colors**: `bg-blue-600`, `text-red-500`, `border-green-400`
- **Layout**: `flex`, `grid`, `flex-col`, `justify-center`, `items-center`
- **Sizing**: `w-full`, `h-screen`, `max-w-md`, `min-h-screen`
- **Borders**: `border`, `border-2`, `rounded-lg`, `rounded-full`
- **Shadows**: `shadow-md`, `shadow-lg`, `shadow-xl`
- **Responsive**: `md:text-lg`, `lg:flex-row`, `sm:w-1/2`

## 🔗 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind UI Components](https://tailwindui.com)

---

**Note**: You can now use both Mantine UI components AND Tailwind CSS classes together in your project!
