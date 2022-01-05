import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function APIVersionSwitcher({ current }) {
  return (
    <Menu>
      <Menu.Button className="absolute top-16 right-1 flex items-center px-4 py-3">
        API Versions
        <ChevronDownIcon className="h-4 ml-1 text-text-100" />
      </Menu.Button>
      <Menu.Items className="flex flex-col w-32 py-2 absolute top-28 right-4 bg-background-100 text-text-100 shadow-xl ring-1 ring-background-300 rounded-lg overflow-hidden z-20">
        <Menu.Item>
          <Link
            className={clsx(
              'px-4 py-2 text-text-100 text-right hover:bg-background-200 hover:text-text hover:no-underline',
            )}
            href="/api/"
          >
            v1
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className={clsx(
              'px-4 py-2 text-text text-right hover:bg-background-200 hover:text-text hover:no-underline'
            )}
            href="/api/v2/"
          >
            v2
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
