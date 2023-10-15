import "../styles/globals.css";
import Navigation from "../components/Navigation";

export const metadata = {
  title: {
    template: "%s | The New York Times Best Seller",
    default: "Home | The New York Times Best Seller",
  },
  description: "Welcome The New York Times Best Seller's Explorer.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/papercss@1.9.2/dist/paper.min.css"
        />
        <link rel="icon" href="/new_york_times_icon.ico" type="image/x-icon" />
      </head>
      <body>
        {/* 스타일 적용 안된다니까 추후에 변경하기~ */}
        <div id="top" className="site">
          <Navigation />
          {children}
          <div className="to-top">
            <a href="#top" className="paper-btn margin">
              ^
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
