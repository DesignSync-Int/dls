# Design System Library (DLS)

A comprehensive React component library built with TypeScript, Material-UI, and modern development practices.

## Features

- 🎨 **26 Production-Ready Components** following atomic design principles
- 🔧 **TypeScript First** with comprehensive type definitions
- 📖 **Storybook Documentation** for interactive component exploration
- ✅ **99 Comprehensive Tests** with 100% component coverage
- 🎯 **Accessibility** built-in with Material-UI foundation
- 🚀 **Modern Build** with Vite and optimized bundle size
- 🎨 **Design Tokens** for consistent theming

## Installation

```bash
npm install @your-org/design-system
# or
yarn add @your-org/design-system
```

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom @emotion/react @emotion/styled @mui/material
```

## Quick Start

```tsx
import { Button, Card, Text } from '@your-org/design-system';

function App() {
  return (
    <Card>
      <Text variant="h1">Welcome to DLS</Text>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click me!
      </Button>
    </Card>
  );
}
```

## Components

### Atoms

- `Avatar` - User profile pictures with fallbacks
- `Badge` - Notification indicators and status badges
- `Button` - Primary, secondary, and icon buttons
- `Card` - Content containers with elevation
- `Checkbox` - Form checkboxes with validation
- `Divider` - Visual content separators
- `IconButton` - Compact icon-based actions
- `Input` - Text input with validation states
- `Spinner` - Loading indicators
- `Switch` - Toggle controls
- `Tag` - Content categorization labels
- `Text` - Typography with semantic variants
- `Tooltip` - Contextual help and information

### Molecules

- `AlertBox` - Status messages and notifications
- `Breadcrumb` - Navigation path indicators
- `FormField` - Input fields with labels and validation
- `InputWithLabel` - Labeled input combinations
- `MenuList` - Dropdown and navigation menus
- `Pagination` - Page navigation controls
- `SearchBar` - Search input with filters
- `UserInfo` - User profile display

### Organisms

- `CardGrid` - Responsive card layouts
- `Form` - Complete form structures
- `Header` - Page and section headers
- `Modal` - Dialog and overlay components
- `Table` - Data tables with sorting and filtering

## Design Tokens

Import design tokens for consistent theming:

```tsx
import { colors, typography, spacing } from '@your-org/design-system';

const customTheme = {
  primary: colors.primary,
  heading: typography.heading,
  margin: spacing.medium,
};
```

## TypeScript Support

Full TypeScript support with exported prop types:

```tsx
import { ButtonProps, CardProps } from '@your-org/design-system';

const MyButton: React.FC<ButtonProps> = (props) => {
  // Your component logic
};
```

## Storybook Documentation

View interactive component documentation at: [Your Storybook URL]

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm run test

# Build library
npm run build:lib
```

### Project Structure

```
src/
├── atomic/
│   ├── atoms/          # Basic UI elements
│   ├── molecules/      # Component combinations
│   └── organisms/      # Complex components
├── tokens/             # Design tokens
├── stories/            # Storybook documentation
└── index.ts           # Main export file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Run tests (`npm run test`)
4. Commit your changes (`git commit -m 'Add amazing component'`)
5. Push to the branch (`git push origin feature/amazing-component`)
6. Open a Pull Request

## Quality Assurance

- ✅ ESLint + Prettier for code quality
- ✅ Husky pre-commit hooks
- ✅ TypeScript strict mode
- ✅ Comprehensive test coverage
- ✅ Automated accessibility testing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.
