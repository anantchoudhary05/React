const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="res-card">
      <img
        className="menu-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/otxjgu2dlilt40jtgqgv"
      ></img>
      <h3>Radhe Radhe</h3>
      <h4>Bakery, Desserts Kasipur</h4>
      <h4>4.4 star</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
