# LookaGem Routes Documentation

## Application Structure

The LookaGem application now uses React Router for navigation and has been refactored into a clean, modular architecture.

### Routes

- **`/`** - Entrance Page (Phone number entry)
- **`/verify`** - Verification Page (SMS code verification)
- **`/home`** - Home Page (Protected route - requires authentication)
- **`/*`** - Catch-all route that redirects to entrance page

### Authentication Flow

1. **Entrance (`/`)**: User enters phone number
2. **Verification (`/verify`)**: User enters SMS verification code
3. **Home (`/home`)**: Protected dashboard (only accessible when authenticated)

### Context Providers

#### AuthContext
- Manages user authentication state
- Handles phone verification workflow
- Provides authentication methods:
  - `sendVerificationCode(phoneNumber: string)`
  - `verifyCode(code: string)`
  - `logout()`

#### ThemeContext
- Manages light/dark mode toggle
- Persists theme preference in localStorage
- Provides theme switching functionality

### Components

#### Core Pages
- **EntrancePage**: Phone number input form
- **VerificationPage**: SMS code verification form
- **HomePage**: Main dashboard after authentication

#### Layout Components
- **ThemeToggle**: Fixed position theme switcher
- **ProtectedRoute**: Route guard for authenticated content

### Navigation Logic

- Users are automatically redirected based on authentication state
- ProtectedRoute component guards `/home` route
- Navigation uses React Router's `useNavigate` hook
- Back navigation preserves the authentication flow

### State Management

- Authentication state is managed globally via AuthContext
- Theme state is managed globally via ThemeContext
- No prop drilling - components access context directly
- Clean separation of concerns between authentication and UI state

This architecture provides a scalable foundation for adding more routes and features while maintaining clean separation of concerns.
