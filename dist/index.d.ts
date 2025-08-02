import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare function AccountPage(): JSX_2.Element;

declare interface AuthContextType {
    userData: UserData;
    isAuthenticated: boolean;
    sendVerificationCode: (phoneNumber: string) => Promise<void>;
    verifyCode: (code: string) => Promise<void>;
    logout: () => void;
}

export declare const AuthProvider: default_2.FC<AuthProviderProps>;

declare interface AuthProviderProps {
    children: ReactNode;
}

export declare function EntrancePage(): JSX_2.Element;

export declare function HomePage(): JSX_2.Element;

export declare function LookagemApp(): JSX_2.Element;

export declare const LookagemWeb: default_2.FC<LookagemWebProps>;

declare interface LookagemWebProps {
    basename?: string;
    className?: string;
}

export declare function mountLookagemWeb(element: HTMLElement, props: default_2.ComponentProps<typeof LookagemWeb>): void;

export declare function ProtectedRoute({ children }: ProtectedRouteProps): JSX_2.Element;

declare interface ProtectedRouteProps {
    children: React.ReactNode;
}

declare type Theme = "light" | "dark";

declare interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export declare const ThemeProvider: default_2.FC<ThemeProviderProps>;

declare interface ThemeProviderProps {
    children: default_2.ReactNode;
}

export declare function ThemeToggle(): JSX_2.Element;

export declare const useAuth: () => AuthContextType;

declare interface UserData {
    phoneNumber: string;
    isVerified: boolean;
}

export declare const useTheme: () => ThemeContextType;

export declare function VerificationPage(): JSX_2.Element;

export { }
