import Layout from '../components/Layout';
import StyledComponentsRegistry from '../lib/registry';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
