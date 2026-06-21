"use client";

import React from "react";
import { SidebarLayouts } from "@opal/layouts";
import { useShowLogoWhenFolded } from "@/lib/sidebar/hooks";
import Logo from "@/refresh-components/Logo";
import { useUser } from "@/providers/UserProvider";

// Derive a display first name from the signed-in account's email local-part
// (e.g. "hugh.carlson@..." -> "Hugh").
function firstNameOf(email?: string | null): string {
  const first = (email || "").split("@")[0].split(/[._-]+/)[0];
  return first ? first.charAt(0).toUpperCase() + first.slice(1) : "";
}

// In the collapsed sidebar, greet the signed-in user; otherwise show the
// Three Crowns wordmark.
function AppHeaderLogo({ folded }: { folded?: boolean }): React.ReactNode {
  const { user } = useUser();
  const first = firstNameOf(user?.email);
  if (folded && first) {
    return (
      <div className="px-1">
        <span
          className="select-none whitespace-nowrap"
          style={{
            color: "var(--tc-gold, #b49a56)",
            fontFamily: "var(--font-hanken-grotesk), 'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Hello, {first}
        </span>
      </div>
    );
  }
  return (
    <div className="px-1">
      <Logo folded={folded} size={28} />
    </div>
  );
}

/**
 * Renders the app-branded logo for use as the `logo` prop on sidebar primitives.
 * Exported so other sidebar entry points (e.g. AdminSidebar) can reuse it.
 */
export function renderAppLogo(folded: boolean | undefined): React.ReactNode {
  return <AppHeaderLogo folded={folded} />;
}

export interface SidebarWrapperProps {
  foldable?: boolean;
  children?: React.ReactNode;
}

/**
 * App-specific sidebar wrapper. Thin shell around `SidebarLayouts.Root`
 * that injects the enterprise-aware logo and show/hide rules.
 */
export default function SidebarWrapper({
  foldable = false,
  children,
}: SidebarWrapperProps) {
  const showLogoWhenFolded = useShowLogoWhenFolded();

  return (
    <SidebarLayouts.Root foldable={foldable}>
      <SidebarLayouts.Header
        logo={renderAppLogo}
        showLogoWhenFolded={showLogoWhenFolded}
      />
      {children}
    </SidebarLayouts.Root>
  );
}
