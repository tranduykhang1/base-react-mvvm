# React + TypeScript + Vite + MVVM

## ✨ Get Started

### Installation

To install the project dependencies using PNPM, run:

```
pnpm i
```

### Running Locally

**_First time (copy the env file), run_**: `cp .env.example .env`

To start the development server, run:

```
pnpm dev
```

### Build for Production

To build the project for production, use:

```
pnpm build
```

### Component Testing

To run Storybook for component testing, execute:

```
pnpm storybook
```

## 🎨 Structure and Guidelines

### 💄 assets

-   **Purpose**: Store all images and static assets.
-   **Guideline**: Place image files and other static assets in this directory.

### 🔧 config

-   **Purpose**: Store configuration files.
-   **Guideline**: Include environment settings, theme configurations, authentication settings, etc., in this directory.

### 🌐 core

-   **client**: Contains Axios configuration.
-   **models**: Defines models and their mappings.
-   **repositories**: Defines abstract classes for repositories, acting as contracts between presentation and infrastructure layers.
-   **repositoryImpl**: Implements the repository classes.
-   **useCases**: Defines the module's behavior **_(e.g., UserUseCase -> getAll, getById)_**.

### ✏️ enum

-   **Purpose**: Store global constants.
-   **Guideline**: Place enumerations and global constants in this directory.

### 📄 presentations

-   **components**: Contains shared components and their stories.
-   **hooks**: Contains shared custom hooks.
-   **layout**: Defines the layout of the application **_(e.g., useAuth, useLocalStorage)_**.
-   **pages**: Contains application pages.
-   **routers**: Defines application routes, utilizing dynamic import to split chunks at build time.
-   **viewModels**: Defines the viewModel layer as a hook to manage business logic and provide data for the view layer.

### 🚚 providers

-   **Purpose**: Store global providers.
-   **Guideline**: Include all global providers in this directory.

### 🔒️ schemas

-   **Purpose**: Store schema validations.
-   **Guideline**: Include schema validations for all input fields in this directory.

### 📝 types

-   **Purpose**: Store types and interfaces.
-   **Guideline**: Include types and interfaces such as APIRequest, APIResponse, etc., in this directory.

### 🔨 utils

-   **Purpose**: Store utility functions.
-   **Guideline**: Place all utility functions in this directory.ude the utility functions in the utils folder **_(e.g: helpers, conversion factors)_**

<br>
<hr>

![Watchers](https://img.shields.io/github/watchers/tranduykhang1/base-react-mvvm?style=flat-square?svg=true)
![Stars](https://img.shields.io/github/stars/tranduykhang1/base-react-mvvm?style=flat-square?svg=true)
![Forks](https://badgen.net/github/forks/tranduykhang1/base-react-mvvm)
![Code Size](https://img.shields.io/github/languages/code-size/tranduykhang1/base-react-mvvm?style=flat-square?svg=true)
![Downloads](https://img.shields.io/npm/dw/@tranduykhang1/base-react-mvvm.png?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/@tranduykhang1/base-react-mvvm.png?style=flat-square)
![Downloads](https://img.shields.io/npm/dy/@tranduykhang1/base-react-mvvm.png?style=flat-square)
