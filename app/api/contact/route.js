import { ContactEmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, service, companySize, message } = body;

    // Validate required fields
    if (!fullName || !email || !service || !companySize) {
      return Response.json(
        { error: 'Missing required fields: fullName, email, service, and companySize are required' },
        { status: 400 }
      );
    }

    // Map service values to readable text
    const serviceMap = {
      'salarisondersteuning': 'Salarisondersteuning',
      'hr-ondersteuning': 'HR-ondersteuning',
      'boekhouding': 'Boekhouding & financiële administratie',
      'accounting': 'Accounting & inzichten',
      'planning': 'Financiële planning & sturing',
      'automatisering': 'Automatisering & IT-oplossingen',
      'interim': 'Interim-oplossingen',
      'anders': 'Anders / nog niet zeker'
    };

    // Map company size values to readable text
    const companySizeMap = {
      'zzp': 'ZZP / eenmanszaak',
      '2-10': '2–10 medewerkers',
      '11-50': '11–50 medewerkers',
      '50+': '50+ medewerkers'
    };

    const readableService = serviceMap[service] || service;
    const readableCompanySize = companySizeMap[companySize] || companySize;

    // Render the email template
    const emailHtml = await render(React.createElement(ContactEmailTemplate, {
      fullName,
      email,
      phone,
      companyName,
      service: readableService,
      companySize: readableCompanySize,
      message,
    }));

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'SalFin Website <noreply@salfin.nl>',
      to: ['zia@salfin.nl'],
      subject: `Nieuwe contactaanvraag van ${fullName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
