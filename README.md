
# react-use-config

`react-use-config` is a React Hook (`useConfigParam`) for dynamically retrieving configuration parameters with well-defined priorities.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Coverage](https://img.shields.io/codecov/c/github/Malnati/react-use-config)
![Version](https://img.shields.io/npm/v/react-use-config)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Downloads](https://img.shields.io/npm/dt/react-use-config)

---

## Features

The `useConfigParam` hook retrieves parameter values in the following priority order:

1. **Query Parameter**: Retrieved directly from the URL.
2. **Environment Variable**: Defined in the `.env` file (prefixed with `REACT_APP_`).
3. **Default Value**: A fallback provided by the user.

---

### Visual Overview

#### Streamlining React Configurations
![Streamlining React Configurations](https://raw.githubusercontent.com/Malnati/react-use-config/main/docs/Streamlining-React-Configurations.png)

#### Features Enhancing `useConfigParam`
![Features Enhancing useConfigParam Hook](https://raw.githubusercontent.com/Malnati/react-use-config/main/docs/Features-Enhancing-useConfigParam-Hook.png)

#### Configuration Retrieval Funnel
![Configuration Value Retrieval Funnel](https://raw.githubusercontent.com/Malnati/react-use-config/main/docs/Configuration-Value-Retrieval-Funnel.png)

---

## Usage Example

```javascript
import useConfigParam from 'react-use-config';

// Retrieve the 'geoServer' parameter with a default value
const geoServer = useConfigParam('geoServer', 'http://localhost:8080/geoserver/isagro/wms');

// Retrieve the 'showMap' parameter with a default value
const showMap = useConfigParam('showMap', true);
```

---

## Benefits

- **Flexibility**: Enables dynamic configurations based on environment variables and URLs.
- **Simplicity**: Reduces complexity in configuration management.
- **Convenience**: Easy integration with React projects using React Router.

---

## Installation

Add the repository to your project with:

```bash
npm install react-use-config
```

---

## Learn More

For additional details and a live preview of this project, visit the [React Use Config GitHub Page](https://malnati.github.io/react-use-config).

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the project.
2. Create a branch for your feature/bugfix (`git checkout -b my-feature`).
3. Commit your changes (`git commit -m 'My new feature'`).
4. Push to the branch (`git push origin my-feature`).
5. Open a pull request.

---

## License

MIT

---

🚀 Built with ❤️ by **Ricardo Malnati** and the amazing open-source community!
