import '@testing-library/jest-dom';

// Mock de fetch global
global.fetch = jest.fn();

// Mock para react-leaflet
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div>{children}</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: () => <div>Marker</div>,
  Popup: () => <div>Popup</div>,
  Polyline: () => <div>Polyline</div>
}));
