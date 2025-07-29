# LookaGem Web Module

A React component library that provides the complete LookaGem web application as an embeddable module.

## Installation

```bash
npm install lookagem-web
```

## Usage

### Complete App Integration

```tsx
import React from 'react';
import { LookagemWeb } from 'lookagem-web';
import 'lookagem-web/styles';

function App() {
  return (
    <div>
      <h1>My Server App</h1>
      <LookagemWeb 
        basename="/lookagem" 
        className="lookagem-container"
      />
    </div>
  );
}
```

### Individual Components

```tsx
import React from 'react';
import { 
  HomePage, 
  AuthProvider, 
  ThemeProvider,
  useAuth 
} from 'lookagem-web';

function MyCustomApp() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </AuthProvider>
  );
}
```

### Available Exports

- `LookagemWeb` - Complete app with all providers
- `LookagemApp` - App component without Router/providers
- `HomePage`, `AccountPage`, `EntrancePage`, `VerificationPage` - Individual pages
- `AuthProvider`, `useAuth` - Authentication context
- `ThemeProvider`, `useTheme` - Theme context
- `ProtectedRoute`, `ThemeToggle` - Utility components

## Props

### LookagemWeb

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `basename` | `string` | `"/"` | Router basename for nested routing |
| `className` | `string` | `undefined` | CSS class for the container |

## Peer Dependencies

Make sure these are installed in your project:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.7.1"
}
```

## CSS Styles

The module includes a comprehensive design system. Import the styles:

```tsx
import 'lookagem-web/styles';
```

Or reference the CSS file directly in your HTML:

```html
<link rel="stylesheet" href="node_modules/lookagem-web/dist/style.css">
```
