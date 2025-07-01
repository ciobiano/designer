# ScrollTrigger Animation Plan

This document outlines the plan to add a ScrollTrigger animation to the project, specifically to animate the transition between the HeroSection and the subsequent section on the index page.

## Objective

Implement a smooth animation using GSAP and ScrollTrigger that triggers as the user scrolls from the HeroSection into the next section.

## Detailed Plan

1.  **Create the `NextSection` Component:**
    *   Create a new file, e.g., `src/components/NextSection.tsx`, for the component that will appear after the `HeroSection`.
    *   Initially, this component can be a simple placeholder with some content and a distinct background color or height to make the transition visible.

2.  **Update `src/routes/index.tsx`:**
    *   Import the newly created `NextSection` component into `src/routes/index.tsx`.
    *   Modify the `App` component in `src/routes/index.tsx` to render both the `HeroSection` (currently imported as `Header`) and the `NextSection` component sequentially within the `<main>` tag.

3.  **Implement GSAP and ScrollTrigger Logic:**
    *   In `src/routes/index.tsx`, import the necessary GSAP and ScrollTrigger modules.
    *   Register the ScrollTrigger plugin with GSAP.
    *   Use a React effect hook (like `useLayoutEffect`) to create the ScrollTrigger animation. This hook is suitable for DOM manipulations that should happen before the browser paints.
    *   Define the ScrollTrigger instance:
        *   Set the `trigger` element to the `HeroSection` (or a container wrapping it).
        *   Define the `start` and `end` points for the trigger. For animating *from* the `HeroSection` *to* the next section, a common setup is to start the animation when the bottom of the `HeroSection` hits the top of the viewport, and end it when the bottom of the `HeroSection` leaves the viewport.
        *   Define the animation timeline or properties that will animate elements in either the `HeroSection` or the `NextSection` as the user scrolls. For example, you could fade out the `HeroSection` and fade in the `NextSection`.
    *   Include cleanup logic in the effect hook to destroy the ScrollTrigger instance when the component unmounts to prevent memory leaks.

4.  **Refine Animation (Implementation Phase):**
    *   Once the basic setup is working, we can refine the animation details (e.g., specific properties to animate, duration, easing, adding more complex timelines) in the code mode.

## Component Structure and Interaction

```mermaid
graph TD
    A[src/routes/index.tsx] --> B[HeroSection<br>(from src/components/Header.tsx)]
    A --> C[NextSection<br>(new component)]
    A --> D[GSAP/ScrollTrigger Logic]
    D --> B
    D --> C