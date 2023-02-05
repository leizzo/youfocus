function Footer() {
  return (
    <div className="w-full absolute bottom-4 left-0 justify-center flex">
      <span className="text-xs">
        <a href="https://youfocus.vercel.app" target="_blank" rel="noreferrer">@youfocus</a>
        <br />
        <span className="opacity-50">
          { __APP_VERSION__ }
        </span>
      </span>
    </div>
  );
}

export default Footer;
