import TopAppBar from "@/components/TopAppBar";
import "./globals.css";

async function getTimeInfo() {
  console.log("AnotherComponent");
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const timeData = await getTimeInfo();
  return (
    <html lang="en">
      <body>
        <div
          style={{
            height: "100vh",
          }}
        >
          <TopAppBar />
          <h2>{timeData.datetime}</h2>
          {children}
        </div>
      </body>
    </html>
  );
}
