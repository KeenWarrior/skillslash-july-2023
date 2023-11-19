export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <head>
            <title>My App</title>
        </head>
        <body>
            <div id="app">{children}</div>
        </body>
    </html>
  );
}