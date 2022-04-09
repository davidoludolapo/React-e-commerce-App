import React from "react";
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive"

const Container = styled.div`
  height: 60px;
  margin-bottom: 10px;
  ${mobile({height: "50px", marginBottom: "30px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px" })}
`;

// Left Parent
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

// Left Children
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display : "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width: "50px" })}
`;
// End of Left Children

// Center Parent
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// Center Children
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px" })}
`;
// End of Center Children

// Right Parent
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center" })}
`;

// Right Children
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px" })}
`;
// End of Right Children

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon  style={{ color: 'gray', fontSize: 16 }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Diagon</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
