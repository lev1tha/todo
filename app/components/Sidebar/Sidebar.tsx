"use client";
import React from "react";
import Image from "next/image";

import styled from "styled-components";
import { useGlobalState } from "@/app/context/GlobalContextProvider";
import menu from "@/app/utils/menu";
import Link from "next/link";

function Sidebar() {
  const { theme } = useGlobalState();
  return (
    <SiderbarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src="/discord.jpeg" alt="photo" />
        </div>
        <h1>
          <span>Eldos</span>
          <span>Matkerimov</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          return (
            <li>
              {item.icon}
              <Link href={item.link}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </SiderbarStyled>
  );
}

const SiderbarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};

  border-radius: 1rem;
`;
export default Sidebar;
