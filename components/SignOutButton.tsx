"use client";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import React from "react";

const SignOutButton = () => {
  return (
    <div>
      <Button className="btn-primary" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
};
export default SignOutButton;
