// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const preset =
  process.env["NITRO_PRESET"] ?? (process.env["AWS_APP_ID"] ? "aws-amplify" : "node-server");

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: { preset },
  vite: {
    server: {
      // Dev only. In production these responses come from nitro, not vite —
      // set headers on the platform (Amplify custom headers / Railway proxy) if needed.
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      },
    },
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: true,
    },
    environments: {
      // Client bundle only — chunking the SSR/server build would fight nitro.
      client: {
        build: {
          rollupOptions: {
            output: {
              manualChunks(id: string): string | undefined {
                if (!id.includes("node_modules")) return undefined;
                if (/\/react\/|\/react-dom\//.test(id)) return "react-vendor";
                if (id.includes("@tanstack")) return "tanstack-vendor";
                if (id.includes("@radix-ui")) return "radix-vendor";
                if (id.includes("recharts") || id.includes("d3-")) return "recharts-vendor";
                return undefined;
              },
            },
          },
        },
      },
    },
  },
});
