function MainContent() {
  return (
    <div>
      <h1>Reasons for me to learn React!</h1>
      <ol>
        <li>Its awesome</li>
        <li>I want to program</li>
        <li>I need it to be my career</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Brouwer development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
