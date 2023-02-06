import { Button } from '@youfocus/ui';

function Footer() {
  return (
    <div className="w-full absolute bottom-4 left-0 justify-center flex">
      <span className="text-xs">
        <Button variant="link" href="https://youfocus.vercel.app" target="_blank" text="@youfocus" />
        <br />
        <span className="opacity-50">
          { __APP_VERSION__ }
        </span>
      </span>
    </div>
  );
}

export default Footer;
