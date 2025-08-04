import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Download, Copy, QrCode, Settings } from 'lucide-react';

const QRGenerator = () => {
  const [baseUrl, setBaseUrl] = useState('http://localhost:3000/menu');
  const [tableCount, setTableCount] = useState(10);
  const [qrSize, setQrSize] = useState(200);
  const [selectedTable, setSelectedTable] = useState(1);

  const generateQRUrl = (tableNumber) => {
    return `${baseUrl}?table=${tableNumber}`;
  };

  const downloadQR = (tableNumber) => {
    const canvas = document.getElementById(`qr-${tableNumber}`);
    const link = document.createElement('a');
    link.download = `table-${tableNumber}-qr.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const copyQRUrl = (tableNumber) => {
    const url = generateQRUrl(tableNumber);
    navigator.clipboard.writeText(url).then(() => {
      alert(`URL for Table ${tableNumber} copied to clipboard!`);
    });
  };

  const downloadAllQRs = () => {
    // This would require a more complex implementation to download all QR codes
    alert('Download all QR codes feature would be implemented here.');
  };

  const tables = Array.from({ length: tableCount }, (_, i) => i + 1);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📱</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">QR Code Generator</h1>
        <p className="text-gray-600">
          Generate QR codes for each table to enable digital menu ordering
        </p>
      </div>

      {/* Settings Panel */}
      <div className="card mb-8">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Settings size={20} className="text-primary-500" />
            <h2 className="text-xl font-semibold">Generator Settings</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base URL
              </label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://yourdomain.com/menu"
              />
              <p className="text-xs text-gray-500 mt-1">
                The base URL for your menu page
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Tables
              </label>
              <input
                type="number"
                value={tableCount}
                onChange={(e) => setTableCount(parseInt(e.target.value) || 1)}
                min="1"
                max="50"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                How many tables do you have?
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                QR Code Size (px)
              </label>
              <input
                type="number"
                value={qrSize}
                onChange={(e) => setQrSize(parseInt(e.target.value) || 200)}
                min="100"
                max="400"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Size of generated QR codes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Individual QR Code Display */}
      <div className="card mb-8">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <QrCode size={20} className="text-primary-500" />
            <h2 className="text-xl font-semibold">Individual QR Code</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <QRCode
                  id={`qr-${selectedTable}`}
                  value={generateQRUrl(selectedTable)}
                  size={qrSize}
                  level="M"
                  includeMargin={true}
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Table
                </label>
                <select
                  value={selectedTable}
                  onChange={(e) => setSelectedTable(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {tables.map(table => (
                    <option key={table} value={table}>Table {table}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  QR Code URL
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={generateQRUrl(selectedTable)}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                  <button
                    onClick={() => copyQRUrl(selectedTable)}
                    className="btn-secondary inline-flex items-center space-x-1"
                  >
                    <Copy size={16} />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => downloadQR(selectedTable)}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Download QR Code</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All QR Codes Grid */}
      <div className="card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <QrCode size={20} className="text-primary-500" />
              <h2 className="text-xl font-semibold">All Table QR Codes</h2>
            </div>
            <button
              onClick={downloadAllQRs}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download All</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {tables.map(table => (
              <div key={table} className="text-center">
                <div className="bg-white p-3 rounded-lg border border-gray-200 mb-3">
                  <QRCode
                    value={generateQRUrl(table)}
                    size={Math.min(qrSize, 150)}
                    level="M"
                    includeMargin={true}
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Table {table}</h3>
                <div className="flex space-x-2 justify-center">
                  <button
                    onClick={() => downloadQR(table)}
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => copyQRUrl(table)}
                    className="text-gray-600 hover:text-gray-700 text-sm"
                  >
                    Copy URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Use</h3>
        <div className="space-y-2 text-blue-700">
          <p>1. Configure your base URL and number of tables above</p>
          <p>2. Generate QR codes for each table</p>
          <p>3. Download and print the QR codes</p>
          <p>4. Place each QR code on the corresponding table</p>
          <p>5. Customers can scan the QR code to access the menu for that specific table</p>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator; 