import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Download, Copy, QrCode, Settings, Globe } from 'lucide-react';

const QRGenerator = () => {
  // Auto-detect the correct URL for production
  const getDefaultBaseUrl = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:3000/menu';
    } else {
      // For production (Netlify, Vercel, etc.)
      return `${window.location.origin}/menu`;
    }
  };

  const [baseUrl, setBaseUrl] = useState(getDefaultBaseUrl());
  const [tableCount, setTableCount] = useState(10);
  const [qrSize, setQrSize] = useState(200);
  const [selectedTable, setSelectedTable] = useState(1);

  // Update base URL when component mounts
  useEffect(() => {
    setBaseUrl(getDefaultBaseUrl());
  }, []);

  const generateQRUrl = (tableNumber) => {
    return `${baseUrl}?table=${tableNumber}`;
  };

  const downloadQR = (tableNumber) => {
    const canvas = document.getElementById(`qr-${tableNumber}`);
    if (canvas) {
      const link = document.createElement('a');
      link.download = `table-${tableNumber}-qr.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const copyQRUrl = (tableNumber) => {
    const url = generateQRUrl(tableNumber);
    navigator.clipboard.writeText(url).then(() => {
      alert(`URL for Table ${tableNumber} copied to clipboard!`);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(`URL for Table ${tableNumber} copied to clipboard!`);
    });
  };

  const downloadAllQRs = () => {
    // This would require a more complex implementation to download all QR codes
    alert('Download all QR codes feature would be implemented here.');
  };

  const tables = Array.from({ length: tableCount }, (_, i) => i + 1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="text-6xl mb-6 animate-bounce-gentle">📱</div>
        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 font-display">
          QR Code <span className="text-gradient">Generator</span>
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Generate QR codes for each table to enable digital menu ordering. 
          Customers can scan these codes to access your menu and place orders directly.
        </p>
      </div>

      {/* Settings Panel */}
      <div className="card mb-12 animate-fade-in">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
              <Settings className="text-primary-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-semibold text-secondary-900 font-display">Generator Settings</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                <Globe className="inline w-4 h-4 mr-2" />
                Base URL
              </label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="input-field"
                placeholder="https://yourdomain.com/menu"
              />
              <p className="text-xs text-secondary-500 mt-2">
                The base URL for your menu page. Auto-detected for production.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Number of Tables
              </label>
              <input
                type="number"
                value={tableCount}
                onChange={(e) => setTableCount(parseInt(e.target.value) || 1)}
                min="1"
                max="50"
                className="input-field"
              />
              <p className="text-xs text-secondary-500 mt-2">
                How many tables do you have? (1-50)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                QR Code Size (px)
              </label>
              <input
                type="number"
                value={qrSize}
                onChange={(e) => setQrSize(parseInt(e.target.value) || 200)}
                min="100"
                max="400"
                className="input-field"
              />
              <p className="text-xs text-secondary-500 mt-2">
                Size of generated QR codes (100-400px)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Codes Grid */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 font-display">Generated QR Codes</h2>
          <button
            onClick={downloadAllQRs}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download All</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tables.map((tableNumber) => (
            <div 
              key={tableNumber}
              className="card card-hover p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${tableNumber * 0.05}s` }}
            >
              <div className="mb-4">
                <div className="text-sm font-semibold text-secondary-600 mb-2">
                  Table {tableNumber}
                </div>
                <div className="bg-white p-4 rounded-xl border border-secondary-200 inline-block">
                  <QRCode
                    id={`qr-${tableNumber}`}
                    value={generateQRUrl(tableNumber)}
                    size={qrSize}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => downloadQR(tableNumber)}
                  className="w-full btn-primary text-sm py-2 inline-flex items-center justify-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => copyQRUrl(tableNumber)}
                  className="w-full btn-secondary text-sm py-2 inline-flex items-center justify-center space-x-2"
                >
                  <Copy size={16} />
                  <span>Copy URL</span>
                </button>
              </div>
              
              <div className="mt-3 text-xs text-secondary-500 break-all">
                {generateQRUrl(tableNumber)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="card p-8 animate-fade-in">
        <h3 className="text-xl font-semibold mb-6 text-secondary-900 font-display">How to Use</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Generate QR Codes</h4>
                <p className="text-secondary-600 text-sm">Use the settings above to configure your QR codes with the correct URL and number of tables.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Download & Print</h4>
                <p className="text-secondary-600 text-sm">Download each QR code and print them. Place one QR code on each table.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Customer Experience</h4>
                <p className="text-secondary-600 text-sm">Customers scan the QR code with their phone camera to access your digital menu.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Order Management</h4>
                <p className="text-secondary-600 text-sm">Orders are automatically tagged with the table number for seamless service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current URL Info */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
          <Globe className="w-4 h-4" />
          <span>Current Domain: {window.location.origin}</span>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator; 