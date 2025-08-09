// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "public/",
      "*.png",
      "*.jpg",
      "*.jpeg",
      "*.gif",
      "*.svg",
      "*.webp",
      "*.ico",
      "lib/generated/",
      "lib/__generated__/",
      "prisma/migrations/",
      "prisma/generated/",
      ".vercel/",
      "coverage/",
      "__snapshots__/",
      "*.test.ts",
      "*.spec.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "*.d.ts",
      ".env",
      ".env.local",
      ".env.production",
      ".env.development",
      "C:/Users/ASUS/Application Data/",
      "C:/Users/ASUS/Cookies/",
    ],
  },

  // Your existing config continues here...
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["app/**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];

