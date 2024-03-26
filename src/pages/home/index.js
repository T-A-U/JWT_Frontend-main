const StorePage = () => {
  return (
    <div>
      <h1>Welcome to the Stuff.com store</h1>
      <span className="welcomeText">
        "Send more money, we'll send more stuff!"
      </span>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wRbLWOyGITc?si=AG_LFqUi3hxggrk3&amp;start=64"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default StorePage;
