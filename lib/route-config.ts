// lib/route-config.ts
export interface RouteConfig {
  path: string;
  label: string;
  enabled: boolean;
}

// Simple feature flags - just check if the flag is 'true'
function isEnabled(flag: string): boolean {
  return process.env[flag] === 'true';
}

// Define all your routes with feature flags
export const routes: RouteConfig[] = [
  {
    path: '/openai',
    label: 'OpenAI',
    enabled: process.env.NEXT_PUBLIC_ENABLE_OPENAI === 'true'
  },
  {
    path: '/gemini',
    label: 'Gemini',
    enabled: process.env.NEXT_PUBLIC_ENABLE_GEMINI === 'true'
  },
  {
    path: '/aws',
    label: 'AWS Nova',
    enabled: process.env.NEXT_PUBLIC_ENABLE_AWS === 'true'
  }
];

// Helper to check if a path is enabled
export function isPathEnabled(path: string): boolean {
  // Check if path starts with any enabled route
  return routes.some(route => 
    path.startsWith(route.path) && route.enabled
  );
}