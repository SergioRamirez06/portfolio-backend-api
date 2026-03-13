export const contactEmailTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string
) => {

  return `
  <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #eee; border-radius:8px; padding:20px">
    
    <h2 style="color:#2563eb;">📨 Nuevo mensaje desde tu portafolio</h2>

    <p>Has recibido un nuevo mensaje desde el formulario de contacto.</p>

    <hr/>

    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <td style="padding:8px; font-weight:bold;">Nombre</td>
        <td style="padding:8px;">${name}</td>
      </tr>

      <tr>
        <td style="padding:8px; font-weight:bold;">Email</td>
        <td style="padding:8px;">${email}</td>
      </tr>

      <tr>
        <td style="padding:8px; font-weight:bold;">Asunto</td>
        <td style="padding:8px;">${subject}</td>
      </tr>
    </table>

    <hr/>

    <h3>Mensaje</h3>

    <div style="
        background:#f8fafc;
        padding:15px;
        border-radius:6px;
        border:1px solid #e2e8f0;
    ">
      ${message}
    </div>

    <hr/>

    <p style="font-size:12px;color:#6b7280;">
      Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
    </p>

  </div>
  `;
};