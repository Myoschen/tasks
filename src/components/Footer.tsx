import { ExternalLinkIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <div className="p-8 duration-300 bg-gray-200 dark:bg-nord-700 text-nord-600 dark:text-nord-100">
      <div className="container mx-auto">
        {/* Item */}
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:justify-evenly">
          <div>
            <span className="text-lg font-bold">Docs</span>
            <ul className="mt-2">
              <li>
                <a
                  className="flex items-center text-base hover:text-cherrystone-600 hover:underline underline-offset-2 gap-x-1"
                  href="https://github.com/Myoschen"
                >
                  Github
                  <ExternalLinkIcon className="w-4" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-bold">Contact</span>
            <ul className="mt-2">
              <li>
                <a
                  className="flex items-center text-base hover:text-cherrystone-600 hover:underline underline-offset-2 gap-x-1"
                  href="mailto:willy14620@gmail.com"
                >
                  Email
                  <ExternalLinkIcon className="w-4" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-base hover:text-cherrystone-600 hover:underline underline-offset-2 gap-x-1"
                  href="https://discordapp.com/users/584313486901903372"
                >
                  Discord
                  <ExternalLinkIcon className="w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xl font-extrabold text-center">
          Copyright &copy; 2022 Myoschen.
        </div>
      </div>
    </div>
  );
}

export default Footer;
