const Footer = () => {
  return (
    <footer className="p-12 bg-white">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-10">
          <h2 className="text-primary text-2xl font-bold mb-2">MORENT</h2>
          <p className="text-secondary-300 font-medium">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <li className="flex flex-col gap-y-4 [&_span]:text-secondary-300 [&_span]:font-medium">
            <h2 className="mb-4 font-bold text-lg">About</h2>
            <span>How it works</span>
            <span>Featured</span>
            <span>Partnership</span>
            <span>Bussiness Relation</span>
          </li>
          <li className="flex flex-col gap-y-4 [&_span]:text-secondary-300 [&_span]:font-medium">
            <h2 className="mb-4 font-bold text-lg">Socials</h2>
            <span>Discord</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Facebook Relation</span>
          </li>
          <li className="flex flex-col gap-y-4 [&_span]:text-secondary-300 [&_span]:font-medium">
            <h2 className="mb-4 font-bold text-lg">Commiunity</h2>
            <span>Events</span>
            <span>Blog</span>
            <span>Podcast</span>
            <span>Invite a friend</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-between border-t border-t-secondary-300/30 p-8 font-semibold gap-y-4">
        <div className="flex gap-x-12">
          <h2>Privacy & Policy</h2>
          <h2>Terms & Condition</h2>
        </div>
        <h2>©2022 MORENT. All rights reserved</h2>
      </div>
    </footer>
  );
};
export default Footer;
