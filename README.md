# TrabajoYa - Web App

Aplicación web simple para TrabajoYa que incluye:
- Landing page con descargas para Android e iOS
- Páginas de Términos y Condiciones
- Páginas de Política de Privacidad
- Callbacks de PayPal (payment/success y payment/cancel)

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build

```bash
# Compilar para producción
npm run build

# Ejecutar versión de producción
npm start
```

## Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura el proyecto:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Despliega

## URLs Importantes

- Landing page: `/`
- Términos y Condiciones: `/public/terms`
- Política de Privacidad: `/public/privacy`
- PayPal Success: `/payment/success`
- PayPal Cancel: `/payment/cancel`

## URLs para Google OAuth

Cuando configures Google OAuth, usa estas URLs:
- Página principal: `https://tu-dominio.com`
- Política de Privacidad: `https://tu-dominio.com/public/privacy-policy` (redirige a `/public/privacy`)
- Términos de Servicio: `https://tu-dominio.com/public/terms-of-service` (redirige a `/public/terms`)

