"use client";
import { AppBar, UserMenu } from 'react-admin';
import Link from 'next/link';

const appBar = () => (
  <AppBar>
    <div className="flex justify-between items-center w-full"> 
      {/* Use flexbox for spacing */}
      <UserMenu />
      <div className="flex space-x-4"> {/* Group links and add spacing */}
        <Link href="https://dashboard.clerk.dev/apps/app_2g45kj9mPoJRqca73f63AoZJBOH/instances/ins_2g45kbxAjEVye6xzkkg1IHrl4vk" target="_blank" rel="noopener noreferrer">
          Users Dashboard
        </Link>
        <Link href="https://dashboard.stripe.com/" target="_blank" rel="noopener noreferrer">
          Payment Dashboard
        </Link>
      </div>
    </div>
  </AppBar>
);

export default appBar;