import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkExperience } from "./WorkExperience";

const meta = {
  title: "Components/WorkExperience",
  component: WorkExperience,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Displays work experience with scroll-triggered Framer Motion animations. Cards fade in and slide up with staggered timing. Achievement lists animate sequentially. Respects prefers-reduced-motion for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WorkExperience>;

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
