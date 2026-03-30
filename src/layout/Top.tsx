import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Div, Row } from "../common/styleDiv";
import { menuItems, menuItemHref } from "../pages/base/items";
import { MenuItem, GroupRow } from "./Layout.style";

export const Top = () => {
  return (
    <>
      {menuItems.map((menu, index) => {
        return (
          <GroupRow key={index}>
            <Title width="20%">{menu.category}</Title>
            <RowTop width="79%" justifyContent="flex-start" gap="5px">
              {menu.items.map((item) => {
                const names = item.name.split(":");
                const label = names.length > 1 ? names[0] : item.name;
                const href = menuItemHref(item);
                return href ? (
                  <Link
                    key={item.name}
                    to={href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Item>{label}</Item>
                  </Link>
                ) : (
                  <Item key={item.name} isPending>
                    {label}
                  </Item>
                );
              })}
            </RowTop>
          </GroupRow>
        );
      })}
    </>
  );
};

const Title = styled(Div)`
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Item = styled(MenuItem)`
  width: unset;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

/* color: DodgerBlue;
color: CornflowerBlue;
color: SteelBlue;
color: RoyalBlue;
color: Blue;
color: MediumBlue;
color: DarkBlue;
color: Navy;
color: MidnightBlue; */

const RowTop = styled(Row)`
  flex-wrap: wrap;
`;
