export async function generateMetadata() {
    return {
        title: "Marketing Pages",
    }
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <head>
     
        </head>
        <body>
            <div id="app">{children}</div>
        </body>
    </html>
  );
}