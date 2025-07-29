# LookaGem - Figma-like Design Tool

A modern, extensible design tool built with React, TypeScript, and Canvas API for high-performance drawing and animations.

## Features

### Core Architecture
- **Gems**: Pages that contain multiple frames
- **Frames**: Hierarchical containers that can hold widgets
- **Widgets**: Miniature applications with their own systems and behavior
- **Extensible Widget System**: Easy to add new widget types

### Drawing Widget
- **Canvas-based Drawing**: High-performance drawing using HTML5 Canvas
- **Multiple Tools**: Brush and Eraser tools
- **Tool Controls**: Size (1-100) and Pressure (placeholder for future implementation)
- **Real-time Drawing**: Optimized for smooth drawing experience
- **Stroke Storage**: Persistent stroke data with undo/redo capability

### Performance Optimizations
- Canvas for heavily animated elements (drawing)
- React for less frequently animated UI elements
- Pointer events for better touch/stylus support
- Optimized redraw cycles
- High DPI display support

## Project Structure

```
src/
├── components/
│   ├── widgets/
│   │   └── DrawingWidget/
│   │       ├── index.tsx          # Main drawing widget component
│   │       ├── DrawingCanvas.tsx  # Canvas-based drawing implementation
│   │       └── DrawingTools.tsx   # Tool selection and controls
│   ├── Canvas.tsx                 # Main canvas area with viewport management
│   ├── Frame.tsx                  # Frame component with drag/drop
│   └── Sidebar.tsx               # Gem management sidebar
├── store/
│   └── index.ts                  # Zustand store for app state
├── types/
│   └── index.ts                  # TypeScript type definitions
├── utils/
│   └── index.ts                  # Utility functions
├── App.tsx                       # Main app component
└── main.tsx                      # Application entry point
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Basic Usage

1. **Create a Gem**: Click "+ New" in the sidebar to create your first gem (page)
2. **Add Frames**: Double-click on the canvas to create frames
3. **Add Widgets**: Click on empty frames to add widgets
4. **Drawing**: Select the drawing widget and use the brush/eraser tools
5. **Tool Controls**: Adjust brush/eraser size using the controls panel

## Architecture Details

### Widget System
The widget system is designed to be extensible. Each widget:
- Extends the `BaseWidget` interface
- Has its own data structure
- Implements its own rendering logic
- Can have custom tool panels and controls

### Frame Hierarchy
Frames support parent-child relationships:
- Root frames are rendered directly on the canvas
- Child frames are rendered relative to their parent
- Transforms cascade through the hierarchy
- Drag and drop operations respect hierarchy

### Performance Considerations
- **Canvas Rendering**: All drawing operations use Canvas API for optimal performance
- **Event Handling**: Pointer events are used for better multi-touch support
- **State Management**: Zustand provides efficient state updates
- **Memory Management**: Strokes are stored efficiently with proper cleanup

## Adding New Widget Types

1. Define the widget type in `src/types/index.ts`:
```typescript
export enum WidgetType {
  DRAWING = 'drawing',
  YOUR_WIDGET = 'your_widget', // Add your widget type
}

export interface YourWidget extends BaseWidget {
  type: WidgetType.YOUR_WIDGET;
  data: YourWidgetData;
}
```

2. Create the widget component in `src/components/widgets/YourWidget/`:
```typescript
export const YourWidget: React.FC<YourWidgetProps> = ({ widgetId, frameId }) => {
  // Your widget implementation
};
```

3. Add the widget to the Frame component rendering logic
4. Add creation logic to the store

## Technology Stack

- **React 18**: UI framework
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first CSS framework
- **React DnD**: Drag and drop functionality
- **Canvas API**: High-performance drawing and animations

## Future Enhancements

- [ ] Pressure sensitivity implementation
- [ ] More drawing tools (pencil, marker, shapes)
- [ ] Text widget
- [ ] Image widget
- [ ] Shape widget
- [ ] Layers panel
- [ ] Undo/redo system
- [ ] Export functionality
- [ ] Real-time collaboration
- [ ] Plugin system for custom widgets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your widget or feature
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this in your own projects!
