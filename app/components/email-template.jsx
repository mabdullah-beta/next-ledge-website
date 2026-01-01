import * as React from "react";

export const ContactEmailTemplate = ({
  fullName,
  email,
  phone,
  companyName,
  service,
  companySize,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <div style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '30px', borderRadius: '12px', marginBottom: '20px' }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>
        Nieuwe contactaanvraag van SalFin website
      </h1>
      <p style={{ margin: '0', opacity: '0.9', fontSize: '16px' }}>
        Er is een nieuwe contactaanvraag binnengekomen via de website.
      </p>
    </div>
    
    <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ color: '#1E3A8A', marginTop: '0', marginBottom: '20px', fontSize: '20px' }}>
        Contactgegevens
      </h2>
      
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>Naam:</strong>
        <span style={{ color: '#111827' }}>{fullName}</span>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>E-mail:</strong>
        <span style={{ color: '#111827' }}>{email}</span>
      </div>
      
      {phone && (
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>Telefoon:</strong>
          <span style={{ color: '#111827' }}>{phone}</span>
        </div>
      )}
      
      {companyName && (
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>Bedrijf:</strong>
          <span style={{ color: '#111827' }}>{companyName}</span>
        </div>
      )}
      
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>Service:</strong>
        <span style={{ color: '#111827' }}>{service}</span>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#374151', display: 'inline-block', minWidth: '140px' }}>Bedrijfsomvang:</strong>
        <span style={{ color: '#111827' }}>{companySize}</span>
      </div>
    </div>
    
    {message && (
      <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#1E3A8A', marginTop: '0', marginBottom: '15px', fontSize: '20px' }}>
          Bericht
        </h2>
        <p style={{ color: '#111827', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' }}>
          {message}
        </p>
      </div>
    )}
    
    <div style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ margin: '0', fontSize: '14px', opacity: '0.9' }}>
        Deze e-mail is automatisch gegenereerd via het contactformulier op de SalFin website.
      </p>
    </div>
  </div>
);

export default ContactEmailTemplate;
