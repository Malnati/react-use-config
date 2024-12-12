
# react-use-config

`react-use-config` is a React Hook (`useConfigParam`) for dynamically retrieving configuration parameters with well-defined priorities.

## Features

The `useConfigParam` follows the following priority order when fetching a parameter value:
1. **Query Parameter**: Retrieved directly from the URL.
2. **Environment Variable**: Defined in the `.env` file (prefixed with `REACT_APP_`).
3. **Default Value**: A fallback provided by the user.

### Usage Example

```javascript
import useConfigParam from 'react-use-config';

// Retrieve the 'geoServer' parameter with a default value
const geoServer = useConfigParam('geoServer', 'http://localhost:8080/geoserver/isagro/wms');

// Retrieve the 'showMap' parameter with a default value
const showMap = useConfigParam('showMap', true);
```

## Benefits

- **Flexibility**: Enables dynamic configurations based on environment variables and URLs.
- **Simplicity**: Reduces complexity in configuration management.
- **Convenience**: Easy integration with React projects using React Router.

## Installation

Add the repository to your project with:

```bash
npm install react-use-config
```

## Contributing

1. Fork the project.
2. Create a branch for your feature/bugfix (`git checkout -b my-feature`).
3. Commit your changes (`git commit -m 'My new feature'`).
4. Push to the branch (`git push origin my-feature`).
5. Open a pull request.

## License

MIT
