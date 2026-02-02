import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar } from "./Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    activeSection: {
      control: "select",
      options: ["hero", "experience", "skills", "projects", "contact"],
      description: "Currently active section",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeSection: "hero",
  },
};

export const ExperienceActive: Story = {
  args: {
    activeSection: "experience",
  },
};

export const SkillsActive: Story = {
  args: {
    activeSection: "skills",
  },
};

export const ProjectsActive: Story = {
  args: {
    activeSection: "projects",
  },
};

export const ContactActive: Story = {
  args: {
    activeSection: "contact",
  },
};
