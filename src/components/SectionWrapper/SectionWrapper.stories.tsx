import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionWrapper } from "./SectionWrapper";

const meta = {
  title: "Components/SectionWrapper",
  component: SectionWrapper,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Section ID for anchor navigation",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof SectionWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "example-section",
    children: (
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Section Title</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This is example content within a section wrapper. The section wrapper provides consistent
          spacing and layout across all page sections.
        </p>
      </div>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    id: "with-background",
    className: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
    children: (
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Section with Background
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          This section has a gradient background applied through the className prop.
        </p>
      </div>
    ),
  },
};

export const WithCards: Story = {
  args: {
    id: "with-cards",
    children: (
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Section with Cards
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Card {num}</h3>
              <p className="text-gray-600 dark:text-gray-400">Card content goes here</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};
