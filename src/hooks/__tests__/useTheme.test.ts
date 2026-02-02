import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTheme } from "../useTheme";

function mockMatchMedia(prefersDark = false) {
  Object.defineProperty(globalThis.window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark && query === "(prefers-color-scheme: dark)",
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
}

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    vi.clearAllMocks();
  });

  it("should initialize with system preference when no stored theme", () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("should initialize with stored theme when available", () => {
    localStorage.setItem("portfolio-theme", "light");
    mockMatchMedia(false);

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
  });

  it("should toggle theme from light to dark", () => {
    localStorage.setItem("portfolio-theme", "light");
    mockMatchMedia(false);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("should toggle theme from dark to light", () => {
    localStorage.setItem("portfolio-theme", "dark");
    mockMatchMedia(true);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("should apply dark class to document element when theme is dark", () => {
    localStorage.setItem("portfolio-theme", "dark");
    mockMatchMedia(true);

    renderHook(() => useTheme());

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("should remove dark class from document element when theme is light", () => {
    localStorage.setItem("portfolio-theme", "light");
    mockMatchMedia(false);

    renderHook(() => useTheme());

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("should persist theme to localStorage", () => {
    mockMatchMedia(false);

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme("dark");
    });

    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });
});
