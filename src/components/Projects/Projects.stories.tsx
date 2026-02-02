import type { Meta, StoryObj } from "@storybook/react-vite";
import { Projects } from "./Projects";

const meta = {
  title: "Components/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Displays featured projects in a responsive grid. Each card shows an optional project image (16:9 aspect ratio), title, description, tech stack badges, and action buttons for GitHub and live demo links. Cards animate with stagger effect on scroll and have hover interactions. Respects prefers-reduced-motion for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
