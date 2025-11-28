## Problem Statement

Build a React Accordion component that allows users to expand and collapse sections of content. When a section is clicked, it should toggle its visibility. If a new section is clicked, it should expand while the others collapse (i.e., only one section is open at a time).

## Requirements

1. Display a list of accordion items, each with a title and content.
2. Clicking on a title expands its content and collapses any previously opened item.
3. If an already open item is clicked, it should collapse.
4. The component should accept an array of items as props. Each item contains:
title: The heading of the accordion item.
content: The details inside the accordion item.
5. The component should handle edge cases such as an empty list or invalid input by displaying a message "No items available".

## Constraints & Edge Cases

- The items prop should be an array of objects { title: string, content: string }.
- If items is empty, display a message like "No items available."
- Optimize performance by using React's usestate and conditional rendering.