import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/presentations/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-actions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
