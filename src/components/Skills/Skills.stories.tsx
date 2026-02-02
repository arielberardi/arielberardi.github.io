import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skills } from "./Skills";

const meta = {
  title: "Components/Skills",
  component: Skills,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Displays skills in a 3-column grid layout with all categories visible simultaneously. Uses 5-level proficiency system (1-5) with color-coded progress bars. Includes optional certificates section below skills (when CERTIFICATES data is populated). Columns animate in left-to-right on scroll. Responsive: 1 column on mobile, 2 on tablet, 3 on desktop. Respects prefers-reduced-motion for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skills>;

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
