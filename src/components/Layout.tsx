import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout() {
  return (
    <div css={containerStyle}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
