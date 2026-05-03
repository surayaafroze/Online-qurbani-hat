"use client";

import { Button, Dropdown, Label } from "@heroui/react";

const ButtonPage = ({ setSorting }) => {
  return (
    <Dropdown>
      <Button variant="secondary">Sort by Price</Button>

      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => setSorting(key)}>

          <Dropdown.Item id="low">
            <Label>Low → High</Label>
          </Dropdown.Item>

          <Dropdown.Item id="high">
            <Label>High → Low</Label>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ButtonPage;