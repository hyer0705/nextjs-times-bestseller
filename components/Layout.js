import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div id="top" class="site">
      <Navigation />
      <div>{children}</div>
      <div className="to-top">
        <a href="#top" className="paper-btn margin">
          ^
        </a>
      </div>
      <style jsx>{`
        .to-top {
          opacity: 1;
          display: inline-block;
          padding: 1rem;
          position: fixed;
          bottom: 0.5em;
          right: 0.5em;
        }
        .to-top .paper-btn {
          padding: 0.6em 1em;
          border-top-left-radius: 185px 160px;
          border-top-right-radius: 200px 195px;
          border-bottom-right-radius: 160px 195px;
          border-bottom-left-radius: 185px 190px;
        }
      `}</style>
    </div>
  );
}
