import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
import { DiAtom } from "react-icons/di";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface LiProps {
  active: boolean;
}
const Li = styled.li<LiProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No thing Found</p>
      </>
    );
  return (
    <>
      {" "}
      <DiAtom color="red" size={40} />
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <Li
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Li>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
