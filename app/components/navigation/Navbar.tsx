import React from "react";
import { NavLink as ReactRouterNavLink } from "react-router";

import { ROUTE_DEFINITIONS, RouteType } from "~/routes";
import { Flex } from "~/components/element";
import clsx from "clsx";

const ProfileWidget = () => {
  return (
    <div className="bg-gray-500 rounded-full w-12 h-12 place-items-center grid text-2xl">
      G
    </div>
  );
};

interface NavLinkProps {
  name: string;
  path?: string;
}

const NavLink = ({ name, path = "" }: NavLinkProps) => {
  return (
    <ReactRouterNavLink
      to={`/${path}`}
      className={({ isActive }) => clsx(isActive && "border-b", "flex")}
    >
      <Flex column align="center">
        <Flex grow shrink align="center">
          <span className="text-lg">{name}</span>
        </Flex>
      </Flex>
    </ReactRouterNavLink>
  );
};

const NavItems = () => {
  return (
    <>
      <Flex grow justify="center">
        {ROUTE_DEFINITIONS.map(
          (route) =>
            route.path !== "api" && (
              <NavLink
                key={route.path}
                name={route.name}
                path={route.type !== RouteType.Index ? route.path : undefined}
              />
            )
        )}
      </Flex>
      <Flex initial justify="end">
        <ProfileWidget />
      </Flex>
    </>
  );
};

export default function Navbar() {
  return (
    <Flex initial className="p-2">
      <NavItems />
    </Flex>
  );
}
