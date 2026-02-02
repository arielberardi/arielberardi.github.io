import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useActiveSection } from "../useActiveSection";

interface MockIntersectionObserverOptions {
  withCallback?: boolean;
  observe?: ReturnType<typeof vi.fn>;
  unobserve?: ReturnType<typeof vi.fn>;
}

function mockIntersectionObserver(options: MockIntersectionObserverOptions = {}) {
  const { withCallback = false, observe = vi.fn(), unobserve = vi.fn() } = options;

  let savedCallback: IntersectionObserverCallback | null = null;

  globalThis.IntersectionObserver = class MockIntersectionObserver {
    observe = observe;
    unobserve = unobserve;
    disconnect = vi.fn();
    root = null;
    rootMargin = "";
    thresholds = [];
    takeRecords = vi.fn();

    constructor(callback: IntersectionObserverCallback) {
      if (withCallback) {
        savedCallback = callback;
      }
    }
  } as unknown as typeof IntersectionObserver;

  return { getCallback: () => savedCallback, observe, unobserve };
}

function createIntersectionEntry(
  target: Element,
  isIntersecting = true,
): IntersectionObserverEntry {
  return {
    isIntersecting,
    target,
    boundingClientRect: target.getBoundingClientRect(),
    intersectionRect: target.getBoundingClientRect(),
    rootBounds: null,
    intersectionRatio: isIntersecting ? 1 : 0,
    time: Date.now(),
  };
}

describe("useActiveSection", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about"></div>
      <div id="experience"></div>
      <div id="skills"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    `;

    globalThis.window.history.replaceState(null, "", "/");
  });

  it("should initialize with empty active section", () => {
    mockIntersectionObserver();

    const { result } = renderHook(() =>
      useActiveSection(["about", "experience", "skills", "projects", "contact"]),
    );

    expect(result.current).toBe("");
  });

  it("should observe all section elements", () => {
    const { observe } = mockIntersectionObserver();

    renderHook(() => useActiveSection(["about", "experience", "skills", "projects", "contact"]));

    expect(observe).toHaveBeenCalledTimes(5);
  });

  it("should update active section when section intersects", async () => {
    const { getCallback } = mockIntersectionObserver({ withCallback: true });

    const { result } = renderHook(() =>
      useActiveSection(["about", "experience", "skills", "projects", "contact"]),
    );

    const experienceElement = document.getElementById("experience");
    if (!experienceElement) throw new Error("Element not found");

    const mockEntries: IntersectionObserverEntry[] = [
      createIntersectionEntry(experienceElement, true),
    ];

    const callback = getCallback();
    if (callback) {
      act(() => {
        callback(mockEntries, {} as IntersectionObserver);
      });
    }

    await waitFor(() => {
      expect(result.current).toBe("experience");
    });
  });

  it("should unobserve sections on cleanup", () => {
    const { unobserve } = mockIntersectionObserver();

    const { unmount } = renderHook(() =>
      useActiveSection(["about", "experience", "skills", "projects", "contact"]),
    );

    unmount();

    expect(unobserve).toHaveBeenCalledTimes(5);
  });
});
